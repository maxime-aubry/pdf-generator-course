import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Accueil</h1>

      <ul style={{ marginTop: 16 }}>
        <li>
          <Link href="/invoice">Invoice</Link>
        </li>
      </ul>
    </main>
  );
}
