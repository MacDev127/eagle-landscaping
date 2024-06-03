import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Text from '../Components/Text/Text';
import Title from '../Components/Title/Title';
import './Home.css';
import Gardening from './Gardening';

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="Home">
        <Hero />

        <div className="home__container">
          <Title>About Us</Title>
          <Text>
            Eagle Landscaping, based in London, offers comprehensive gardening
            and landscaping services across the city and surrounding counties.
            With decades of experience, we guarantee professional craftsmanship
            and top-quality results in all our projects, including expert paving
            solutions. <br /> <br /> We provide personalized on-site
            consultations and leverage over 20 years of industry expertise to
            prepare detailed quotations for landscape and paving projects. Our
            services extend throughout the region, and we are prepared to travel
            to locations like Surrey, Kent, Essex, and Buckinghamshire based on
            project requirements.
            <br /> <br /> Contact us to discuss how we can assist you. A garden
            should be a seamless extension of your home, a haven for relaxation
            and enjoyment. Let Eagle Landscaping help you realize your perfect
            garden, incorporating beautiful paving that complements your vision.
          </Text>

          <Title>Services</Title>
          <div className="card__container">
            <div className="card">
              <a href="/service1">
                <img src="/hero3.jpeg" alt="Service 1" />
                <div className="overlay"></div>

                <div className="link-title">Gardening</div>
              </a>
            </div>
            <div className="card">
              <a href="/service2">
                <img src="/hero4.jpeg" alt="Service 2" />
                <div className="overlay"></div>

                <div className="link-title">Paving & Decking</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
