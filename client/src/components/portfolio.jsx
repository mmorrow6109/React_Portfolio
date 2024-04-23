import PendingImg from '../assets/question.jpg'
import Project1Img from '../assets/BooknDine.png'
import Project2Img from '../assets/CCrafters.png'
// import Project3Img from '../assets/3.jpg'
// import Project4Img from '../assets/4.jpg'
// import Project5Img from '../assets/5.jpg'
// import Project6Img from '../assets/6.jpg'

export default function Portfolio() {
    return (
        <>
            <div id='portfolio-section' className='bg-indigo-800 m-20 max-w-full rounded-xl'>
                <div className='grid justify-items-center m-10'>
                    <h1 className='text-3xl text-white mt-10 font-mono'>Projects</h1>
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <a href='https://uofo-group-project2-c8b71b96b277.herokuapp.com/' className='block'>
                            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                                <div className='md:flex'>
                                    <div className='p-8'>
                                        <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                            Recipe Management App
                                        </div>
                                        <h1 className='text-xl font-bold'>Culinary Crafters</h1>
                                        <p className='mt-2 text-gray-500'>
                                            Collaborative project to create a recipe management app. Users can create, edit, and delete recipes. They can also search for recipes by name or ingredient.
                                        </p>
                                    </div>
                                    <div className='md:shrink-0 pt-12 image-container'> {/* Image container */}
                                        <img src={Project1Img} alt='Project 1' className='rounded-full mr-8' width={150} height={150} /> {/* Image */}
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href='https://mmorrow6109.github.io/UofO-GroupProject1/' className='block'>
                            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                                <div className='md:flex'>
                                    <div className='md:shrink-0 pt-12 image-container'> {/* Image container */}
                                        <img src={Project2Img} alt='Project 2' className='rounded-full ml-8' width={150} height={150} /> {/* Image */}
                                    </div>
                                    <div className='p-8'>
                                        <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                            Restaurant Reservation App
                                        </div>
                                        <h1 className='text-xl font-bold'>Book and Dine PDX</h1>
                                        <p className='mt-2 text-gray-500'>
                                            Collaborative effort to create a restaurant reservation app. Users can search for restaurants, view menus, and make reservations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <hr/>
                    
                    {/* Additional project sections */}
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <a href='https://project3link.com' className='block'>
                            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                                <div className='md:flex'>
                                    <div className='p-8'>
                                        <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                            Project 3
                                        </div>
                                        <h1 className='text-xl font-bold'>Project 3 Name</h1>
                                        <p className='mt-2 text-gray-500'>
                                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                        </p>
                                    </div>
                                    <div className='md:shrink-0 pt-12 image-container'> {/* Image container */}
                                        <img src={PendingImg} alt='Project 3' className='rounded-full mr-8' width={150} height={150} /> {/* Image */}
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Repeat this block for additional projects */}
                        <a href='https://project4link.com' className='block'>
                            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                                <div className='md:flex'>
                                    <div className='md:shrink-0 pt-12 image-container'> {/* Image container */}
                                        <img src={PendingImg} alt='Project 4' className='rounded-full ml-8' width={150} height={150} /> {/* Image */}
                                    </div>
                                    <div className='p-8'>
                                        <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                            Project 4
                                        </div>
                                        <h1 className='text-xl font-bold'>Project 4 Name</h1>
                                        <p className='mt-2 text-gray-500'>
                                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <hr/>
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <a href='https://project5link.com' className='block'>
                            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                                <div className='md:flex'>
                                    <div className='p-8'>
                                        <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                            Project 5
                                        </div>
                                        <h1 className='text-xl font-bold'>Project 5 Name</h1>
                                        <p className='mt-2 text-gray-500'>
                                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                        </p>
                                    </div>
                                    <div className='md:shrink-0 pt-12 image-container'> {/* Image container */}
                                        <img src={PendingImg} alt='Project 5' className='rounded-full mr-8' width={150} height={150} /> {/* Image */}
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href='https://project6link.com' className='block'>
                            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                                <div className='md:flex'>
                                    <div className='md:shrink-0 pt-12 image-container'> {/* Image container */}
                                        <img src={PendingImg} alt='Project 6' className='rounded-full ml-8' width={150} height={150} /> {/* Image */}
                                    </div>
                                    <div className='p-8'>
                                        <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                            Project 6
                                        </div>
                                        <h1 className='text-xl font-bold'>Project 6 Name</h1>
                                        <p className='mt-2 text-gray-500'>
                                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}