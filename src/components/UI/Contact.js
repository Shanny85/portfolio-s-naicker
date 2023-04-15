import React from "react";

const Contact = () => {
  return(
      <section id="contact" className="pb-16">
          <div className="container">
              <h2 className="text-newPrimaryColor text-[2.5rem] font-[700] mb-8 drop-shadow">
                  Contact Me
              </h2>
              <div className="md:flex justify-between items-center">
                  <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                      <iframe title="google-maps"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107501.
                          79193554953!2d30.911031253922303!3d-29.86859710842092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                          1!3m3!1m2!1s0x1ef7aa0001bc61b7%3A0xcca75546c4aa6e81!2sDurban!5e0!3m2!1sen!2sza
                          !4v1681380767080!5m2!1sen!2sza"
                              className="border-0 w-full h-full"
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                  </div>
                  <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px]
                  lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                      <form className="w-full">
                          <div className="mb-5">
                              <input type="text" placeholder="Enter your name"
                              className="w-full p-3 focus:outline-none rounded-[5px]"/>
                          </div>
                          <div className="mb-5">
                              <input type="email"
                                     placeholder="Enter your email"
                                     className="w-full p-3 focus:outline-none rounded-[5px]"/>
                          </div>
                          <div className="mb-5">
                              <input type="text"
                                     placeholder="Subject"
                                     className="w-full p-3 focus:outline-none rounded-[5px]"/>
                          </div>
                          <div className="mb-5">
                              <textarea
                                     rows={3}
                                     placeholder="Write a brief Message."
                                     className="w-full p-3 focus:outline-none rounded-[5px]"/>
                          </div>
                          <button className="w-full p-3 focus-outline-none rounded-[5px] bg-newSmallText font-[600]
                          text-white hover:bg-newDarkAccent text-center ease-linear duration-150">
                              Submit Message
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  )
};

export default Contact;