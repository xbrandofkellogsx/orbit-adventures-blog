import { useParams } from "react-router-dom";
import { blogPosts, categories } from "@/data/blogPosts";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import BlogCard from "@/components/BlogCard";
import AdsterraBanner from "@/components/AdsterraBanner";
import { useState } from "react";

const POSTS_PER_PAGE = 12;

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [page, setPage] = useState(1);

  const catName = categories.find(c => c.toLowerCase().replace(/ & /g, "-") === category) || category || "";
  const filtered = blogPosts.filter(p => p.category.toLowerCase().replace(/ & /g, "-") === category);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader />
      <main className="flex-1 container mx-auto px-4 py-10">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">{catName}</h1>
        <p className="text-muted-foreground mb-8">{filtered.length} articles</p>

        <AdsterraBanner />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {paginated.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-12">
          <button disabled={page <= 1} onClick={() => setPage(p => p - 1)} className="px-4 py-2 rounded-lg border border-border text-sm font-medium disabled:opacity-40 hover:bg-muted transition-colors">← Prev</button>
          <span className="text-sm text-muted-foreground px-4">Page {page} of {totalPages}</span>
          <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)} className="px-4 py-2 rounded-lg border border-border text-sm font-medium disabled:opacity-40 hover:bg-muted transition-colors">Next →</button>
        </div>
      </main>
      <BlogFooter />
    </div>
  );
};

export default CategoryPage;
