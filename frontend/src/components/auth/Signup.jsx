import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const { loading, user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(); // FormData object
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Navbar */}
            <Navbar />
            <div className="flex-1 flex flex-col md:flex-row">
                {/* Left side - Illustration */}
                <div className="hidden md:flex md:w-1/2 bg-gray-50 items-center justify-center p-8">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
            <img
                src="https://res.cloudinary.com/dqqg4lyy3/image/upload/v1729767694/image_ffusdk.png" // Replace with your image URL
                alt="Illustration"
                className="w-full h-full object-cover rounded-lg"
                />
          </div>
                </div>

                {/* Right side - Signup Form */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                    <div className="w-full max-w-md space-y-8">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">Create an account</h2>
                            <p className="text-gray-600 mt-2">Please fill in your details</p>
                        </div>

                        <form onSubmit={submitHandler} className="mt-8 space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <Label className="text-sm font-medium">Full Name</Label>
                                    <Input
                                        type="text"
                                        value={input.fullname}
                                        name="fullname"
                                        onChange={changeEventHandler}
                                        className="mt-1"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <Label className="text-sm font-medium">Email</Label>
                                    <Input
                                        type="email"
                                        value={input.email}
                                        name="email"
                                        onChange={changeEventHandler}
                                        className="mt-1"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <Label className="text-sm font-medium">Phone Number</Label>
                                    <Input
                                        type="text"
                                        value={input.phoneNumber}
                                        name="phoneNumber"
                                        onChange={changeEventHandler}
                                        className="mt-1"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div>
                                    <Label className="text-sm font-medium">Password</Label>
                                    <Input
                                        type="password"
                                        value={input.password}
                                        name="password"
                                        onChange={changeEventHandler}
                                        className="mt-1"
                                        placeholder="Enter your password"
                                    />
                                </div>

                                {/* Role Selection */}
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Select Role</Label>
                                    <div className="flex gap-4">
                                        <div className="flex items-center space-x-2">
                                            <Input
                                                type="radio"
                                                name="role"
                                                value="student"
                                                checked={input.role === 'student'}
                                                onChange={changeEventHandler}
                                                className="cursor-pointer"
                                            />
                                            <Label>Student</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Input
                                                type="radio"
                                                name="role"
                                                value="recruiter"
                                                checked={input.role === 'recruiter'}
                                                onChange={changeEventHandler}
                                                className="cursor-pointer"
                                            />
                                            <Label>Recruiter</Label>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center gap-2'>
  <Label className="w-32 text-sm font-medium">Profile Picture</Label>
  <Input
    accept="image/*"
    type="file"
    onChange={changeFileHandler}
    className="w-full h-10 text-sm p-2 border rounded-md cursor-pointer"
  />
</div>

                            </div>

                            <div className="space-y-4">
                                {loading ? (
                                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                        Please wait
                                    </Button>
                                ) : (
                                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                                        Sign Up
                                    </Button>
                                )}
                            </div>
                        </form>

                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-medium text-blue-600 hover:text-blue-500"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
