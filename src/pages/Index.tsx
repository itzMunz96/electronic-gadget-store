import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category.toLowerCase()}`);
    toast({
      title: "Category Selected",
      description: `Browsing ${category} products`,
    });
  };

  return (
    <Layout>
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Hero"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <span className="px-3 py-1 text-sm border rounded-full">New Arrivals</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Experience Next-Gen Technology
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the latest in consumer electronics, from smartphones to smart home devices.
            </p>
            <Button size="lg" asChild className="hover-lift">
              <Link to="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Featured Categories</h2>
          <p className="text-muted-foreground">Browse our most popular collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className="group relative overflow-hidden rounded-lg aspect-square hover-lift"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>
    </Layout>
  );
};

const categories = [
  {
    name: "Laptops",
    slug: "laptops",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    name: "Smartphones",
    slug: "smartphones",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
  },
];

export default Index;