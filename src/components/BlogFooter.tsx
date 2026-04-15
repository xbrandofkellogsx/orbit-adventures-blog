import { Link } from "react-router-dom";
import { categories } from "@/data/blogPosts";

const BlogFooter = () => (
  <footer className="border-t border-border bg-card mt-16">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl font-bold mb-3">Orbital<span className="text-primary">Blog</span></h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Stories from around the world. Travel deeper, live better, explore with intention.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold mb-3">Categories</h4>
          <ul className="space-y-2">
            {categories.map(cat => (
              <li key={cat}>
                <Link to={`/category/${cat.toLowerCase().replace(/ & /g, "-")}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{cat}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold mb-3">Stay Connected</h4>
          <p className="text-muted-foreground text-sm mb-4">Follow our journey across continents and cultures.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Pinterest</span>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
        © 2026 OrbitalBlog. All rights reserved.
      </div>
    </div>
  </footer>
);

export default BlogFooter;
