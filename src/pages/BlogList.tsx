import { useState, useMemo } from "react";
import { blogPosts, categories } from "@/data/blogPosts";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import BlogCard from "@/components/BlogCard";
import AdsterraBanner from "@/components/AdsterraBanner";

const POSTS_PER_PAGE = 12;

const BlogList = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!selectedCategory) return blogPosts;
    return blogPosts.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader />
      <main className="flex-1 container mx-auto px-4 py-10">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">All Stories</h1>
        <p className="text-muted-foreground mb-8">{filtered.length} articles to explore</p>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => { setSelectedCategory(null); setPage(1); }}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${!selectedCategory ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"}`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setPage(1); }}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${selectedCategory === cat ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AdsterraBanner width={728} height={90} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {paginated.map((post, i) => (
            <div key={post.id}>
              <BlogCard post={post} />
              {(i + 1) % 6 === 0 && i < paginated.length - 1 && (
                <div className="col-span-full mt-6">
                  <AdsterraBanner width={728} height={90} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            disabled={page <= 1}
            onClick={() => setPage(p => p - 1)}
            className="px-4 py-2 rounded-lg border border-border text-sm font-medium disabled:opacity-40 hover:bg-muted transition-colors"
          >
            ← Prev
          </button>
          <span className="text-sm text-muted-foreground px-4">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage(p => p + 1)}
            className="px-4 py-2 rounded-lg border border-border text-sm font-medium disabled:opacity-40 hover:bg-muted transition-colors"
          >
            Next →
          </button>
        </div>
      </main>
      <BlogFooter />
    </div>
  );
};

export default BlogList;
