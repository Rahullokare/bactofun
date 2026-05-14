import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Materials from "@/components/Materials";
import Features from "@/components/Features";
import SizeCharts from "@/components/SizeCharts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EnquiryDialog from "@/components/EnquiryDialog";

const Index = () => {
  const [open, setOpen] = useState(false);
  const onEnquire = () => setOpen(true);
  return (
    <div className="min-h-screen bg-background">
      <Navbar onEnquire={onEnquire} />
      <main>
        <Hero onEnquire={onEnquire} />
        <About />
        <Materials />
        <Features />
        <SizeCharts onEnquire={onEnquire} />
        <Contact onEnquire={onEnquire} />
      </main>
      <Footer />
      <EnquiryDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Index;
