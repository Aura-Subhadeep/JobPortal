import React from 'react';
import { Star } from 'lucide-react';

const JobCard = ({ title, company, tags, className = '', verified = true }) => (
    <div className={`flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 ${className}`}>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
          {company === 'Pinterest' && (
            <div className="bg-red-500 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">P</div>
          )}
          {company === 'Spotify' && (
            <div className="bg-green-500 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">S</div>
          )}
          {company === 'Mailchimp' && (
            <div className="bg-yellow-400 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">M</div>
          )}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{title}</h3>
            {verified && (
              <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <p className="text-gray-500 text-sm">{company}</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-xs py-1 px-2 rounded-full text-gray-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "Thanks to this platform, I secured a job in my dream company! I couldn't be happier with the support and opportunities this platform offered.",
      author: "James Rhye",
      role: "Lead Designer, Layers",
      rating: 5
    },
    {
      id: 2,
      content: "If you're a job seeker looking for a platform that truly cares about your success, look no further. This platform is a game-changer.",
      author: "Sarah Hasibuan",
      role: "Software Engineer, Google",
      rating: 4
    }
  ];


  const jobCards = [

    {
      title: "Product Designer",
      company: "Spotify",
      tags: ["UI Designer", "Part-time", "WFO"]
    },
    {
      title: "Senior UI Designer",
      company: "Mailchimp",
      tags: ["Design", "Full-time", "WFH"]
    },
    {
      title: "Senior UI Designer",
      company: "Mailchimp",
      tags: ["Design", "Full-time", "WFH"]
    }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex gap-12">
          {/* Left Column - Header Content */}
          <div className="w-1/2 pt-24">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 6h-4.586l-1.707-1.707A2 2 0 0013.414 4H3a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-6h4a1 1 0 000-2zm-9 6H8a1 1 0 100 2h4a1 1 0 000-2zm5-3H8a1 1 0 100 2h9a1 1 0 100-2z"/>
                </svg>
              </div>
              <span className="text-blue-500">Testimonial</span>
            </div>

            <h1 className="text-[2.7rem] font-semibold leading-[1.3] mb-6">
              Reviews of people<br /> who got jobs using Jobstera
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations.
            </p>

            <button className="px-6 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              More stories
            </button>
          </div>

          {/* Right Column - Testimonials */}
          <div className="w-1/2 space-y-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-sm border">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-4">
                    User Testimonial
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-800 mb-6">{testimonial.content}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {testimonial.author}
                      </h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <button className="text-blue-500">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M5 10H15M15 10L10 5M15 10L10 15" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* Job Listings Section */}
<div className="max-w-7xl mx-auto pb-12 pt-2">
<div className="bg-blue-500 rounded-3xl px-8 py-6 my-12">
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:space-x-6">
    {/* Main Content */}
    <div className="w-full lg:w-3/4 max-w-3xl">
      <h2 className="text-[2.7rem] md:text-4xl font-semibold lg:leading-[1.3] text-white mb-6">
        Join our community of ambitious professionals today and unlock the doors to your dream career.
      </h2>
      <p className="text-blue-50 text-lg mb-10">
        Unlock your true potential and discover a world of opportunities<br /> that align with your skills, interests, and aspirations.
      </p>
      <button className="px-6 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors">
        Get started now
      </button>
    </div>

    {/* Job Recommendations */}
    <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
      <div className="space-y-6">
        {jobCards.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  </div>
</div>
</div>
    </>
  );
};

export default TestimonialsSection;
