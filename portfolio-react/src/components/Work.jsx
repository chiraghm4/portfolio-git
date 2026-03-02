import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        start_year: "2024-Present",
        title: "Dassault Systemes Globle Services",
        duration: '',
        details: 'Software Developer Associate'
    },
    {
        start_year: "2022-23",
        title: "Cling Multi Solution Pvt. Ltd.",
        duration: '8 months',
        details: 'Software Developer Intern'
    },
    {
        start_year: "2021-22",
        title: "Code Gurukul Pvt. Ltd.",
        duration: '5 months',
        details: 'Frontend Web Developer Intern'
    },
]

function Work() {
  return (
    <div id="works" className='max-w-[1040px] m-auto md:pl-20 p-4 my-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=>{
            return <WorkItem key={idx} data={item} />
        })}
    </div>
  )
}

export default Work