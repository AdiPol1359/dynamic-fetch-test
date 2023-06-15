import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <h1>Index page</h1>
      <Link href="/beers">Beers</Link>
    </>
  );
}
