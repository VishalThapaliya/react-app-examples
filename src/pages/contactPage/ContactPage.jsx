import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import Contact from '../../components/layout/contact/Contact';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="contact-page">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default ContactPage