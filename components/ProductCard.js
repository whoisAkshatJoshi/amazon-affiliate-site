import Link from "next/link";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <Link href={`/product/${product.slug}`}>
        <button className={styles.button}>View Product</button>
      </Link>
    </div>
  );
}
