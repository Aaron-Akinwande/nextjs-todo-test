"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const { toast } = useToast();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!email || !password) {
        alert(
           "Error Please fill in all fields",
       
        );
        return;
      }
  
      // Check if user exists in localStorage
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
          // Set user as logged in
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('currentUser', JSON.stringify(user));
          
          // Redirect to dashboard
          window.location.href = '/todo';
          return;
        } else {
            alert(" user does not exist")
        }
      }

      console.log(storedUser)
  
    //   toast({
    //     title: "Error",
    //     description: "Invalid email or password",
    //     variant: "destructive",
    //   });
    };
  

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-xl font-semibold text-center mb-6">Welcome back</h1>

        <div className="flex justify-center mb-8">
          {/* Login illustration */}
          <div className="w-32 h-32 relative">
            <div className="absolute left-2 bottom-0">
              <div className="w-8 h-24 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-[#0DD3C5]"></div>
                <div className="w-2 h-10 bg-[#0DD3C5]"></div>
                <div className="flex">
                  <div className="w-3 h-6 bg-[#0DD3C5]"></div>
                  <div className="w-3 h-6 bg-[#0DD3C5]"></div>
                </div>
              </div>
            </div>
            <div className="absolute right-2 bottom-0">
              <div className="w-8 h-24 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-[#F98BAE]"></div>
                <div className="w-2 h-10 bg-[#F98BAE]"></div>
                <div className="flex">
                  <div className="w-3 h-6 bg-[#F98BAE]"></div>
                  <div className="w-3 h-6 bg-[#F98BAE]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-200"
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-200"
            />
          </div>

          <div className="text-right">
            <Link href="#" className="text-[#0DD3C5] text-sm hover:underline">
              Forgot password?
            </Link>
          </div>
          
          <button type="submit" className="w-full bg-[#0DD3C5] hover:bg-[#0bb0a3] text-white mt-4">
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Don't have an account? </span>
          <Link href="/register" className="text-[#0DD3C5] hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
