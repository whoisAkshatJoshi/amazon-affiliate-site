import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <h1>Best Amazon Deals</h1>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {products.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
