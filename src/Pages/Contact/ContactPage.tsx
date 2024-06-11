import Navbar from '../../Components/Navbar/Navbar';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';
import Contact from '../../Components/Contact/Contact';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="contact-page">
        <Title className="title">Contact Us</Title>

        <div className="contact__wrapper">
          <Contact />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
