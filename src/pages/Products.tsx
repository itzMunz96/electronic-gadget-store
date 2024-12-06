import { Layout } from "@/components/layout/Layout";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const selectedCategory = searchParams.get("category");

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart`,
    });
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase())
    : products;

  return (
    <Layout>
      <div className="container py-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          <aside className="w-full md:w-64 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory?.toLowerCase() === category.toLowerCase() ? "default" : "outline"}
                  className="w-full justify-start"
                  asChild
                >
                  <a href={`/products?category=${category.toLowerCase()}`}>
                    {category}
                  </a>
                </Button>
              ))}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-8">
              {selectedCategory ? `${selectedCategory} Products` : "All Products"}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="flex flex-col">
                  <CardHeader>
                    <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="line-clamp-2">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{product.description}</p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xl font-bold">${product.price}</span>
                      <Button onClick={() => handleAddToCart(product.name)}>Add to Cart</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const categories = [
  "All Products",
  "Laptops",
  "Smartphones",
  "Tablets",
  "Gaming Consoles",
  "Accessories",
  "Smart Home",
  "Audio",
];

const products = [
  {
    id: 1,
    name: "MacBook Pro 16-inch",
    description: "Apple M2 Pro chip, 16GB RAM, 512GB SSD, Space Gray",
    price: 2499,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    description: "A17 Pro chip, 256GB, Titanium finish, Pro camera system",
    price: 999,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
  },
  {
    id: 3,
    name: "iPad Air",
    description: "10.9-inch display, M1 chip, 256GB, Wi-Fi + Cellular",
    price: 749,
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
  },
  {
    id: 4,
    name: "PlayStation 5",
    description: "Digital Edition, DualSense controller, 825GB SSD",
    price: 499,
    category: "Gaming Consoles",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    id: 5,
    name: "AirPods Pro",
    description: "2nd generation, Active Noise Cancellation, Adaptive Audio",
    price: 249,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
  },
  {
    id: 6,
    name: "HomePod mini",
    description: "Smart speaker with Siri, Room-filling sound",
    price: 99,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

export default Products;