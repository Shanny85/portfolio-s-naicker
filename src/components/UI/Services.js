import React from 'react';
import frontendImg from '../../assets/images/frontend.svg'
import backendImg from '../../assets/images/backend.svg'
import uiImage from '../../assets/images/design.svg'
import appImage from '../../assets/images/app.svg'

const Services = () => {
    return (
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-newHeadingText font[800] text-[2.4rem] mb-5 drop-shadow">
                        Services That I Offer...
                    </h2>
                    <p className="lg:max-w-[600px] lg:mx-auto text-newSmallText font[500] text-[18px] leading-7">
                        As an aspiring software developer,
                        I offer web and mobile application development,
                        integration with backend systems.
                    </p>
                </div>

                <div className="flex flex-col justify-center sm:py-12" >
                    <div className="w-full py-3 sm:max-w-xl sm:mx-auto">
                        <div className="relative text-gray-700 antialiased text-sm font-semibold" >
                            {/*vertical line*/}
                            <div className="
                            hidden absolute w-1 sm:block bg-newNeonAccent h-full left-1/2 transform-translate-x-1/2">
                            </div>
                            {/*Left card web dev */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-start w-full mx:auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos="fade-right" data-aos-duration="1200"
                                                 className="bg-newSmallText p-4 rounded
                                                 shadow group hover:bg-newDarkAccent
                                                 cursor-pointer ease-in duration-150">
                                                <h3 className="text-newHeadingText font-[700]
                                                    mb-3 group-hover:text-white
                                                    group-hover:font[600] text-xl drop-shadow">
                                                    Frontend Development
                                                </h3>
                                                <p className="text-[15px] text-smallTextColor group-hover:text-white
                                                    group-hover:font[500] leading-7 drop-shadow">
                                                    As a frontend developer,
                                                    I offer services including web-based and mobile
                                                    application development, UI/UX design implementation,
                                                    frontend framework proficiency, including testing and debugging.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-newDarkAccent
                                    border-mainBg border-4 w-10 h-10
                                    absolute left-1/2 transform -translate-x-1/2
                                    -translate-y-4 sm:translate-y-0
                                    flex items-center justify-center">
                                        <figure>
                                            <img src={frontendImg} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* Right card backend*/}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-end w-full mx:auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos="fade-left" data-aos-duration="1200"
                                                 className="bg-newSmallText p-4 rounded
                                                 shadow group hover:bg-newDarkAccent
                                                 cursor-pointer ease-in duration-150">
                                                <h3 className="text-newHeadingText font-[700]
                                                mb-3 group-hover:text-white
                                                group-hover:font[600] text-xl drop-shadow">
                                                    Backend Development
                                                </h3>
                                                <p className="text-[15px] text-smallTextColor
                                                group-hover:text-white
                                                group-hover:font[500] leading-7">
                                                    As a backend developer,
                                                    I offer services including database management,
                                                    server-side scripting, API development,
                                                    and ensuring scalability, security, and reliability
                                                    of the backend systems of applications.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-newDarkAccent
                                    border-mainBg border-4 w-10 h-10
                                    absolute left-1/2 transform -translate-x-1/2
                                    -translate-y-4 sm:translate-y-0
                                    flex items-center justify-center">
                                        <figure>
                                            <img src={backendImg} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/*Left card ui/ux design*/}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-start w-full mx:auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos="fade-right" data-aos-duration="1200"
                                                 className="bg-newSmallText p-4 rounded
                                                 shadow group hover:bg-newDarkAccent
                                                 cursor-pointer ease-in duration-150">
                                                <h3 className="text-newHeadingText font-[700]
                                                mb-3 group-hover:text-white
                                                group-hover:font[600] text-xl drop-shadow">
                                                    UI/UX Design
                                                </h3>
                                                <p className="text-[15px] text-smallTextColor
                                                   group-hover:text-white
                                                   group-hover:font[500] leading-7">
                                                    As a frontend UI/UX designer,
                                                    I offer services including visual hierarchy,
                                                    consistency, accessibility, user flow, feedback and interaction,
                                                    performance and speed to create intuitive and engaging
                                                    interfaces.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-newDarkAccent
                                    border-mainBg border-4 w-10 h-10
                                    absolute left-1/2 transform -translate-x-1/2
                                    -translate-y-4 sm:translate-y-0
                                    flex items-center justify-center">
                                        <figure>
                                            <img src={uiImage} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/* Right card app dev*/}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-end w-full mx:auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos="fade-left" data-aos-duration="1200"
                                                 className="bg-newSmallText p-4 rounded
                                                 shadow group hover:bg-newDarkAccent
                                                 cursor-pointer ease-in duration-150">
                                                <h3 className="text-newHeadingText font-[700]
                                                    mb-3 group-hover:text-white
                                                    group-hover:font[600] text-xl drop-shadow">
                                                    App Development
                                                </h3>
                                                <p className="text-[15px] text-smallTextColor
                                                    group-hover:text-white
                                                    group-hover:font[500] leading-7">
                                                    As an aspiring software developer,
                                                    I offer services in
                                                    web-based and mobile application development,
                                                    integration with backend systems, testing, and debugging.
                                                    My focus is on creating visually appealing and
                                                    user-friendly interfaces that are optimized for performance
                                                    and scalability, while also ensuring robustness and reliability.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-newDarkAccent
                                    border-mainBg border-4 w-10 h-10
                                    absolute left-1/2 transform -translate-x-1/2
                                    -translate-y-4 sm:translate-y-0
                                    flex items-center justify-center">
                                        <figure>
                                            <img className="w-full h-full" src={appImage} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;