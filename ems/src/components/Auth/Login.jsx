import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const submitHandler = () => {
    console.log("Hello guyes, form submitted successfully");
    console.log(email);
    console.log(password);

    setEmail("")
    setPass("")
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Please enter your details to sign in
          </p>
        </div>

        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
            value={password}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-2"
              />
              Remember me
            </label>
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>

          <button
            className="w-full py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-lg shadow-md transition-colors duration-200"
            type=""
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?
          <a
            href="#"
            className="ml-1 font-medium text-indigo-600 hover:underline"
          >
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
