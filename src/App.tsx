import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Header from './components/Header';
import ImageSection from './components/ImageSection';
import AboutUs from './components/AboutUs';
import RegisterForm from './components/RegisterForm';
import FAQs from './components/FAQs';
import ContactForm from './components/ContactForm';
import ChildSafetyPolicy from './components/PolicyContainer'; // importa tu componente de política
import { useRef } from 'react';
import LayoutDelete from './Layout/LayoutDelete';
import DeleteForm from './components/DeleteForm';

const App = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const registerRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal con el layout y las secciones */}
        <Route
          path="/"
          element={
            <Layout
              sectionRefs={{
                about: aboutRef,
                register: registerRef,
                faq: faqRef,
                contact: contactRef,
              }}
            >
              <section>
                <Header onRegisterClick={() => registerRef.current?.scrollIntoView({ behavior: 'smooth' })} />
              </section>
              <section>
                <ImageSection />
              </section>
              <section ref={aboutRef}>
                <AboutUs />
              </section>
              <section ref={registerRef}>
                <RegisterForm />
              </section>
              <section ref={faqRef}>
                <FAQs />
              </section>
              <section ref={contactRef}>
                <ContactForm />
              </section>
            </Layout>
          }
        />
        {/* Ruta independiente para la política */}
        <Route path="/politica-seguridad-infantil" element={<ChildSafetyPolicy />} />
        <Route path="/delete-account" element={
          <LayoutDelete>
              <section>
                <DeleteForm />
              </section>
            </LayoutDelete>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
