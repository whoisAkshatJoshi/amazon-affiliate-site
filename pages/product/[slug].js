import products from "../../data/products";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";

export default function ProductPage({ product }) {
  if (!product) return <p>Product not found</p>;

  return (
    <>
      <Head>
        <title>{product.name} | Best Amazon Deals</title>
        <meta name="description" content={product.description} />
      </Head>

      <Header />
      <main style={{ padding: "20px" }}>
        <img src={product.image} width="300" />
        <h1>{product.name}</h1>
        <p>{product.description}</p>

        <a href={product.link} target="_blank">
          <button style={{ background: "#ff9900", padding: "12px", color: "#fff" }}>
            Buy on Amazon
          </button>
        </a>

        <p style={{ marginTop: "20px", fontSize: "12px" }}>
          As an Amazon Associate, I earn from qualifying purchases.
        </p>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: products.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = products.find(p => p.slug === params.slug);
  return { props: { product } };
}
