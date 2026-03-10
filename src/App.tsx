import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Demo from './components/Demo'
import Vega from './components/Vega'
import Comparison from './components/Comparison'
import Stats from './components/Stats'
import Audience from './components/Audience'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Starfield from './components/Starfield'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Starfield />
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <Vega />
      <Comparison />
      <Stats />
      <Audience />
      <Team />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
