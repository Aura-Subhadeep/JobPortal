import React from 'react';
import { useNavigate } from 'react-router-dom';

const Badge = ({ children, className }) => (
  <span className={`px-3 py-1 rounded-full text-sm font-medium ${className}`}>
    {children}
  </span>
);

const Job = ({ job, onApply }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/description/${job?._id}`)} // Navigate on card click
      className="bg-white rounded-lg border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
    >
      {/* Header with company info and logo */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{job?.title}</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-gray-600 text-base">{job?.company?.name}</span>
            {job?.company?.verified && (
              <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            )}
          </div>
        </div>
        <div className="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center">
          {/* Company Logo */}
          {job?.company?.logo ? (
            <img src={job.company.logo} alt={job.company.name} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <span className="text-2xl font-bold text-gray-500">
              {job?.company?.name?.charAt(0)}
            </span>
          )}
        </div>
      </div>

      {/* Job description */}
      <p className="text-gray-600 text-sm mb-8 line-clamp-3">
        {job?.description}
      </p>

      {/* Location and job type info */}
      <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
        <div className="flex items-center gap-1.5">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {job?.location || 'Remote'}
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {job?.jobType || 'Full time'}
        </div>
      </div>

      {/* Tags section */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Badge className="bg-blue-50 text-blue-700">
          {job?.position} Positions
        </Badge>
        <Badge className="bg-red-50 text-red-700">
          {job?.jobType}
        </Badge>
        <Badge className="bg-purple-50 text-purple-700">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Apply button */}
      <button 
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering the card click
          onApply?.(job);
        }}
        className="w-full mt-4 bg-black text-white rounded-full py-4 text-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
      >
        Apply now
      </button>
    </div>
  );
};

export default Job;
