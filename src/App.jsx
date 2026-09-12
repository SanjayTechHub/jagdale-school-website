import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Academics from './components/Academics'
import Facilities from './components/Facilities'
import Activities from './components/Activities'
import Gallery from './components/Gallery'
import Admissions from './components/Admissions'
import EnquiryForm from './components/EnquiryForm'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main" className="overflow-x-hidden pb-16 md:pb-0">
        <Hero />
        <About />
        <WhyChooseUs />
        <Academics />
        <Facilities />
        <Activities />
        <Gallery />
        <Admissions />
        <EnquiryForm />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
