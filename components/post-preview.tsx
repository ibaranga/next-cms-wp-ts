import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <div>
      <div className="mb-5">
        {coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}
      </div>
      <h3 className="text-2xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} />
        </Link>
      </h3>
      <Avatar author={author} />
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <div
        className="text-lg leading-relaxed mb-4 bg-accent-1"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </div>
  );
}
