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

        <Contact />
        <Footer />
      </section>
    </>
  );
};

export default ContactPage;
