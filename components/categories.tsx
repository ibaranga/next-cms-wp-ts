import { ApiCategory, ApiEdgesNodes } from "../lib/api-types";

export interface CategoriesProps {
  categories: ApiEdgesNodes<ApiCategory>;
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <span className="ml-1">
      under
      {categories.edges.map((category, index) => (
        <span key={index} className="p-1.5 font-bold rounded-full bg-accent-1">
          {category.node.name}
        </span>
      ))}
    </span>
  );
}
