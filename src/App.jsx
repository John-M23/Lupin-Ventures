// import React from "react";
import Header from  "./Components/header.jsx"; 
import Footer from "./Components/footer.jsx";
import Hero from "./Components/hero.jsx";
import Stats from "./Components/stats.jsx";
import About from "./Components/About.jsx";
import Offers from "./Components/Offer.jsx";
import Choice from "./Components/Choice.jsx";
import Products from "./components/products.jsx";
import Testimonial from "./Components/Testimonials.jsx";
import "./App.css";


function App(){
return(

  <div className="body">
    <Header />
    <Hero /> 
     <Stats />
      
    <About /> 
    <Offers />
      <Choice />
     <Products />
     <Testimonial />
    <Footer />  
  </div>
);
}
 export default App;