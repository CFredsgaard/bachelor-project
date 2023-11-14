import Link from "next/link";


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-76'>
      <h1 className='text-sky-400 py-10'>Start Page</h1>
      <Link className='btn btn-outline' href="overview" > Press me </Link>
    </main>
  )
}