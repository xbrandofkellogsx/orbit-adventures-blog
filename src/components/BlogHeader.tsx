import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { categories } from "@/data/blogPosts";

const BlogHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-foreground">
            Orbital<span className="text-primary">Blog</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            {categories.slice(0, 4).map(cat => (
              <Link key={cat} to={`/category/${cat.toLowerCase().replace(/ & /g, "-")}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {cat}
              </Link>
            ))}
            <Link to="/blog" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">All Posts</Link>
          </nav>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground">Home</Link>
            {categories.map(cat => (
              <Link key={cat} to={`/category/${cat.toLowerCase().replace(/ & /g, "-")}`} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground">
                {cat}
              </Link>
            ))}
            <Link to="/blog" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-primary">All Posts</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default BlogHeader;
