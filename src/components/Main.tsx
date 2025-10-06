import Hero from "@/components/main-content/Hero";
import About from "@/components/main-content/About";
import Services from "@/components/main-content/Services";
import WhyChooseUs from "@/components/main-content/WhyChooseOur";
import CustomerReviews from "@/components/main-content/CustomerReviews";
import ContactForm from "@/components/main-content/ContactForm";
import MapIframe from "@/components/main-content/MapIframe";

interface MainProps {
    className?: string;
}

export default function Main({ className }: MainProps) {
    return(
        <div className={className || "flex-1"}>
            <Hero/>
            <About/>
            <Services />
            <WhyChooseUs/>
            <CustomerReviews/>
            <ContactForm/>
            <MapIframe/>
        </div>
    )
}