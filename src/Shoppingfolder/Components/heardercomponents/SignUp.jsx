import React from 'react';

const SignupPage = () => {
  return (


<div className='bg-[url("https://tse3.mm.bing.net/th?id=OIP.txm9huI3WwbARVX5DDg2AwHaCZ&pid=Api&P=0&h=180")] bg-cover'>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <form>
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-6">
            <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">Signup</button>
        </form>
        <p className="mt-4 text-sm text-gray-600">Already have an account? <a href="#" className="text-blue-500 hover:text-blue-600">Login</a></p>
      </div>

    </div>
      
</div>
  );
};

export default SignupPage;
