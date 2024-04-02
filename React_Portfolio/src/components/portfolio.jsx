import Project1Img from '../assets/question.jpg'
// import Project2Img from '../assets/2.jpg'
// import Project3Img from '../assets/3.jpg'
// import Project4Img from '../assets/4.jpg'

export default function Portfolio() {
    return (
        <>
            <div id='portfolio-section' className='bg-indigo-800 m-20 max-w-full rounded-xl'>
                <div className='grid justify-items-center m-10'>
                    <h1 className='text-3xl text-white mt-10 font-mono'>Projects</h1>
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Project 1
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    </p>
                                </div>
                                <div className='md:shrink-0 pt-12 image-container'> {/* Image container */}
                                    <img src={Project1Img} alt='Question Mark' className='rounded-full mr-8' width={150} height={150} /> {/* Image */}
                                </div>
                            </div>
                        </div>

                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='md:shrink-0 pt-12 image-container'> {/* Image container */}
                                    <img src={Project1Img} alt='Question Mark' className='rounded-full ml-8' width={150} height={150} /> {/* Image */}
                                </div>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Project 2
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Project 3
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    </p>
                                </div>
                                <div className='md:shrink-0 pt-12 image-container'> {/* Image container */}
                                    <img src={Project1Img} alt='Question Mark' className='rounded-full mr-8' width={150} height={150} /> {/* Image */}
                                </div>
                            </div>
                        </div>

                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='md:shrink-0 pt-12 image-container'> {/* Image container */}
                                    <img src={Project1Img} alt='Question Mark' className='rounded-full ml-8' width={150} height={150} /> {/* Image */}
                                </div>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Project 4
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Project 5
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    </p>
                                </div>
                                <div className='md:shrink-0 pt-12 image-container'> {/* Image container */}
                                    <img src={Project1Img} alt='Question Mark' className='rounded-full mr-8' width={150} height={150} /> {/* Image */}
                                </div>
                            </div>
                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='md:shrink-0 pt-12 image-container'> {/* Image container */}
                                    <img src={Project1Img} alt='Question Mark' className='rounded-full ml-8' width={150} height={150} /> {/* Image */}
                                </div>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                        Project 6
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className='mt-2 text-slate-500'>
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
