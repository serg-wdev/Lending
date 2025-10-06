import './globals.css';

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <Main className='flex-1'/>
        <Footer />
    </div>
  );
}
