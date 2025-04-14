'use client'
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const Resitpage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const rout = useRouter();
    const changeName = (e) => {
      setName(e.target.value);
    }
    const changeEmail = (e) => {
      setEmail(e.target.value);
    }
    const changePassword = (e) => {
      setPassword(e.target.value);
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        name: name,
        email: email,
        password: password
      }
      const result = await axios.post('http://localhost:3000/api/users', data);
      console.log(result);
      rout.push('/');
    }
  
    return (
      <div>
        
  
        
  
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <form className="w-full max-w-sm">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Registro</div>
                <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
              <input onChange={changeName} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
               </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                  <input onChange={changeEmail} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input onChange={changePassword} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                </div>
              </div>
              <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
            </form>
          </div>
        </div>
      </div>
    );
}
export default Resitpage;
