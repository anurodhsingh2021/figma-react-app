import './ImageCard.scss';

interface ImageCardProps {
  image: string;
  title: string;
  subtitle?: string;
}

const ImageCard = ({ image, title, subtitle }: ImageCardProps) => {
  return (
    <article
      className="image-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="image-card_content">
        {subtitle && <span>{subtitle}</span>}
        <h3>{title}</h3>
        <small>Read more</small>
      </div>
    </article>
  );
};

export default ImageCard;
