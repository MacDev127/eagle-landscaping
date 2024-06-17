import Navbar from '../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';

import Hero from '../Components/Hero/Hero';
import Text from '../Components/Text/Text';
import Title from '../Components/Title/Title';
import Footer from '../Components/Footer/Footer';
import './Home.css';
import Contact from '../Components/Contact/Contact';
const Home = () => {
  return (
    <>
      <Navbar />

      <section className="Home">
        <Hero
          heroTitle="EAGLE LANDSCAPING"
          heroSubtitle="Paving & Gardening Specialists"
          image="../../public/hero.jpeg"
          showButton={true}
        />

        <div className="home__container">
          <Title className="title">About Us</Title>
          <Text>
            At Eagle Landscaping, we transform gardens into beautiful, relaxing
            havens. Based in London, we offer top-notch gardening and
            landscaping services, including expert paving, across the city and
            surrounding areas like Surrey, Kent, Essex, and Buckinghamshire.
            With over 20 years of experience, we pride ourselves on delivering
            professional craftsmanship and exceptional results. Our personalized
            on-site consultations ensure that your vision is realized with
            precision. Contact us today to discuss your project and discover how
            Eagle Landscaping can bring your outdoor space to life.
          </Text>

          <Title className="title">Services</Title>
          <div className="card__container">
            <div className="card">
              <Link to="/gardening">
                <img src="/hero3.jpeg" alt="Gardening" />
                <div className="overlay"></div>

                <div className="link-title">Gardening</div>
              </Link>
            </div>
            <div className="card">
              <Link to="/paving">
                <img src="/hero4.jpeg" alt="Paving" />
                <div className="overlay"></div>

                <div className="link-title">Paving & Decking</div>
              </Link>
            </div>
          </div>
          <Title className="contact__title">Contact Us</Title>

          <Contact />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
