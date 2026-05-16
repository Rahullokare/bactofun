import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Materials from "@/components/Materials";
import Features from "@/components/Features";
import SizeCharts from "@/components/SizeCharts";
import VisionImpact from "@/components/VisionImpact";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EnquiryDialog from "@/components/EnquiryDialog";

const Index = () => {
  const [open, setOpen] = useState(false);
  const onEnquire = () => setOpen(true);
  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-background">
      <Navbar onEnquire={onEnquire} />
      <main className="min-w-0 flex-1 w-full">
        <Hero onEnquire={onEnquire} />
        <About />
        <Materials />
        <Features />
        <VisionImpact />
        <SizeCharts onEnquire={onEnquire} />
        <Contact onEnquire={onEnquire} />
      </main>
      <Footer />
      <EnquiryDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Index;
