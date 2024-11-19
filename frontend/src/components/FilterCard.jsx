import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
    {
        filterType: "Location",
        options: [
            "Delhi",
            "Bangalore",
            "Pune",
            "Chennai",
            "Kolkata",
            "Gurgaon",
            "Noida"
        ],
        name: "location"
    },
    {
        filterType: "Industry",
        options: [
            "Full Stack Developer",
            "Data Scientist",
            "Machine Learning Engineer",
            "DevOps Engineer",
            "UI/UX Designer",
            "Product Manager",
            "Cybersecurity Analyst",
            "Cloud Engineer"
        ],
        name: "industry"
    },
    {
        filterType: "Salary",
        options: [

            "1-2 lakh",
            "2-3 lakh",
            "3-5 lakh",
            "5-8 lakh",
            "8-10 lakh",
            "13 lakh and above"
        ],
        name: "salary"
    },
];


const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState({});
    const dispatch = useDispatch();

    const changeHandler = (name, value) => {
        setSelectedValue((prev) => ({ ...prev, [name]: value }));
    };

    const resetFilters = () => {
        setSelectedValue({});
    };

    useEffect(() => {
        const query = Object.values(selectedValue).join(', ');
        dispatch(setSearchedQuery(query));
    }, [selectedValue, dispatch]);

    return (
        <div className="max-w-7xl mx-auto px-0">
            <div className="flex gap-6">
                {/* Filters */}
                <div className="w-64 flex-shrink-0">
                    <div className="bg-white rounded-lg border border-gray-100 p-6">
                        <h2 className="font-semibold mb-4">Filter Jobs</h2>
                        
                        <div className="space-y-6">
                            {filterData.map((filter) => (
                                <div key={filter.filterType}>
                                    <h3 className="text-sm font-medium text-gray-700 mb-2">{filter.filterType}</h3>
                                    <div className="space-y-2">
                                        {filter.options.map(option => (
                                            <label key={option} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name={filter.name}
                                                    value={option}
                                                    checked={selectedValue[filter.name] === option}
                                                    onChange={() => changeHandler(filter.name, option)}
                                                    className="h-4 w-4 text-blue-600"
                                                />
                                                <span className="ml-2 text-sm text-gray-600">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Reset Button */}
                        <button 
                            onClick={resetFilters}
                            className="mt-6 w-full bg-gray-100 text-black rounded-lg py-2 text-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                        >
                            Reset Filters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterCard;
