import './App.css';
import Header from './components/Header'
import About from './components/About'
import Specials from './components/Specials'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Karla:400,700,800' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Markazi Text:400,700,800' rel='stylesheet'/>
        <meta name="description" content="Little Lemon Restaurant Website"/>
        <meta name="og:title" content="Little Lemon Restaurant"/>
        <meta name="og:description" content="Classic Italian Fare With A Modern Twist"/>
        <meta name="og:image" content="https://upload.wikimedia.org/wikipedia/commons/e/e4/Lemon.jpg"/>
        <Header />
        <About />
        <Footer />
    </>
  );
}

export default App;
