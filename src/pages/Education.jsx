import React from 'react';

const Education = () => {
    return(
        <section className=' bg-base-200 pb-2 pt-10 lg:py-16'>
            <div id='education-container' className='max-w-3xl mx-auto px-6 scroll-mt-24'>

                <h1 className='head-style font-bold text-center mb-6 || text-lg sm:text-xl md:text-2xl lg:text-3xl || text-cyan-800 ' data-aos="fade-down">
                    My <span className='text-error'>Education</span>
                </h1>

                <ul className=' timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
                    <li>
                        <div className='timeline-middle'>
                            🎓
                        </div>

                        <div className="timeline-start mb-10 md:text-end" data-aos="fade-up">
                            <div className="text-md sm:text-base md:text-lg lg:text-lg font-semibold">
                                M.Sc in Software Engineering
                            </div>
                            <div className="text-sm text-base-content/70">
                                 MGM's College of CS & IT, Nanded - 2024 | 70.36%
                            </div>
                        </div>
                        <hr/>
                    </li>

                    <li>
                        <hr />
                        <div className="timeline-middle">
                            🎓
                        </div>

                        <div className="timeline-end mb-10" data-aos="fade-up">
                            <div className="text-md sm:text-md md:text-lg lg:text-lg font-semibold">
                                B.Sc in Computer Science
                            </div>
                            <div className="text-sm text-base-content/70">
                                MGM's College of CS & IT, Nanded - 2021 | 70.61%
                            </div>
                        </div>
                        <hr />
                    </li>

                    <li>
                        <hr />
                        <div className="timeline-middle">
                            📘
                        </div>

                        <div className="timeline-start md:text-end mb-10" data-aos="fade-up">
                            <div className="text-md sm:text-md md:text-lg lg:text-lg font-semibold">
                                Higher Secondary Certificate
                            </div>
                            <div className="text-sm text-base-content/70">
                                N.E.S Science College, Nanded - 2017
                            </div>
                        </div>
                    </li>
                   
                </ul>

            </div>
        </section>
    )
}
export default Education;