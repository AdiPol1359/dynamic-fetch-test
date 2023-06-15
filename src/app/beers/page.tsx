import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BeersPage() {
  const response = await fetch("https://api.punkapi.com/v2/beers", {
    cache: "no-store",
  });
  const result = (await response.json()) as { id: number; name: string }[];

  console.log("FETCHING...");

  return (
    <>
      <h1>Beers list</h1>
      <ul>
        {result.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <Link href="/">Back to home</Link>
    </>
  );
}
