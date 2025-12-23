import './HeroBanner.scss';

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle: string;
}

const HeroBanner = ({ image, title, subtitle }: HeroBannerProps) => {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-banner__overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroBanner;
