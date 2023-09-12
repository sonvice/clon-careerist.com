import { ParallaxProvider } from "react-scroll-parallax";
import Nav from "./components/Nav";
import { Hero, Instructures, NewJob, TechCareer } from "./sections";
import Brands from "./sections/Brands";
import Footer from "./sections/Footer";
import FormSection from "./sections/FormSection";
import Journey from "./sections/Journey";
import Thank from "./sections/Thank";

function App() {



  return (
    <main className="dark:bg-gray-900">
      <Nav></Nav>
      <section id="home" className="pt-4xl wrapper">
        <Hero></Hero>
      </section>
      <section className="dark:bg-gray-900">
        <NewJob></NewJob>
      </section>
      <section className="wrapper">
        <TechCareer></TechCareer>
      </section>
      <section className="wrapper">
        <Instructures></Instructures>
      </section>
      <section className="bg-secondary dark:bg-gray-800">
        <Journey></Journey>
      </section>
      <section>
        <ParallaxProvider>
          <Brands></Brands>
        </ParallaxProvider>
      </section>
      <section>
        <Thank></Thank>
      </section>
      <section className="bg-gray-light dark:bg-gray-900">
        <FormSection></FormSection>
      </section>
      <footer className="bg-secondary text-white">
        <Footer></Footer>
      </footer>
    </main>
  );
}

export default App;
