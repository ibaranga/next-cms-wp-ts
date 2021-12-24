import styles from "./post-body.module.css";

export interface PostBodyProps {
  content: string;
}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
