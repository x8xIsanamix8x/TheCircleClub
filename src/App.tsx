import Layout from './Layout/Layout';
import Header from './components/Header';
import ImageSection from './components/ImageSection';
import AboutUs from './components/AboutUs';
import RegisterForm from './components/RegisterForm';
import FAQs from './components/FAQs';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Layout>
      <Header />
      <ImageSection />
      <AboutUs />
      <RegisterForm />
      <FAQs />
      <ContactForm />
    </Layout>
  );
};

export default App;
