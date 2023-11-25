import Lottie from "lottie-react";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import registerAnimation from "../../assets/animation/login.json";

const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="flex">
                {/* Left Pane */}
                <div className="hidden lg:flex items-center justify-center flex-1 py-5">
                    <div className="max-w-md text-center">
                        <Lottie animationData={registerAnimation} loop={true} />
                    </div>
                </div>
                {/* Right Pane */}
                <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center py-5">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                            Register
                        </h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
                            Sign Up to Our Medical Camp Service
                        </h1>
                        <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
                            <div className="w-full mb-2 lg:mb-0">
                                <button
                                    type="button"
                                    className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                                >
                                    <FcGoogle size={20} />
                                    Sign up with Google
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>or with email</p>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 p-2 w-full border border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="role"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Select Your Role
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    className="mt-1 p-2 w-full border border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                >
                                    <option value="organizer">Organizer</option>
                                    <option value="healthcare_professional">
                                        Healthcare Professional
                                    </option>
                                    <option value="participant">Participant</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="role"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Profile Picture
                                </label>
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    className="w-full block border bg-white placeholder-gray-500 leading-5 rounded-lg border-gray-200 focus:border-blue-500 px-2"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="mt-1 p-2 w-full border border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="mt-1 p-2 w-full border border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary/90 focus:outline-none focus:bg-primary transition-colors duration-300"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>
                                Already have an account?{" "}
                                <Link to="/login" className="text-black text-md hover:underline">
                                    Sign In Here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
