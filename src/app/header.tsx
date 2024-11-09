import Image from 'next/image';
import ".//header.css";

export default function Header() {
  return (
    <section>
      <div className="header-container">
        <div className="header-image-container">
          <Image
            src="/images/header.jpg"
            alt="coffee"
            layout="fill"
            objectFit="cover"
            className="header-image"
          />
        </div>
      </div>
    </section>
  );
}
