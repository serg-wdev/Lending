import './globals.css';

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <Main className='flex-1'/>
        <Footer />
        <ScrollToTopButton />
    </div>
  );
}
