import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Browse = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        };
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10 p-4 '>
                <h1 className='font-semibold text-2xl my-4 text-center text-gray-800'>
                    Search Results ({allJobs.length})
                </h1>

                {/* Search and Filter Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <input 
                        type="text" 
                        placeholder="Search jobs..." 
                        className="border border-gray-300 rounded-full p-3 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <select className="border border-gray-300 rounded-lg p-3">
                            <option value="relevance">Sort by Relevance</option>
                            <option value="date">Sort by Date</option>
                            <option value="salary">Sort by Salary</option>
                        </select>
                        <button className="bg-blue-600 text-white rounded-full px-4 py-3 hover:bg-blue-700 transition-colors duration-200">
                            Filter
                        </button>
                    </div>
                </div>

                {/* Job Listings */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {allJobs.map((job) => (
                        <Job key={job._id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Browse;
