import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { ArticleDetails } from './components/ArticleDetails'
import { HeroSection } from './components/HeroSection'
import { FirstQuoteSection } from './components/FirstQuoteSection'

function App() {

  return (
    <>
    <Header />
    <ArticleDetails />
    <HeroSection />
    <FirstQuoteSection />
    </>
  )
}

export default App
