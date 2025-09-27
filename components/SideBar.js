// "use client"

// import React from 'react'

// const SideBar = () => {
//     const sidebarBoxes = [
//         {
//             heading: 'Create your first playlist',
//             about: "it\'ll easy we\'ll help you",
//             buttonText: "Create playlist"
//         },
//         {
//             heading: 'Let\'s find some podcasts to follow',
//             about: "We\'ll keep you updated on new episodes",
//             buttonText: "Browse podcasts"
//         }
//     ]

//     return (
//         <div>
//             <div id="sidebar" className='max-md:hidden w-full h-[85vh] flex flex-col gap-2'>
//                 <div id="uppersidebar" className='w-full py-3 px-5 bg-[#111010] rounded-[5px] flex justify-start items-center'>
//                     <div id="uppersidebarcontainer" className='flex flex-col gap-4'>

//                         <div className='flex items-center gap-x-3 text-white font-semibold font-mono text-lg'>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ededed" viewBox="0 0 256 256"><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path></svg>
//                             <span>Home</span>
//                         </div>

//                         <div className='flex items-center gap-x-3 text-white font-semibold font-mono text-lg'>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ededed" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
//                             <span>Search</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div id="lowersidebar" className='relative w-full h-full  bg-[#111010] rounded-[5px]'>
//                     <div id="header" className='w-full flex justify-between items-center p-3'>
//                         <span className='text-white font-mono font-semibold text-lg'>Your Library</span>

//                         <div>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ededed" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
//                         </div>
//                     </div>

//                     <div id="contentboxes" className='w-full p-3 flex flex-col gap-3'>
//                         {sidebarBoxes.map((box, idx) => {
//                             return (
//                                 <div key={idx} className="box w-full bg-[#242424] p-3 flex flex-col gap-2 text-white rounded-[5px]">
//                                     <h3 className='font-bold'>{box.heading}</h3>
//                                     <p className='text-sm text-gray-300'>{box.about}</p>
//                                     <button className='text-sm bg-white py-2 px-5 rounded-full text-black self-start font-semibold hover:bg-gray-300 transition-all cursor-pointer'>{box.buttonText}</button>
//                                 </div>
//                             )
//                         })}

//                     </div>

//                     <div id="sidebarfooter" className='absolute bottom-0 w-full text-start text-white text-sm p-2'>
//                         <span>Made With ❤️ By Talha.</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SideBar
