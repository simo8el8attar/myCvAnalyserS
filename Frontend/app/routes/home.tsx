import Navbar from "~/components/Navbar";
import Login from "~/components/Login"
import type { Route } from "./+types/home";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "CvAnalyser" },
    { name: "description", content: "Get Your Dream job , With Ai Assistance!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="grid gap-3 md:grid-cols-2">
        <Login/>
      {/* <h1 className="mb-4 mt-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get back to growth with <span className="text-ctabold">the world's #1</span> CRM.</h1>         */}
      </section>
      
    </main>
  );
}
