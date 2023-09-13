import '../App.css';
import Header from './common/Header'
import Footer from './common/Footer'
import About from './home/About'
import Specials from './home/Specials'
import React from "react"


export default class Home extends React.Component {
  render() {
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
        <Specials />
        <Footer />
    </>
    );
  }
}
