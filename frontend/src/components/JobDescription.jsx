import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { ChevronDown, BookmarkIcon } from 'lucide-react';
import Navbar from './shared/Navbar'; // Importing the Navbar component

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            if (res.data.success) {
                setIsApplied(true); // Update local state
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
                dispatch(setSingleJob(updatedSingleJob)); // Real-time UI update
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id)); // Ensure state sync
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div>
            <Navbar /> {/* Adding the Navbar component here */}
            <div className='max-w-4xl mx-auto px-4 py-8'>
                <div className=' bg-white'>
                    <div className='p-6'>
                        <div className='flex items-start justify-between'>
                            <div className='flex items-start gap-4'>
                                {/* Company Logo */}
                                <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center'>
                                    <span className='text-blue-600 text-xl font-semibold'>{singleJob?.title?.[0]}</span>
                                </div>
                                <div>
                                    <h1 className='text-xl font-semibold text-gray-900'>{singleJob?.title}</h1>
                                    <p className='text-gray-500 mt-1'>{singleJob?.location}</p>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <Button
                                    onClick={isApplied ? undefined : applyJobHandler}
                                    disabled={isApplied}
                                >
                                    {isApplied ? 'Already Applied' : 'Apply Now'}
                                </Button>
                                <Button variant="outline">
                                    <BookmarkIcon className='w-4 h-4' />
                                </Button>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <div className='flex items-center gap-2'>
                                <Badge className='bg-gray-100 text-gray-600'>{singleJob?.jobType}</Badge>
                                <Badge className='bg-gray-100 text-gray-600'>{singleJob?.salary} LPA</Badge>
                                <Badge className='bg-gray-100 text-gray-600'>{singleJob?.experienceLevel} years exp</Badge>
                            </div>
                        </div>

                        <div className='mt-8'>
                            <div className='space-y-6'>
                                <section>
                                    <h2 className='text-lg font-semibold flex items-center gap-2 mb-4'>
                                        Job Overview
                                        <ChevronDown className='w-4 h-4' />
                                    </h2>
                                    <p className='text-gray-600 leading-relaxed'>{singleJob?.description}</p>
                                </section>

                                <section>
                                    <h2 className='text-lg font-semibold flex items-center gap-2 mb-4'>
                                        Key Information
                                        <ChevronDown className='w-4 h-4' />
                                    </h2>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div>
                                            <p className='text-gray-500'>Total Positions</p>
                                            <p className='font-medium'>{singleJob?.position}</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500'>Total Applicants</p>
                                            <p className='font-medium'>{singleJob?.applications?.length}</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500'>Posted Date</p>
                                            <p className='font-medium'>{singleJob?.createdAt.split("T")[0]}</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500'>Experience Required</p>
                                            <p className='font-medium'>{singleJob?.experienceLevel} years</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDescription;
