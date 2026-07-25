const modules = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const [, frontmatter, content] = match;
  const data = {};
  frontmatter.split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    data[key] = value;
  });
  return { data, content: content.trim() };
}

function loadPosts() {
  return Object.entries(modules).map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    return {
      slug: data.slug ?? path.split("/").pop().replace(/\.md$/, ""),
      title: data.title ?? "Untitled",
      date: data.date ?? "1970-01-01",
      excerpt: data.excerpt ?? "",
      content,
    };
  });
}

const allPosts = loadPosts();

export function getPosts() {
  return [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return allPosts.find((post) => post.slug === slug) ?? null;
}
