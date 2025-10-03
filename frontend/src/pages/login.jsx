import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-[8px_8px_20px_rgba(0,0,0,0.5)]">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Login
        </h2>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-dark mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-dark mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none text-sm"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-accent transition"
          >
            Sign in
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-secondary hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
