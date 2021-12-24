import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Categories from "./categories";
import { ApiAuthor, ApiCategory, ApiEdgesNodes, ApiImage } from "../lib/api-types";

export interface PostHeaderProps {
  title: string;
  coverImage: ApiImage;
  date: string;
  author: ApiAuthor;
  categories: ApiEdgesNodes<ApiCategory>;
}

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}: PostHeaderProps) {
  return (
    <>
      {/*<PostTitle>{title}</PostTitle>*/}
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="block mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
}
