import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(); // Crucial: Prevents page reload
    console.log("Form submitted successfully");
    console.log({ email, password });

    setEmail("");
    setPass("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#111] px-4">
      <div className="w-full max-w-md p-10 space-y-8 bg-[#1c1c1c] rounded-2xl border border-gray-800 shadow-2xl">
        
        {/* Header Section */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Login
          </h2>
          <p className="mt-2 text-gray-400">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Social Login Button (Adds 'Pro' feel) */}
        <button className="flex w-full items-center justify-center gap-3 py-2.5 border border-gray-700 rounded-lg text-white hover:bg-gray-800 transition-all font-medium">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5" alt="google" />
          Sign in with Google
        </button>

        <div className="relative flex items-center justify-center py-2">
          <div className="w-full border-t border-gray-800"></div>
          <span className="absolute bg-[#1c1c1c] px-3 text-xs text-gray-500 uppercase">Or email</span>
        </div>

        {/* Form Section */}
        <form className="space-y-5" onSubmit={submitHandler}>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Email Address
            </label>
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-600"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                Password
              </label>
              <a href="#" className="text-xs font-medium text-emerald-500 hover:text-emerald-400">
                Forgot password?
              </a>
            </div>
            <input
              required
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-black font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 mt-4"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          New here?
          <a href="#" className="ml-1 font-bold text-white hover:underline decoration-emerald-500 underline-offset-4">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;