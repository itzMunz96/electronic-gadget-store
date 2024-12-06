import { Navbar } from "./Navbar";
import { Toaster } from "@/components/ui/toaster";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 min-h-[calc(100vh-4rem)]">{children}</main>
      <Toaster />
    </div>
  );
};