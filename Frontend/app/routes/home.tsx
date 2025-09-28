import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "constants/index";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "CvAnalyser" },
    { name: "description", content: "Get Your Dream job , With Ai Assistance!" },
  ];
}

export default function Home() {
  return (
    <main className='bg-[url("/images/bg-main.svg")] bg-cover'>
      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1>Track your Applications and Resume Ratings</h1>
          <h2>Review your submissions and check Ai-powered feedback</h2>
        </div>
      </section>

      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </main>
  );
}
