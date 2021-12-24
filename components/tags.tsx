export default function Tags({ tags }) {
  return (
    <div className="max-w-3xl mx-auto">
      <p className="mt-8 text-lg">
        Tagged
        {tags.edges.map((tag, index) => (
          <span key={index} className="p-1.5 font-bold rounded-full-xs bg-accent-1">
            {tag.node.name}
          </span>
        ))}
      </p>
    </div>
  );
}
