import React, {useRef} from 'react';
import heroImg from '../../assets/images/Shanon Naicker.png';
import CountUp from 'react-countup';


const Hero = () => {
    const headerRef = useRef(null);

    const handleClick = e => {
        e.preventDefault()
        const targetAttribute = e.target.getAttribute('href');
        const location = document.querySelector(targetAttribute).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    };

    return (
        <section ref={headerRef}
            className="pt-0 " id='about'>
            <div className="container pt-14">
                <div className="items-center justify-between sm:flex-col md:flex md:flex-row">
                    {/*Hero Content Left Side */}
                    <div className="w-full md:basis-1/2">
                        <h5 data-aos="fade-right" data-aos-duration="1500"
                            className="text-newPrimaryColor font-[600] text-[16px] drop-shadow">
                            Hi and Welcome
                        </h5>
                        <h1 data-aos="fade-up" data-aos-duration="1500"
                            className="mt-5 text-newPrimaryColor font-[800] text-[1.8rem] leading-[35px]
                            sm:text-[40px] sm:leading-[46px] drop-shadow">
                            I'm Shanon Naicker <br/> Software Developer
                        </h1>
                        <div data-aos="fade-up" data-aos-duration="1800" data-aos-delay="200"
                             className="mt-7 flex items-center gap-6">
                            <a href="#contact">
                                <button
                                    className="bg-newSmallText text-white font-[600] flex items-center gap-2
                                    hover:bg-newDarkAccent ease-in duration-300 py-2 px-4 rounded-[8px]">
                                    <i className="ri-mail-send-line text-mainBg"></i>
                                    Hire Me
                                </button>
                            </a>
                            <a onClick={handleClick}  href="#portfolio"
                               className="flex items-center gap-2 text-newDarkAccent font-[600]
                               py-2 px-4 rounded-[8px] max-h-[40px]
                               hover:bg-newDarkAccent
                               hover:text-white hover:border-newNeonAccent
                               hover:font-[600] ease-in duration-300 drop-shadow">
                                View portfolio
                            </a>
                        </div>
                        <p data-aos="fade-left"
                           data-aos-duration="1500"
                           className="flex gap-2 text-newSmallText pr-8 mt-12 font-[500]
                           text-[18px] leading-7
                           sm:pl-14 ri-sm:pr-10">
                            <span>
                                <i className="ri-sparkling-line text-newDarkAccent"></i>
                            </span>
                            As an aspiring software developer with a passion for solving complex problems and
                            creating innovative solutions.
                            Proficient in programming languages and technologies,
                            committed to continuous learning, and dedicated to delivering exceptional results.
                            Skilled in effective collaboration, clear communication, and timely project delivery.
                        </p>
                        <div className="flex items-center gap-9 mt-10">
                            <span className="text-newPrimaryColor text-[20px] font-[600] drop-shadow">
                                Follow me:
                            </span>
                            <span>
                                <a href="#github"
                                   className="text-newDarkAccent
                                   text-[20px] font-[500] hover:bg-newNeonAccent rounded-md
                                   py-1,5 px-2 hover:text-githubColor drop-shadow">
                                    <i className="ri-github-line"></i>
                                </a>
                            </span>
                            <span>
                                <a href="#linkedin"
                                   className="text-newDarkAccent
                                   text-[20px] font-[500] hover:bg-newNeonAccent
                                   rounded-md py-1,5 px-2 hover:text-linkedInColor drop-shadow">
                                    <i className="ri-linkedin-line"></i>
                                </a>
                            </span>
                            <span>
                                <a href="#pintrest"
                                   className="text-newDarkAccent
                                   text-[20px] font-[500] hover:bg-newNeonAccent
                                   rounded-md py-1,5 px-2 hover:text-pinterestColor drop-shadow">
                                    <i className="ri-pinterest-line"></i>
                                </a>
                            </span>
                            <span>
                                <a href="#youtube"
                                   className="text-newDarkAccent
                                   text-[20px] font-[500] hover:bg-newNeonAccent
                                   rounded-md py-1,5 px-2 hover:text-youtubeColor drop-shadow">
                                    <i className="ri-youtube-line"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    {/*Hero Content Left Side end */}

                    {/*Hero Image */}
                    <div data-aos="fade-left" data-aos-duration="1500"
                         className="basis-1/3 mt-10 sm:mt-5 ">
                        <figure className="flex items-center justify-center">
                            <img className="rounded-md" src={heroImg} alt=""/>
                        </figure>
                    </div>
                    {/*Hero Image end */}

                    {/*Hero Content right */}
                    <div className="md:basis-1/5 flex justify-between text-center
                    mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                        <div className="mb:-10">
                            <h2 className="text-newHeadingText font-[700] text-[32px] drop-shadow">
                                <CountUp start={0} end={1} duration={2} suffix=' +' />
                            </h2>
                            <h4 className="text-newDarkAccent font-[500] text-[18px] drop-shadow">
                                Years of Experience
                            </h4>
                        </div>
                        <div className="mb:-10">
                            <h2 className="text-newHeadingText font-[700] text-[32px] drop-shadow">
                                <CountUp start={0} end={100} duration={2} suffix=' %' />
                            </h2>
                            <h4 className="text-newDarkAccent font-[500] text-[18px] drop-shadow">
                                Success Rate
                            </h4>
                        </div>
                        <div className="mb:-10">
                            <h2 className="text-newHeadingText font-[700] text-[32px] drop-shadow">
                                <CountUp start={0} end={10} duration={2} suffix=' +' />
                            </h2>
                            <h4 className="text-newDarkAccent font-[500] text-[18px] drop-shadow">
                                Projects Completed
                            </h4>
                        </div>
                    </div>
                    {/*Hero Content right end*/}
                </div>
            </div>
        </section>
    )
};
export default Hero;
