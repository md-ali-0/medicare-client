import Lottie from "lottie-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from "../../assets/animation/login.json";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
    const { createLogin, setLoading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    let from = location?.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const { email, password } = data;
        const loadingToast = toast.loading("User Sign in ... ");
        try {
            const userResult = await createLogin(email, password);
            console.log(userResult.user);
            if (userResult?.user?.email) {
                try {
                    toast.dismiss(loadingToast);
                    toast.success("Successfully created!");
                    navigate(from, { replace: true });
                } catch (error) {
                    setLoading(false);
                    console.log("Error image", error);
                }
            }
        } catch (error) {
            setLoading(false);
            toast.dismiss(loadingToast);
            toast.error(error.code);
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="flex">
                <Helmet>
                    <title>MediCare | Login</title>
                </Helmet>
                {/* Left Pane */}
                <div className="hidden lg:flex items-center justify-center flex-1 py-5">
                    <div className="max-w-md text-center">
                        <Lottie animationData={loginAnimation} loop={true} />
                    </div>
                </div>
                {/* Right Pane */}
                <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center py-5">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                            Login
                        </h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
                            Sign In to Our Medical Camp Service
                        </h1>
                        <SocialLogin />
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>or with email</p>
                        </div>
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                                    {...register("email", {
                                        required: "Email is Required",
                                        pattern: {
                                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                            message: "Invalid Email format",
                                        },
                                    })}
                                    className="mt-1 p-2 w-full border border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                    autoComplete="username"
                                />
                                {errors.email && (
                                    <div className="text-md text-red-500">
                                        <span>{errors.email.message}</span>
                                    </div>
                                )}
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
                                    {...register("password", {
                                        required: "Password is Required",
                                    })}
                                    className="mt-1 p-2 w-full border border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                    autoComplete="current-password"
                                />
                                {errors.password && (
                                    <div className="text-md text-red-500">
                                        <span>{errors.password.message}</span>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>
                                Don&apos;t have an account?{" "}
                                <Link to="/register" className="text-black text-md hover:underline">
                                    Sign Up Here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
