import React, { useState } from 'react';

const ProgressIndicator = () => (
  <div className="bg-white rounded-xl p-4 shadow-sm w-48">
    <h3 className="font-medium mb-2">Complete your profile</h3>
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <span>2 of 10 data</span>
      <svg className="w-4 h-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
    <p className="text-xs text-gray-500 mt-1">Complete your profile now and let us help you navigate</p>
  </div>
);

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

const FilterSection = ({ salaryRange, setSalaryRange }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold">Filters</h3>
      <button className="text-red-500 text-sm">Reset filter</button>
    </div>

    <div>
  <h3 className="font-semibold mb-3">Job type</h3>
  <div className="grid grid-cols-2 gap-4"> {/* 2-column grid */}
    {[
      { label: 'Full-Time', checked: true },
      { label: 'Part-Time' },
      { label: 'Freelance' },
      { label: 'Volunteer' },
      { label: 'Internship' },
    ].map((type) => (
      <label key={type.label} className="flex items-center gap-2">
        <input 
          type="checkbox" 
          defaultChecked={type.checked}
          className="w-4 h-4 rounded border-gray-300 text-blue-500" 
        />
        <span className="text-gray-700">{type.label}</span>
      </label>
    ))}
  </div>
</div>


    <div>
      <h3 className="font-semibold mb-3">Range salary</h3>
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>3LPA</span>
          <span>10+LPA</span>
        </div>
        <input
          type="range"
          min="1000"
          max="10000"
          value={salaryRange}
          onChange={(e) => setSalaryRange(e.target.value)}
          className="w-full accent-blue-500"
        />
      </div>
    </div>

    <div>
  <h3 className="font-semibold mb-3">On location</h3>
  <div className="grid grid-cols-2 gap-4">
    {[
      { label: 'Office'},
      { label: 'WFA' }
    ].map((loc) => (
      <label key={loc.label} className="flex items-center gap-2">
        <input 
          type="checkbox" 
          checked={loc.checked} 
          className="w-4 h-4 rounded border-gray-300 text-blue-500" 
        />
        <span className="text-gray-700">{loc.label}</span>
      </label>
    ))}
  </div>
</div>

  </div>
);

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [salaryRange, setSalaryRange] = useState(5000);
  const [location, setLocation] = useState("Agartala, Tripura");

  const handleSearch = () => {
    console.log("Search query:", query);
  };

  const companies = [
    {
      name: 'Spotify',
      logo: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png'
    },
    {
      name: 'Microsoft',
      logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31'
    },
    {
      name: 'TCS',
      logo: 'https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1720244494'
    },
    {
      name: 'Google',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    }
  ];

  const jobCards = [
    {
      title: "UI/UX Designer",
      company: "Pinterest",
      tags: ["Design", "Full-time", "WFH"]
    },
    {
      title: "Product Designer",
      company: "Spotify",
      tags: ["UI Designer", "Part-time", "WFO"]
    },
    {
      title: "Senior UI Designer",
      company: "Mailchimp",
      tags: ["Design", "Full-time", "WFH"]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 py-12 md:py-20 text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500 bg-blue-50 text-blue-500 font-medium text-sm">
            Early Stage Product
          </span>
          
          <h1 className="sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-gray-900 lg:leading-[1.5] max-w-4xl">
            Supporting Job seekers
            <br />
            Every Step of the Way
          </h1>
          
          <p className="text-gray-500 text-lg max-w-2xl">
            Unlock your true potential and discover a world of opportunities 
            with your skills, interests, and aspirations.
          </p>

          <div className="w-full max-w-2xl bg-white rounded-xl p-2 border shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex-1 flex items-center gap-2 px-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Find job here"
                  className="w-full py-3 outline-none"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="w-px h-8 bg-gray-200" />

              <div className="flex-1 flex items-center gap-2 px-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full py-3 outline-none text-gray-400"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button 
                onClick={handleSearch}
                className="w-full sm:w-auto rounded-xl bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            <div className="space-y-6">
            <div className="flex items-center gap-2 text-blue-500 font-medium mb-4">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  More about Jobstera
                </div>
              <h2 className="text-4xl font-medium text-gray-900 leading-[1.4]">
                Unlock Your True Potential And
                <br />
                Discover A World Of Opportunities
                <br />
                That Align With Your Skills, Interests,
                <br />
                And Aspirations
              </h2>
              
              <div className="grid grid-cols-4 gap-8 items-center pt-6">
                {companies.map((company) => (
                  <div
                    key={company.name}
                    className="h-8 flex items-center justify-center"
                  >
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-center pt-14">
              {[
                { value: '400+', label: 'Job list' },
                { value: '50+', label: 'People hired' },
                { value: '100+', label: 'Company' },
                { value: '12+', label: 'Available country' }
              ].map((stat) => (
                <div key={stat.label} className="space-y-2 flex flex-col items-center">
                  <p className="text-4xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="text-gray-500 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Section */}
<div className="py-8">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {/* Chat card Section */}
      <div className=" lg:pt-16 md:pt-16">
              <div className="bg-white border border-gray-100 shadow-lg  rounded-3xl p-6 space-y-4">
                <div className="text-sm text-gray-600">
                  <p className="mb-1">Good Morning</p>
                  <p className="text-xs text-gray-400">08:34 AM</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-800">
                    Hi Ricky,<br />
                    I am Anjal, I'm a UI/UX Designer at Exakt Studio. I have a feeling we
                    may have some very interesting work that you may be interested in
                    full-time opportunities?
                  </p>
                  <p className="text-xs text-gray-400">08:34 AM</p>
                </div>
                
                <div className="space-y-2">
                  <p className="bg-blue-500 text-white p-3 rounded-2xl inline-block max-w-[80%]">
                    Hi Markus, Thank you for offering me the position. I appreciate
                    your willingness to discuss the duties of the position with me and
                    give me to consider your offer.
                  </p>
                  <p className="text-xs text-gray-400 text-right">11:12 AM</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-800">
                    Your welcome Samuel 😊 So what's you answer for my offer?
                  </p>
                  <p className="text-xs text-gray-400">11:39 AM</p>
                </div>
              </div>
            </div>

      {/* Image card Section */}
      <div className='lg:pt-16 md:pt-16'>
        <div className="h-[520px] relative">
          <img 
            src="https://plus.unsplash.com/premium_photo-1705910880679-5b3986ca4b07?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Job applicant"
            className="w-full h-full object-cover shadow-lg rounded-2xl"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg">
            <div className="flex items-start gap-2">
              <div className="bg-green-100 p-1.5 rounded-full">
                <svg className="w-4 h-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm">Successfully applied</p>
                <p className="text-xs text-gray-500">Your application is under review</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="lg:pt-16 md:pt-16">
        <div className=''>
        <div className="flex items-center gap-2 pt-8 mb-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-blue-500 font-medium">Jobstera's advantage</span>
          </div>
          
          <h2 className="text-[2.7rem] py-5 font-semibold leading-[1.3] mb-3">
            The things you care about matter to Jobstera
          </h2>
          
          <p className="text-gray-600 text-lg mb-10">
            Unlock your potential and discover opportunities that align with your skills, intereset, and aspirations.
          </p>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-full font-medium transition-colors">
            Get started now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* Advantage section */}
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-blue-500 font-medium">Jobstera's advantage</span>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="">
              <h2 className="text-[2.7rem] py-5 font-semibold leading-[1.3] text-gray-900 mb-3">
                We Empower Job Seekers Like You To Streamline And Supercharge Your Job Search.
              </h2>
              <p className="text-lg mb-10 text-gray-600">
                Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-full font-medium transition-colors">
                Get started now
              </button>
            </div>

            {/* Right column - Image */}
            <div className="relative">
              <div className="w-full h-[380px] aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Professional team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Success indicator overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">98% Success Rate</p>
                    <p className="text-sm text-gray-500">In finding dream jobs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Features section */}
      <div className="w-full bg-gray-50 py-10">
        <div className="container mx-auto px-4">
        <div className="bg-[#fafafa] container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Job Recommendations */}
          <div className="bg-white rounded-3xl shadow p-8 space-y-6">
            <div className="space-y-4">
              {jobCards.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
            <h2 className="text-2xl font-bold">Personalized Job Recommendations</h2>
            <p className="text-gray-500">Say goodbye to tedious job searches and endless scrolling.</p>
          </div>

          {/* Interface Promo */}
          <div className="bg-white rounded-3xl shadow p-8 space-y-6">
            <h2 className="text-2xl font-bold">User-friendly and intuitive interface that is both easy to use and intuitive</h2>
            <p className="text-gray-500">
              You can focus on what matters most - finding the right job opportunity to propel your career forward.
            </p>
            <div className="relative w-full h-[18rem] aspect-video bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1642132652809-8c6ab1971169?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Interface preview" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Advanced Filtering */}
          <div className="bg-white rounded-3xl shadow p-8 space-y-6">
            <FilterSection salaryRange={salaryRange} setSalaryRange={setSalaryRange} />
            <h2 className="text-2xl font-bold">Advanced Job Filtering Options</h2>
            <p className="text-gray-500">You can save time and focus your efforts on the opportunities</p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;