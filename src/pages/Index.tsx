import { useState, useMemo } from "react";
import { blogPosts, categories } from "@/data/blogPosts";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import BlogCard from "@/components/BlogCard";
import AdsterraBanner from "@/components/AdsterraBanner";

const Index = () => {
  const featured = blogPosts.slice(0, 3);
  const recent = blogPosts.slice(3, 15);

  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-10 pb-6">
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Stories Worth<br />
              <span className="text-primary">Traveling For</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              200 stories of travel, culture, and intentional living from six continents. Explore with us.
            </p>
          </div>

          {/* Featured post */}
          <BlogCard post={featured[0]} featured />
        </section>

        <AdsterraBanner width={728} height={90} className="container mx-auto px-4" />

        {/* Featured row */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="font-serif text-2xl font-bold mb-6">Editor's Picks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.slice(1).map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="font-serif text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <a
                key={cat}
                href={`/category/${cat.toLowerCase().replace(/ & /g, "-")}`}
                className="px-5 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {cat}
              </a>
            ))}
          </div>
        </section>

        <AdsterraBanner width={728} height={90} className="container mx-auto px-4" />

        {/* Recent posts */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="font-serif text-2xl font-bold mb-6">Latest Stories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recent.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <div className="container mx-auto px-4 py-6 text-center">
          <a href="/blog" className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
            View All 200 Posts →
          </a>
        </div>
      </main>

      <BlogFooter />
    </div>
  );
};

export default Index;
