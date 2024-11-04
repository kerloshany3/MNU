'use client'

import { useSearchParams } from 'next/navigation'; // Use useSearchParams from next/navigation
import React, { Suspense } from 'react';
import { dataofphyscs } from '../data';
import { FaBookmark } from "react-icons/fa";




function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const searchParams = useSearchParams(); // Get search parameters from the URL
    const numSec = parseInt(searchParams.get('numSec')); // Retrieve and convert the numSec parameter to a number




    const filteredSections = dataofphyscs.filter(item => item?.id === numSec);

    return (

        <Suspense fallback={<div>Loading...</div>}>

            <div>


                <div >
                    <h2 className=' font-arabicUI text-slate-400 text-4xl border-4 border-slate-400  w-fit p-2 m-auto flex justify-center rounded-xl my-9'> <span className='font-bungee'>{numSec}</span>&nbsp; سكشن</h2>



                    {/* *********************************** */}

                    <h3 className=' font-arabicUI text-white text-2xl flex m-auto justify-center'>  محاضرة الفيزياء  &nbsp; <FaBookmark />
                    </h3>

                    <div className=' border-slate-500 border-4 m-4 rounded-xl'>
                        <ul>
                            {filteredSections.map((item, index) => {
                                return (
                                    <li
                                        className={`flex justify-between ${index === dataofphyscs.length - 2 ? '' : 'border-b-4 border-slate-500'}`}
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
            </div>
        </Suspense>

    )
}

export default page