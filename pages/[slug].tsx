import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../components/container";
import Header from "../components/header";
import SectionSeparator from "../components/section-separator";
import Layout from "../components/layout";
import { getBlogPages, getGeneralSettings } from "../lib/api";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { ApiBlogPage, ApiGeneralSettings } from "../lib/api-types";
import { ParsedUrlQuery } from "querystring";

export interface BlogPageProps {
  blogPage: ApiBlogPage;
  generalSettings: ApiGeneralSettings;
}

export default function BlogPage({ blogPage, generalSettings }: BlogPageProps) {
  const router = useRouter();

  if (!router.isFallback && !blogPage?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={false}>
      <Header generalSettings={generalSettings} title={blogPage.title} />
      <Container>
        {router.isFallback ? (
          <>Loading…</>
        ) : (
          <>
            <article>
              <Head>
                <title>{blogPage.name}</title>
                <meta property="og:image" content={blogPage.featuredImage?.node?.sourceUrl} />
              </Head>
              <div dangerouslySetInnerHTML={{ __html: blogPage.content }} />
              <footer></footer>
            </article>

            <SectionSeparator />
            {/*{morePosts.length > 0 && <MoreStories posts={morePosts} />}*/}
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<BlogPageProps, ParsedUrlQuery> = async ({
  params,
  preview = false,
  previewData,
}) => {
  const [blogPage] = await getBlogPages([params.slug as string]);
  const generalSettings = await getGeneralSettings();
  return {
    props: {
      blogPage: blogPage ?? null,
      generalSettings,
    },
  };
};
