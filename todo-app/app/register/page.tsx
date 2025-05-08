"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // if (!name || !email || !password || !confirmPassword) {
    //   toast({
    //     title: "Error",
    //     description: "Please fill in all fields",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    // if (password !== confirmPassword) {
    //   toast({
    //     title: "Error",
    //     description: "Passwords do not match",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    // Store user in localStorage for demo purposes
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    
    // Redirect to login page
    window.location.href = '/login';
    console.log(user)
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
    <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-xl font-semibold text-center mb-6">Welcome to Onboard!</h1>
      
      <p className="text-gray-500 text-center text-sm mb-6">
        Let's help to meet up your tasks.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Enter your Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-200"
          />
        </div>
        
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
        
        <div>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-200"
          />
        </div>
        
        <button type="submit" className="w-full bg-[#0DD3C5] hover:bg-[#0bb0a3] text-white mt-4">
          Register
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        <span className="text-gray-500">Already have an account? </span>
        <Link href="/login" className="text-[#0DD3C5] hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  </div>
  );
}
