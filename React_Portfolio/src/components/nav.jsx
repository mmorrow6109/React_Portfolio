

const Nav = () => {
    return (
        <>
            <div className="flex item-center justify-between p-10 lg:flex-row text-black-600">
                <div>
                    <a href="#" className="text-white font-mono text-3x1 tracking-wider flex items-center">PORTFOLIO</a>
                </div>
                <div>
                    <a href="#">About</a>
                    <a href="#">Skills</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </>
    )
};

export default Nav;