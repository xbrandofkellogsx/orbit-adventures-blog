import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blogPosts";

const BlogCard = ({ post, featured = false }: { post: BlogPost; featured?: boolean }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  if (featured) {
    return (
      <Link to={`/blog/${post.slug}`} className="group block">
        <article className="grid md:grid-cols-2 gap-6 bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
          <div className="aspect-[16/10] md:aspect-auto overflow-hidden bg-muted">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
          <div className="flex flex-col justify-center p-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{post.category}</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h2>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{post.author}</span>
              <span>·</span>
              <span>{formattedDate}</span>
              <span>·</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <article className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{post.category}</span>
          <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">{post.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.readTime} min</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
