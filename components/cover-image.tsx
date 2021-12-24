import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { ApiImage } from "../lib/api-types";

export interface CoverImageProps {
  title: string;
  coverImage?: ApiImage;
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: CoverImageProps) {
  const image = coverImage?.sourceUrl ? (
    <>
      <Image
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={coverImage?.sourceUrl}
        className={cn("shadow-small", {
          "hover:shadow-medium transition-shadow duration-200": slug,
        })}
      />
      <div
        className="wp-thumbnail-caption"
        dangerouslySetInnerHTML={{ __html: coverImage?.caption }}
      />
    </>
  ) : null;
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
