import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPost({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}
      </div>
      <div className="md:grid md:grid-cols-2 mb-20 md:mb-28">
        <div className="ml-4 mr-4">
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} />
            </Link>
          </h3>
          <Avatar author={author} />
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div className="ml-4 mr-4">
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
    </section>
  );
}
