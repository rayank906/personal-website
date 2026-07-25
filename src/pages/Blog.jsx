import { Link } from "react-router-dom";
import { getPosts } from "@/lib/blog";

export const Blog = () => {
  const posts = getPosts();

  return (
    <section className="container py-20">
      <h1 className="text-3xl font-bold mb-10">Blog</h1>

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block group no-underline">
            <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-muted mb-1">{post.date}</p>
            <p className="text-foreground/90">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
