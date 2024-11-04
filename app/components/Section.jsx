'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Section = () => {
    const router = useRouter();
    const [numSec, setNumSec] = useState('');


    const handleSumbitfunction = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(numSec); // Log the input value
        // Navigate to the result page with the input value as a query parameter
        router.push(`/result?numSec=${encodeURIComponent(numSec)}`);


        if (Number(numSec) > 18) {
            router.push(`/notfound`);

        }

    };



    return (

        <div className="">
            <form onSubmit={handleSumbitfunction} className=' m-auto justify-center place-items-center flex'>
                <input value={numSec} onChange={(e) => { setNumSec(e.target.value) }} className=" font-bungee  text-7xl p-2 mt-4 text-slate-900  bg-slate-500 rounded-xl w-6/12" type="number" />

                <button disabled={!numSec} type='submit' className=" duration-500 disabled:bg-slate-500 bg-slate-900 -mb-2 shadow-2xl shadow-slate-900/70 rounded-lg p-2 text-3xl m-2">أبحث </button>

            </form>
        </div >
    )

}

export default Section