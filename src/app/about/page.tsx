import Image from "next/image";
import "./about.css"; 

export default function About() {
    return (
        <main className="about-main">
            {/* Hero Section */}
            <section className="about-section">
                {/* Left side */}
                <div className="about-text">
                    <h1 className="about-title">About Us</h1>
                    <p className="about-description">
                    "Our primary goal has always been simple: to connect our clients with the regions where we source our
                     exceptional coffee. We roast each bean with care, making outstanding coffee more accessible through 
                     our cafes and online store. The coffee we craft is the coffee we love to drink, and we hope you enjoy 
                     it just as much."
                    </p>
                    <button className="about-button">Read more</button>
                </div>

                {/* Right Side */}
                <div className="about-image-container">
                    <Image
                        width={500}
                        height={500}
                        src="/images/hero.png"
                        alt="coffee"
                        className="about-image"
                    />
                </div>
            </section>
        </main>
    );
}
