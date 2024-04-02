import Nav from './nav.jsx';
import Hero from './hero.jsx';
import Portfolio from './portfolio.jsx';
import Footer from './footer.jsx';
import Contact from './contact.jsx';
import Resume from './resume.jsx';

const main = () => {
    return (
        <div className="bg-indigo-600">
            <Nav/>
            <div className="border-t border-white"></div> {/* Thin white line */}
            <Hero/>
            <div className="border-t border-white"></div>
            <Portfolio/>
            <div className="border-t border-white"></div>
            <Resume/>
            <Contact/>
            <Footer/>
        </div>
    )
};

export default main;