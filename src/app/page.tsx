import Dashboard from "@/components/dashboard/dashboard"
import About from "@/components/about/about"
import { ToastContainer } from "react-toastify";
import Projects from "@/components/projects/projects";
import Experinces from '@/components/experience/experience'
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <main>
      <ToastContainer position="top-left" />
      <Dashboard />
      <About />
      <Experinces />
      <Projects />
      <Footer />
    </main>
  );
}
