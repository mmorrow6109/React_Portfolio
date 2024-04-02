import Nav from './nav.jsx';
import Hero from './hero.jsx';
import Projects from './projects.jsx';
import Footer from './footer.jsx';

const main = () => {
    return (
        <div className="bg-indigo-600">
            <Nav/>
            <div className="border-t border-white"></div> {/* Thin white line */}
            <Hero/>
            <div className="border-t border-white"></div>
            <Projects/>
            <Footer/>
        </div>
    )
};

export default main;