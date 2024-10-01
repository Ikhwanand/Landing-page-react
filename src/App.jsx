import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Review from "./components/Review"
import Services from "./components/Services"


function App() {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <About/>
      <Review/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
