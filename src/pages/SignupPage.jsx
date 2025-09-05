import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Logo from "../assets/Logo.png";
import SignUpVector from "../assets/Vector 1.png";
import SignUpStar from "../assets/Star 1.png";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
    navigate("/landing");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#1E1E1E] px-4">
      <div className="relative w-full md:w-lg lg:w-2xl rounded-2xl p-4 md:p-8 bg-[#252434] shadow-lg mt-24">
        {/* Logo */}
        <div className="logo absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 bg-[#252434] border-4 border-[#1E1E1E] rounded-full flex items-center justify-center">
          <img src={Logo} alt="Logo" className="w-20 h-20" />
        </div>

        {/* Heading */}
        <div className="text-center mt-12">
          <div className="relative flex justify-center mt-12">
            <h1 className="font-bold mb-5 text-3xl text-white relative z-10">
              Welcome to North Star Group
            </h1>

            <img
              src={SignUpVector}
              alt="vector"
              className="absolute md:top-[40%] left-[50%] w-[50%] top-[45%] lg:left-[59%] md:left-[58%] lg:w-[23%] md:w-[23%]  -translate-x-1/2 -translate-y-1/2 z-1"
            />

            <img
              src={SignUpStar}
              alt="star"
              className="absolute left-[70%] -top-[10%] lg:left-[69%] lg:-top-[40%] md:-top-[20%] md:left-[66%] -translate-y-1/2 z-1"
            />
          </div>

          {/* Subtitle */}
          <p className="text-center font-semibold text-base text-gray-400">
            Sign up with your email address or Google account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="northstargroup@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full p-3 rounded-lg bg-[#1E1E1E] text-white  focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#00A3FF] text-white font-semibold rounded-lg hover:cursor-pointer hover:bg-[#0086d1] transition"
          >
            Continue with Email
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-600" />
          <span className="px-4 text-gray-400">OR</span>
          <hr className="flex-1 border-gray-600" />
        </div>

        <button className="w-full py-3 flex items-center justify-center gap-2 bg-white text-[#7D7D7D] font-semibold rounded-lg hover:bg-gray-200 transition">
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>
      </div>

      <div className="text-white text-center w-full mt-12">
        <p>
          By signing in or creating an account, you agree with our <br></br>
          <b className="text-[#00A3FF]">Terms & Conditions</b> and{" "}
          <b className="text-[#00A3FF]">Privacy Policy</b>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
