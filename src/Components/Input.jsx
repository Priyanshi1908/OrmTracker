import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Input = () => {
 
  const navigate = useNavigate();

  const handleButtonClick =() => {
    navigate('/Status');

  };
 

  const [ticket , setTicket] = useState('');

  const handleOnChange = (e) => {
    setTicket(e.target.value)
  }

  return (
    <div className=' bg-slate-900 min-h-screen'>
    <div className="flex items-center justify-center h-screen flex-col">
    <h1 className=' text-5xl  text-cyan-700'>Track Your ORM Status</h1>
    <form className='mt-10 flex flex-col items-center'>

    <fieldset>
       <label>
         <input orm="orm" placeholder='Enter Ticket Number' value={ticket} onChange={handleOnChange} className="bg-slate-900 border border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-sky-900"  />
       </label>
     </fieldset>

     <button type="submit"   
      onClick={handleButtonClick}    
      className="mx-auto mt-4 rounded-3xl w-30 bg-gradient-to-br from-[#2618A0] to-[#04BEFE] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#4481EB]/50">
       Check
      </button>

       

    </form>
  </div>
  </div>
  )
}

export default Input