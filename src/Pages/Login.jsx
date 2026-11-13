
import { Eye, EyeClosed, EyeDashed, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleContinue = (e) => {
    e.preventDefault();

    if (!validEmail) return;

    if (step === 1) {
      setStep(2);
      return;
    }

    console.log({
      email,
      password,
      isSignUp,
    });
  };

  const handleGoogle = () => {
    console.log("Continue with Google");
  };

  const handleApple = () => {
    console.log("Continue with Apple");
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setStep(1);
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-[38%] xl:w-[37.5%] min-h-screen flex flex-col px-6 sm:px-12 lg:px-14 xl:px-20 py-8">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-1 w-fit mb-1">
          <svg
            width="31"
            height="34"
            viewBox="0 0 31 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12.5L22.5 1L29 8L9 20L3 12.5Z"
              fill="#006AFF"
            />
            <path
              d="M2 16L28 5V29L2 33V16Z"
              fill="#006AFF"
            />
            <path
              d="M9 23L22 15V25L9 28V23Z"
              fill="white"
            />
          </svg>

          <span className="text-[34px] font-bold tracking-tight text-[#111827]">
            Zillow
            <sup className="text-[9px] ml-0.5">®</sup>
          </span>
        </a>

        {/* FORM CONTENT */}
        <div className="w-full max-w-[460px]">

          <h1 className="text-[27px] font-bold text-[#111827] mb-5">
            {isSignUp ? "Create account" : "Sign in"}
          </h1>

          <form onSubmit={handleContinue}>

            {/* EMAIL */}
            <div className="mb-2">
              <label className="block text-[18px] font-semibold text-[#111827] mb-2">
                Email Address <span className="text-red-600">*</span>
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                required
                className="w-full h-12 border border-[#858B9B] rounded-[17px] px-5 text-lg outline-none transition-all focus:border-[#006AFF] focus:ring-1 focus:ring-[#006AFF]"
              />
            </div>

            {/* PASSWORD */}
            {step === 2 && (
              <div className="mb-5">
                <label className="block text-[18px] font-semibold text-[#111827] mb-2">
                  Password <span className="text-red-600">*</span>
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full h-12 border border-[#858B9B] rounded-[17px] px-5 pr-16 text-lg outline-none transition-all focus:border-[#006AFF] focus:ring-1 focus:ring-[#006AFF]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-[#006AFF] font-semibold"
                  >
                    {showPassword ? <EyeOff size={20} color="black"/> : <Eye size={20} color="black"/>}
                  </button>
                </div>
              </div>
            )}

            {/* CONTINUE */}
            <button
              type="submit"
              disabled={!validEmail || (step === 2 && password.length < 8)}
              className="w-full h-12 rounded-[17px] bg-[#006AFF] text-white text-[22px] font-bold transition-all hover:bg-[#0054CC] disabled:bg-[#9BB5F0] disabled:cursor-not-allowed"
            >
              Continue
            </button>

          </form>

          {/* CREATE ACCOUNT */}
          <p className="text-[19px] mt-6 text-[#111827]">
            {isSignUp ? "Already have an account?" : "New to Zillow?"}

            <button
              onClick={resetForm}
              className="text-[#0059D6] font-bold ml-1 hover:underline"
            >
              {isSignUp ? "Sign in" : "Create account"}
            </button>
          </p>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-7">
            <div className="flex-1 h-[1.5px] bg-[#454B59]" />
            <span className="text-[#454B59] text-lg">OR</span>
            <div className="flex-1 h-[1.5px] bg-[#454B59]" />
          </div>

          {/* GOOGLE */}
          <button
            type="button"
            onClick={handleGoogle}
            className="w-full h-12 border border-[#858B9B] rounded-[17px] flex items-center px-5 gap-3 md:text-[21px] text-[#111827] hover:bg-gray-50 transition-all mb-3"
          >
            <svg viewBox="0 0 48 48" className="w-6 h-6">
              <path fill="#FFC107" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.9 6.1-15Z"/>
              <path fill="#4285F4" d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"/>
              <path fill="#34A853" d="M12.6 27.5a12 12 0 0 1 0-7.1v-5.3H5.8a20 20 0 0 0 0 17.7l6.8-5.3Z"/>
              <path fill="#EA4335" d="M24 12.1c3 0 5.7 1 7.8 3.1l5.9-5.9A19.7 19.7 0 0 0 24 4a20 20 0 0 0-18.2 11.1l6.8 5.3c1.6-4.8 6.1-8.3 11.4-8.3Z"/>
            </svg>

            Continue with Google
          </button>

          {/* APPLE */}
          <button
            type="button"
            onClick={handleApple}
            className="w-full h-12 border border-[#858B9B] rounded-[17px] flex items-center px-5 gap-3 md:text-[21px] text-[#111827] hover:bg-gray-50 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.43.61-2.19.43-3.05-.35C2.8 15.24 3.46 7.55 8.94 7.27c1.32.07 2.24.73 3.01.78 1.14-.23 2.23-.9 3.45-.82 1.47.12 2.57.7 3.3 1.75-3.04 1.82-2.32 5.82.47 6.94-.56 1.49-1.28 2.97-2.12 4.36ZM11.95 7.21c-.14-2.22 1.65-4.05 3.7-4.21.29 2.55-2.31 4.47-3.7 4.21Z"/>
            </svg>

            Continue with Apple
          </button>

          {/* TERMS */}
          <p className="text-[16px] text-[#111827] mt-7">
            By submitting, I accept Zillow's{" "}
            <a
              href="#terms"
              className="text-[#0059D6] font-semibold hover:underline"
            >
              terms of use
            </a>
          </p>

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden lg:block flex-1 min-h-screen relative overflow-hidden">
        <img
          src="/loginImage.png"
          alt="Family enjoying time together in their home garden"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

    </div>
  );
}
