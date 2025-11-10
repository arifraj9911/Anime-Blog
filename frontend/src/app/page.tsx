import BlogPage from "@/components/pages/home/blog";
import HomePage from "@/components/pages/home/home";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HomePage />
      <BlogPage />
      <Footer />
    </div>
  );
}
