import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work,} from './container';
import { Navbar } from './components';


const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Work />
            <Testimonial />
            <Footer />
        </div>       
    );
}

export default App;

