import React from 'react';

const Contact = () => {
  
  return (
    <section className="w-full md:py-10 lg:py-8 sm:py-8 bg-base-200 mt-20 ">
      <div id="Contact" className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto scroll-mt-20">
        <div className="card w-full">
          <div className="card-body">

            {/* Header */}
            <h2 className="head-style max-[360px]:text-lg max-[500px]:text-lg text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-center text-cyan-800" data-aos="fade-down">
              Contact <span className="text-error head-style">Me</span>
            </h2>

            <p className='mb-4 text-base-content/70 text-center text-sm sm:text-base md:text-base lg:text-lg font-primary' data-aos="fade-up">
              Open to Frontend | Internship | Any job role 😉
            </p>

            {/* Form */}
            <form className="space-y-2 max-[400px]:p-3 p-4 sm:p-8 rounded-2xl bg-white shadow-md text-black">
            
              {/* Name */}
              <div className="form-control">

                <label className="block max-[360px]:text-xs text-sm sm:text-sm font-medium mb-1 ">
                  Full Name
                </label>

                <input
                  type="text" name="FullName" id="FullName"
                  placeholder="Your Name"
                  className="input w-full h-8 sm:h-10 max-[360px]:text-xs text-sm sm:text-sm px-2 
                  focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  required
                />
                
              </div>

              {/* Email */}
              <div className="form-control">

                <label className="block max-[360px]:text-xs text-sm sm:text-sm font-medium mb-1 ">
                  Email-ID
                </label>

                <input
                    type="email" name="emailid" id="emailid"
                    placeholder="you@example.com"
                    className="input w-full h-8 sm:h-10 max-[360px]:text-xs text-sm sm:text-sm px-2 focus:ring-2 
                    focus:ring-cyan-500 focus:outline-none"
                    required
                  />
                
              </div>

              {/* Message */}
              <div className="form-control">

                <label className="block max-[360px]:text-xs text-sm sm:text-sm font-medium mb-1 ">
                  Email-ID
                </label>

                <textarea
                  name="message" id="message"
                  placeholder="Write your message..."
                  rows={3}
                  className="textarea w-full max-[360px]:text-xs text-sm sm:text-sm px-2 py-1.5 
                  focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  required
                />
                
              </div>

              {/* Button */}
              <div className="form-control mt-6 flex justify-center">
                <button 
                  type="submit" 
                  className="btn btn-primary text-white w-full sm:w-auto
                   py-1.5 px-1 sm:py-2 sm:px-8 || max-[360px]:text-xs text-sm sm:text-sm">

                  Send Message

                </button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </section>

  );
}
export default Contact;