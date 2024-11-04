'use client'

import { useSearchParams } from 'next/navigation'; // Use useSearchParams from next/navigation
import React from 'react';
import { dataofcollegesapt, dataofcollegehad, dataofcollegemond, dataofcollegetlat, dataofcollegearba } from '../data';

import { FaBookmark } from "react-icons/fa";


const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const searchParams = useSearchParams(); // Get search parameters from the URL
    const numSec = parseInt(searchParams.get('numSec')); // Retrieve and convert the numSec parameter to a number


    // Find the section that matches the numSec
    const section = dataofcollegesapt.find(item => item.id === numSec);
    const section1 = dataofcollegehad.find(item => item.id === numSec);
    const section2 = dataofcollegemond.find(item => item.id === numSec);
    const section3 = dataofcollegetlat.find(item => item.id === numSec);
    const section4 = dataofcollegearba.find(item => item.id === numSec);





    console.log(numSec)





    return (







        <div className=' font-arabicUI'>






            <div >
                <h2 className=' font-arabicUI text-slate-400 text-4xl border-4 border-slate-400  w-fit p-2 m-auto flex justify-center rounded-xl my-9'> <span className='font-bungee'>{numSec}</span>&nbsp; سكشن</h2>



                {/* *********************************** */}

                <h3 className=' font-arabicUI text-white text-2xl flex m-auto justify-center'>محاضرات يوم السبت  &nbsp; <FaBookmark />
                </h3>

                <div className=' border-slate-500 border-4 m-4 rounded-xl'>
                    <ul>
                        {section?.tasks.map((item, index) => {
                            return (
                                <li
                                    className={`flex justify-between ${index === dataofcollegesapt.length - 2 ? '' : 'border-b-4 border-slate-500'}`}
                                    key={item.id}
                                >
                                    <div className=' w-1/3 text-center p-2 border-r-4 border-slate-500'>
                                        <h2 className='  text-slate-400 text-2xl font-arabicUI'><span className=' font-bungee'>{item.time}</span> الساعة</h2>
                                    </div>
                                    <div className='  p-2 border-r-4 text-center  border-slate-500 w-1/3'>
                                        <h2 className=' text-slate-400 text-2xl'>{item.location}</h2>
                                    </div>
                                    <div className=' w-1/3 '>
                                        <h2 className=' p-2 text-center  text-slate-400 text-2xl '>{item.name}</h2>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                </div>
                {/* *********************************** */}

                <h3 className=' font-arabicUI text-white text-2xl flex m-auto justify-center'>محاضرات يوم الاحد  &nbsp; <FaBookmark />
                </h3>

                <div className=' border-slate-500 border-4 m-4 rounded-xl'>
                    <ul>
                        {section1?.tasks.map((item, index) => {
                            return (
                                <li
                                    className={`flex justify-between ${index === dataofcollegehad.length - 2 ? '' : 'border-b-4 border-slate-500'}`}
                                    key={item.id}
                                >
                                    <div className=' w-1/3 text-center p-2 border-r-4 border-slate-500'>
                                        <h2 className='  text-slate-400 text-2xl font-arabicUI'><span className=' font-bungee'>{item.time}</span> الساعة</h2>
                                    </div>
                                    <div className='  p-2 border-r-4 text-center  border-slate-500 w-1/3'>
                                        <h2 className=' text-slate-400 text-2xl'>{item.location}</h2>
                                    </div>
                                    <div className=' w-1/3 '>
                                        <h2 className=' p-2 text-center  text-slate-400 text-2xl '>{item.name}</h2>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                </div>
                {/* *********************************** */}

                <h3 className=' font-arabicUI text-white text-2xl flex m-auto justify-center'>محاضرات يوم الاتنين  &nbsp; <FaBookmark />
                </h3>

                <div className=' border-slate-500 border-4 m-4 rounded-xl'>
                    <ul>
                        {section2?.tasks.map((item, index) => {
                            return (
                                <li
                                    className={`flex justify-between ${index === dataofcollegemond.length - 2 ? '' : 'border-b-4 border-slate-500'}`}
                                    key={item.id}
                                >
                                    <div className=' w-1/3 text-center p-2 border-r-4 border-slate-500'>
                                        <h2 className='  text-slate-400 text-2xl font-arabicUI'><span className=' font-bungee'>{item.time}</span> الساعة</h2>
                                    </div>
                                    <div className='  p-2 border-r-4 text-center  border-slate-500 w-1/3'>
                                        <h2 className=' text-slate-400 text-2xl'>{item.location}</h2>
                                    </div>
                                    <div className=' w-1/3 '>
                                        <h2 className=' p-2 text-center  text-slate-400 text-2xl '>{item.name}</h2>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                </div>


            </div>
            {/* *********************************** */}

            <h3 className=' font-arabicUI text-white text-2xl flex m-auto justify-center'>محاضرات يوم الثلاثاء  &nbsp; <FaBookmark />
            </h3>

            <div className=' border-slate-500 border-4 m-4 rounded-xl'>
                <ul>
                    {section3?.tasks.map((item, index) => {
                        return (
                            <li
                                className={`flex justify-between ${index === dataofcollegetlat.length - 2 ? '' : 'border-b-4 border-slate-500'}`}
                                key={item.id}
                            >
                                <div className=' w-1/3 text-center p-2 border-r-4 border-slate-500'>
                                    <h2 className='  text-slate-400 text-2xl font-arabicUI'><span className=' font-bungee'>{item.time}</span> الساعة</h2>
                                </div>
                                <div className='  p-2 border-r-4 text-center  border-slate-500 w-1/3'>
                                    <h2 className=' text-slate-400 text-2xl'>{item.location}</h2>
                                </div>
                                <div className=' w-1/3 '>
                                    <h2 className=' p-2 text-center  text-slate-400 text-2xl '>{item.name}</h2>
                                </div>
                            </li>
                        )
                    })}

                </ul>
            </div>
            {/* *********************************** */}

            <h3 className=' font-arabicUI text-white text-2xl flex m-auto justify-center'>محاضرات يوم الاربعاء  &nbsp; <FaBookmark />
            </h3>

            <div className=' border-slate-500 border-4 m-4 rounded-xl'>
                <ul>
                    {section4?.tasks.map((item, index) => {
                        return (
                            <li
                                className={`flex justify-between ${index === dataofcollegearba.length - 2 ? '' : 'border-b-4 border-slate-500'}`}
                                key={item.id}
                            >
                                <div className=' w-1/3 text-center p-2 border-r-4 border-slate-500'>
                                    <h2 className='  text-slate-400 text-2xl font-arabicUI'><span className=' font-bungee'>{item.time}</span> الساعة</h2>
                                </div>
                                <div className='  p-2 border-r-4 text-center  border-slate-500 w-1/3'>
                                    <h2 className=' text-slate-400 text-2xl'>{item.location}</h2>
                                </div>
                                <div className=' w-1/3 '>
                                    <h2 className=' p-2 text-center  text-slate-400 text-2xl '>{item.name}</h2>
                                </div>
                            </li>
                        )
                    })}

                </ul>
            </div>


        </div>

    )
}

export default page