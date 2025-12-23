import Navbar from '../../components/Navbar/Navbar';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CardGrid from '../../components/CardGrid/CardGrid';
import ImageCard from '../../components/ImageCard/ImageCard';
import SplitFeatureSection from '../../components/SplitFeatureSection/SplitFeatureSection';
import ClientsSection from '../../components/ClientsSection/ClientsSection';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import './Home.scss';

import heroImage from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/image5.png';
import image6 from '../../assets/images/image6.png';
import image7 from '../../assets/images/image7.png';
import image8 from '../../assets/images/image8.png';
import image9 from '../../assets/images/image9.png';
import logo1 from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo4.png';
import logo5 from '../../assets/images/logo5.png';
import logo6 from '../../assets/images/logo6.png';
import logo7 from '../../assets/images/logo7.png';
import logo8 from '../../assets/images/logo8.png';
import logo9 from '../../assets/images/logo9.png';
import logo10 from '../../assets/images/logo10.png';
import logo11 from '../../assets/images/logo11.png';
import logo12 from '../../assets/images/logo12.png';

const Home = () => {
  return (
    <div className='main'>
      <Navbar />
      <HeroBanner
        image={heroImage}
        title="A selection of projects that pioneer tech"
        subtitle="Helping brands stay ahead"
      />

      <SectionHeader
        leftText="Show me all work"
        rightText="in all industries"
      />

      <CardGrid>
        <ImageCard
          image={image2}
          title="A Summer island in the Netherlands"
          subtitle="BOL.COM"
        />
        <ImageCard
          image={image3}
          title="Not some average banking website"
          subtitle="KLEINPEN"
        />
        <ImageCard
          image={image4}
          title="Beautiful design meets innovative technology"
          subtitle="PHILIPS"
        />
        <ImageCard
          image={image5}
          title="A 100 years of Mondriaan & De Stijl"
          subtitle="GEMEENTEMUSEUM"
        />
      </CardGrid>
      <SplitFeatureSection
        image={image6}
        subtitle="FLORINSIS"
        title="Rethinking the entire online ecosystem"
        textPosition="left"
        items={[
          {
            label: 'AMAZON',
            description:
              "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
            linkText: 'Read more',
          },
          {
            label: 'O’NEILL',
            description:
              "Integrating existing content into O'Neill’s new e-commerce platform",
            linkText: 'Read more',
          },
          {
            label: 'MICROSOFT',
            description:
              "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
            linkText: 'Read more',
          },
        ]}
      />
      <CardGrid>
        <ImageCard
          image={image7}
          title="A Summer island in the Netherlands"
          subtitle="BOL.COM"
        />
        <ImageCard
          image={image8}
          title="Not some average banking website"
          subtitle="KLEINPEN"
        />
      </CardGrid>
      <SplitFeatureSection
        image={image9}
        subtitle="FLORINSIS"
        title="Rethinking the entire online ecosystem"
        textPosition="right"
        items={[
          {
            label: 'MICROSOFT',
            description:
              "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
            linkText: 'Read more',
          },
          {
            label: 'O’NEILL',
            description:
              "Integrating existing content into O'Neill’s new e-commerce platform",
            linkText: 'Read more',
          },
          {
            label: 'MICROSOFT',
            description:
              "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
            linkText: 'Read more',
          },
        ]}
      />
      <ClientsSection
        clients={[
          { name: 'logo1', logo: logo1 },
          { name: 'logo2', logo: logo2 },
          { name: 'logo3', logo: logo3 },
          { name: 'logo4', logo: logo4 },
          { name: 'logo5', logo: logo5 },
          { name: 'logo6', logo: logo6 },
          { name: 'logo7', logo: logo7 },
          { name: 'logo8', logo: logo8 },
          { name: 'logo9', logo: logo9 },
          { name: 'logo10', logo: logo10 },
          { name: 'logo11', logo: logo11 },
          { name: 'logo12', logo: logo12 },
        ]} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
