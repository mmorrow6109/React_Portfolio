import React from 'react';

export default function Resume() {
    // Link to the downloadable resume
    const resumeLink = "https://gist.github.com/mmorrow6109/7627107fbf7c4bc87fc2e81f9256028d";

    // List of developer proficiencies
    const proficiencies = [
        "JavaScript",
        "React",
        "HTML",
        "CSS",
        "Node.js",
        "Express",
        "MongoDB",
    ];

    return (
        <section id="resume-section" className="bg-indigo-500 py-10 text-black">
            <div className="container mx-auto flex justify-center">
                <div className="w-1/3 bg-white p-8 rounded-lg text-center">
                    <h2 className="text-3xl font-semibold mb-8">Resume</h2>
                    <div>
                        <p className="mb-4">Developer Proficiencies:</p>
                        {/* List of developer proficiencies */}
                        <ul>
                            {proficiencies.map((proficiency, index) => (
                                <li key={index} className="mb-2">{proficiency}</li>
                            ))}
                            {/* Download resume link */}
                            <div className="mb-8">
                                <a href={resumeLink} className="text-indigo-600 hover:text-indigo-800 underline block">Download my resume</a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
