import Hero from "@/components/hero";
import Parallax from "@/components/parallax"
import Review from "@/components/reviews"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between dark bg-zinc-900 overflow-y-hidden overflow-x-hidden ">
      <Hero />
      <Parallax />
      <Review />
      <div className='py-20'/>
      <Contact />
      <div className='py-40'/>
    </main>
  );
}
