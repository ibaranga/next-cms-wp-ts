import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getGeneralSettings, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import Tags from "../../components/tags";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  ApiGeneralSettings,
  ApiNodeEdges,
  ApiPost,
  ApiPostDetails,
  ApiPostSlug,
  ApiPreviewPost,
} from "../../lib/api-types";
import { ParsedUrlQuery } from "querystring";

export interface PostProps {
  post: ApiPostDetails;
  posts: ApiNodeEdges<ApiPost>;
  preview: boolean;
  generalSettings: ApiGeneralSettings;
}

export interface PostPreviewData {
  post: ApiPreviewPost;
}

export default function Post({ post, posts, preview, generalSettings }: PostProps) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.featuredImage?.node?.sourceUrl} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage?.node}
                date={post.date}
                author={post.author?.node}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>{post.tags.edges.length > 0 && <Tags tags={post.tags} />}</footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PostProps, ParsedUrlQuery, PostPreviewData> = async ({
  params,
  preview = false,
  previewData,
}) => {
  const { post, posts } = await getPostAndMorePosts(params.slug, preview, previewData);
  const generalSettings = await getGeneralSettings();
  return {
    props: {
      preview,
      post,
      posts,
      generalSettings,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts: ApiNodeEdges<ApiPostSlug> = await getAllPostsWithSlug();

  return {
    paths: (allPosts.edges || []).map(({ node }) => `/posts/${node.slug}`),
    fallback: true,
  };
};
