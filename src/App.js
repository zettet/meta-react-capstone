import './App.css';
import Header from './components/Header'
import About from './components/About'
import Specials from './components/Specials'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <meta name="description" content="Little Lemon Restaurant Website"/>
      <meta name="og:title" content="Little Lemon Restaurant"/>
      <meta name="og:description" content="Classic Italian Fare With A Modern Twist"/>
      <meta name="og:image" content="assets/Logo.svg"/>
      <Header />
      <main>
        <About />
        <Specials />
      </main>
      <Footer />
    </>
  );
}

export default App;
