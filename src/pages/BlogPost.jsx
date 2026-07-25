import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "@/lib/blog";

export const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="container py-20">
        <p className="mb-4">Post not found.</p>
        <Link to="/blog">Back to blog</Link>
      </div>
    );
  }

  return (
    <article className="container py-20">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-muted text-sm mb-8">{post.date}</p>
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};
