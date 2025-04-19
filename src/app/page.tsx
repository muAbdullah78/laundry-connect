import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">LaundryConnect Pakistan</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Welcome to LaundryConnect</h2>
          <p className="mb-4">
            Connecting local laundry shops with customers in Ghauri Town and beyond.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="font-bold mb-2">For Customers</h3>
              <p>Schedule pickups, track orders, and enjoy hassle-free laundry service.</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-md">
              <h3 className="font-bold mb-2">For Shop Owners</h3>
              <p>Increase your business reach and double profits with our delivery model.</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-md">
              <h3 className="font-bold mb-2">How It Works</h3>
              <p>We connect you with trusted local shops that handle cleaning and delivery.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md mr-4 hover:bg-blue-700">
              Sign Up
            </button>
            <button className="bg-gray-200 px-6 py-2 rounded-md hover:bg-gray-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
