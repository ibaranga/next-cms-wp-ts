import PostPreview from "./post-preview";
import { ApiNode, ApiPostSummary } from "../lib/api-types";

export interface MoreStoriesProps {
  posts: ApiNode<ApiPostSummary>[];
}

export default function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <section>
      <h2 className="mb-8 text-2xl md:text-3xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {posts.map(({ node }) => (
          <div key={node.slug} className="ml-4 mr-4 mb-4">
            <PostPreview
              title={node.title}
              coverImage={node.featuredImage?.node}
              date={node.date}
              author={node.author?.node}
              slug={node.slug}
              excerpt={node.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
