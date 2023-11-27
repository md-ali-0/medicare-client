import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const NewsLetter = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async () => {
        reset()
        toast.success("Thanks for subscribing!");
    };
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="flex flex-col items-center rounded-lg bg-primary/20 p-4 sm:p-8">
                    <div className="mb-4 sm:mb-8">
                        <h2 className="text-center font-Quicksand text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">
                            Get the latest updates
                        </h2>
                        <p className="text-center text-gray-500 font-DancingScript">Sign up for our newsletter</p>
                    </div>
                    <form
                        className="mb-3 flex w-full max-w-md gap-2 sm:mb-5"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            placeholder="Email"
                            {...register("email", {
                                required: "Email is Required",
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: "Invalid Email format",
                                },
                            })}
                            className="mt-1 p-2 w-full border border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                        />
                        <button className="btn-primary">Send</button>
                    </form>
                    <div>
                        {errors.email && (
                            <div className="text-md text-red-500">
                                <span>{errors.email.message}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
