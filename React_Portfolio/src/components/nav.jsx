

const Nav = () => {
    return (
        <>
            <div className="flex item-center justify-between p-10 lg:flex-row text-black-600">
                <div>
                    <a href="#" className="text-white font-mono text-3x1 tracking-wider flex items-center">PORTFOLIO</a>
                </div>
                <div className="space-x-4">
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">About</a>
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Contact</a>
                </div>
            </div>
        </>
    )
};

export default Nav;