import React, { useState } from 'react';
import { Code, Paintbrush, Layout, Calculator, FolderKanban, Users, BarChart, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
    {
        title: "Frontend Developer",
        icon: <Code className="w-4 h-4" />
    },
    {
        title: "UI Designer",
        icon: <Layout className="w-4 h-4" />
    },
    {
        title: "Graphic Designer",
        icon: <Paintbrush className="w-4 h-4" />
    },
    {
        title: "Data Science",
        icon: <Users className="w-4 h-4" />
    },
    {
        title: "Backend Developer",
        icon: <FolderKanban className="w-4 h-4" />
    },
    {
        title: "Accountant",
        icon: <Calculator className="w-4 h-4" />
    },
    {
        title: "Marketing",
        icon: <BarChart className="w-4 h-4" />
    }
];

const CategoryCarousel = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 4;

    const next = () => {
        setStartIndex(prev => Math.min(prev + 1, categories.length - itemsToShow));
    };

    const prev = () => {
        setStartIndex(prev => Math.max(prev - 1, 0));
    };

    const handleCategoryClick = (category) => {
        console.log('Selected category:', category);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mt-8 mb-14">
                    <div className="flex justify-center items-center gap-2 pt-8 mb-2">
                        <div className=" p-2 bg-blue-50 rounded-lg">
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <span className="text-blue-500 font-medium">Jobstera's advantage</span>
                    </div>
                <h1 className="text-[2.7rem] py-4 leading-[1.3] font-semibold text-gray-900 mb-4">
                    We Empower Job Seekers Like You To <br/>Streamline And Supercharge Your Job Search.
                </h1>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Unlock your true potential and discover a world of opportunities that<br/>
                    align with your skills, interests, and aspirations
                </p>
            </div>

            <div className="relative px-8">
                <div className="overflow-hidden">
                    <div 
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${startIndex * (100 / itemsToShow)}%)` }}
                    >
                        {categories.map((cat, index) => (
                            <div 
                                key={index} 
                                className="flex-none  px-3"
                            >
                                <button 
                                    onClick={() => handleCategoryClick(cat.title)}
                                    className="w-full whitespace-nowrap rounded-full py-3 px-4 pr-6 border border-gray-200 flex items-center gap-3 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors bg-white"
                                >
                                    <div className="p-1.5 bg-gray-50 rounded-full">
                                        {cat.icon}
                                    </div>
                                    <span className="text-sm font-medium">{cat.title}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <button 
                    onClick={prev}
                    disabled={startIndex === 0}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                <button 
                    onClick={next}
                    disabled={startIndex >= categories.length - itemsToShow}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                    aria-label="Next"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default CategoryCarousel;