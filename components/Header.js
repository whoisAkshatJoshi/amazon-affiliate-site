import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <Link href="/" style={styles.logoContainer}>
        <img src="/logo.png" alt="Site Logo" style={styles.logo} />
        <span style={styles.siteName}>Krazy Amazon Deals</span>
      </Link>
    </header>
  );
}

const styles = {
  header: {
    padding: "12px 20px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    alignItems: "center"
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    color: "#000"
  },
  logo: {
  height: "150px",
  width: "auto"
  },
  siteName: {
    fontSize: "20px",
    fontWeight: "bold"
  }
};