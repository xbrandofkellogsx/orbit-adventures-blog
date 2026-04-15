import { useParams, Link } from "react-router-dom";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import BlogCard from "@/components/BlogCard";
import AdsterraBanner from "@/components/AdsterraBanner";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <BlogHeader />
        <main className="flex-1 container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to all posts</Link>
        </main>
        <BlogFooter />
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const related = blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  // Split content for mid-article ad
  const contentParts = post.content.split("</p>");
  const midPoint = Math.floor(contentParts.length / 2);
  const firstHalf = contentParts.slice(0, midPoint).join("</p>") + "</p>";
  const secondHalf = contentParts.slice(midPoint).join("</p>");

  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader />
      <main className="flex-1">
        {/* Hero image */}
        <div className="w-full aspect-[21/9] max-h-[480px] overflow-hidden bg-muted">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <article className="container mx-auto px-4 max-w-3xl py-10">
          <div className="mb-8">
            <Link to={`/category/${post.category.toLowerCase().replace(/ & /g, "-")}`} className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 inline-block hover:underline">
              {post.category}
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{post.author}</span>
              <span>·</span>
              <span>{formattedDate}</span>
              <span>·</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Top ad */}
          <AdsterraBanner width={728} height={90} />

          {/* First half of content */}
          <div className="blog-prose mt-8" dangerouslySetInnerHTML={{ __html: firstHalf }} />

          {/* Mid-article ad */}
          <AdsterraBanner width={728} height={250} />

          {/* Second half of content */}
          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: secondHalf }} />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom ad */}
          <AdsterraBanner width={728} height={90} className="mt-6" />
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="container mx-auto px-4 max-w-5xl py-10 border-t border-border">
            <h2 className="font-serif text-2xl font-bold mb-6">More in {post.category}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(p => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <BlogFooter />
    </div>
  );
};

export default BlogPost;
