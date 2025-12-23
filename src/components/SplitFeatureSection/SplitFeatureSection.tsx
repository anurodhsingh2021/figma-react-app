import './SplitFeatureSection.scss';

interface FeatureItem {
  label: string;
  description: string;
  linkText?: string;
}

interface Props {
  image: string;
  title: string;
  subtitle?: string;
  items: FeatureItem[];
  textPosition?: 'left' | 'right';
}

const SplitFeatureSection = ({
  image,
  title,
  subtitle,
  items,
  textPosition = 'left',
}: Props) => {
  return (
    <section className={`split-feature ${textPosition}`}>
      {/* TEXT PANEL */}
      <div className="split-feature__text">
        {items.map((item) => (
          <div key={item.label} className="split-feature__item">
            <h4>{item.label}</h4>
            <p>{item.description}</p>
            {item.linkText && <span>{item.linkText}</span>}
          </div>
        ))}
      </div>

      {/* IMAGE PANEL */}
      <div
        className="split-feature__image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="split-feature__overlay">
          {subtitle && <small>{subtitle}</small>}
          <h2>{title}</h2>
          <span>Read more</span>
        </div>
      </div>
    </section>
  );
};

export default SplitFeatureSection;
