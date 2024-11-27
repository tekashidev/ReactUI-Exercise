import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ActivitySection from './components/ActivitySection';
import LeadingMedicine from './components/LeadingMedicine';
import DoctorsSection from './components/DoctorsSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import JoinUs from './components/JoinUs';  
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <ActivitySection />
      <LeadingMedicine />
      <DoctorsSection />
      <PricingSection />
      <TestimonialsSection />
      <JoinUs /> 
      <Footer />
    </div>
  );
}

export default App;
