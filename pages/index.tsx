import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getGeneralSettings } from "../lib/api";
import { ApiGeneralSettings, ApiNode, ApiPostSummary } from "../lib/api-types";
import { GetStaticProps } from "next";

export interface IndexProps {
  posts: ApiNode<ApiPostSummary>[];
  preview: boolean;
  generalSettings: ApiGeneralSettings;
}

export default function Index({
  posts: [{ node: heroPost }, ...morePosts],
  preview,
  generalSettings,
}: IndexProps) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>
            {generalSettings.title}: {generalSettings.description}
          </title>
        </Head>
        <Container>
          <Intro generalSettings={generalSettings} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps<IndexProps> = async ({ preview = false }) => {
  const posts: ApiNode<ApiPostSummary>[] = await getAllPostsForHome(preview);
  const generalSettings: ApiGeneralSettings = await getGeneralSettings();
  return {
    props: { posts, preview, generalSettings },
  };
};
