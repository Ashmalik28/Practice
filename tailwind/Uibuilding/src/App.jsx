
import { useEffect, useState } from 'react'
import './App.css'
import { SidebarToggle } from './icons/SidebarToggle';

const useMediaQuery = (query) => {
  const [matches , setmatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if(media.matches != matches){
      setmatches(media.matches);
    }
    const listener = () => setmatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);

  }, [matches , query])
  return matches;
}

function App() {
  const [sidebaropen , setsidebaropen] = useState(true);
  const isDesktop = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    if(isDesktop == false){
      setsidebaropen(false);
     }else{
      setsidebaropen(true);
     }


  },[isDesktop])


  return (
    <>
    <div className='flex'>
    <Sidebar sidebaropen ={sidebaropen} setsidebaropen = {setsidebaropen} />
    <MainComponent sidebaropen = {sidebaropen}/>
    </div>
    </>
  )
}

function Sidebar({sidebaropen , setsidebaropen}){
  if(!sidebaropen){
    return <div className='fixed top-0 left-0'>
      <div>
      <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
        setsidebaropen(!sidebaropen);
      }}>
         <SidebarToggle />
      </div>
    </div>
    </div>
  }
    return <div className='w-96 h-screen shadow-2xl fixed top-0 left-0 md:relative'>
    <div>
      <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
        setsidebaropen(!sidebaropen);
      }}>
         <SidebarToggle />
      </div>
      <span className='flex m-3 justify-between'>
        <button className='flex items-center gap-1 bg-blue-900 m-2 p-2 rounded-lg px-3 text-green-400'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
          <path fill-rule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clip-rule="evenodd" />
          </svg>
          <span className='text-white'>Webinar<span className='text-green-400'>.gg</span></span>
        </button>
        <div className='w-10 h-10 m-2 rounded-lg overflow-hidden'>
          <img className='w-full h-full object-cover ' src="https://avatars.githubusercontent.com/u/137030701?s=400&u=62c35f2f8dc17b8a2d0f47bb1718e6164c9ee0c8&v=4" alt="My-image" />
        </div>
      </span>

      <span className='m-5 flex justify-between hover:bg-gray-200 hover:text-blue-900 bg-white text-gray-400 rounded-lg'>
          <span className='m-2 px-1'>Home</span>
          <div className='m-2 px-1'>
          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
          </div>
      </span>
      <span className='m-5 flex justify-between hover:bg-gray-200 hover:text-blue-900 bg-white text-gray-400 rounded-lg'>
          <span className='m-2 px-1'>Webinars</span>
          <div className='m-2 px-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" />
          </svg>
          </div>
      </span>
      <span className='m-5 flex justify-between hover:bg-gray-200 hover:text-blue-900 bg-white text-gray-400 rounded-lg'>
          <span className='m-2 px-1 '>Billing</span>
          <div className='m-2 px-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
          <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
          </svg>
          </div>
      </span>
      <span className='m-5 flex justify-between hover:bg-gray-200 hover:text-blue-900 bg-white text-gray-400 rounded-lg'>
          <span className='m-2 px-1'>User Management</span>
          <div className='m-2 px-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
          </svg>
          </div>
      </span>
      <span className='m-5 flex justify-between hover:bg-gray-200 hover:text-blue-900 bg-white text-gray-400 rounded-lg'>
          <span className='m-2 px-1'>Settings</span>
          <div className='m-2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
          </svg>
          </div>
      </span>
      
    </div>
  </div>
  }


function MainComponent(){
  return <div className='w-full'>
      <div className='h-30 bg-black hidden md:block'></div>
      <div className='grid grid-cols-22 gap-8 p-8'>
        <div className='h-86 rounded-2xl justify-center items-center bg-white border-2 border-gray-200 md:col-span-5 -translate-y-16 shadow-lg 
        hidden md:block col-span-11'>
          <div className=' w-28 h-28 mx-auto my-14 mb-7 rounded-lg overflow-hidden shadow-xl'>
            <img className='w-full h-full object-cover' src="https://avatars.githubusercontent.com/u/137030701?s=400&u=62c35f2f8dc17b8a2d0f47bb1718e6164c9ee0c8&v=4" alt="Profile-image" />
          </div>
          <div className='flex flex-col items-center rounded justify-center text-gray-500'>
            <h1 className='text-xl font-bold my-2 mt-0 text-black'>Ashyam Malik</h1>
            <p>ashyammalik07@gmail.com</p>
            <p className='mb-2'>844595xxxx</p>
            <p>Chandigarh , India</p>
          </div>
        </div>
        <div className='col-span-11'>
        <div className='gap-8'>
          <span className='font-bold mb-20 px-2'>Monday, 30 June </span>
          <h1 className='text-2xl mt-3 px-2 text-blue-900 font-bold'>Good Morning, Ashyam!👋</h1>
        </div>
        <div className='h-96 rounded-2xl bg-white md:col-span-11 border border-gray-200 shadow-lg mt-7 p-1'>
          <div className='bg-gray-100 flex mx-5 mt-4 p-2 rounded-lg justify-between'>
            <div className='flex gap-4'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
            </svg>
            <p className='font-medium'>Monday, 30 June 2025</p>
            <div className='flex justify-center items-center text-gray-600'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
            </svg>
            </div>

            </div>
            <div className='flex gap-3 justify-center items-center text-gray-500'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>
        <div className='w-126 h-67 mx-5 mt-7'>
        <div className='border-b-2 border-gray-200 h-15 pb-2'>
           <div className='flex h-13'>
             <span className='flex flex-col gap-1 pl-2 pr-3 border-r-2 border-green-400'>
              <span className='font-medium text-xl pl-1'>11:30 AM</span>
              <span className='font-normal pl-1 text-gray-500'>11:30 AM</span>
            </span>
            <span className='flex flex-col gap-1 pl-2'>
              <div className='flex gap-3'>
              <span className='text-gray-500'>Live</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-500">
              <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
              </svg>
              </div>
              <div className='font-medium text-xl '>UX Webinar</div>
            </span>
           </div>
        </div>
        <div className='border-b-2 border-gray-200 h-15 mt-3 pb-2'>
           <div className='flex h-13'>
             <span className='flex flex-col gap-1 pl-2 pr-3 border-r-2 border-green-400'>
              <span className='font-medium text-xl pl-1'>11:30 AM</span>
              <span className='font-normal pl-1 text-gray-500'>11:30 AM</span>
            </span>
            <span className='flex flex-col gap-1 pl-2'>
              <div className='flex gap-3'>
              <span className='text-gray-500'>Upcoming</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-blue-400">
              <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
              </svg>
              </div>
              <div className='font-medium text-xl '>My first Webinar</div>
            </span>
           </div>
        </div>
        <div className='border-b-2 border-gray-200 h-15 mt-3 pb-2'>
           <div className='flex h-13'>
             <span className='flex flex-col gap-1 pl-2 pr-3 border-r-2 border-green-400'>
              <span className='font-medium text-xl pl-1'>11:30 AM</span>
              <span className='font-normal pl-1 text-gray-500'>11:30 AM</span>
            </span>
            <span className='flex flex-col gap-1 pl-2'>
              <div className='flex gap-3'>
              <span className='text-gray-500'>Upcoming</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-blue-400">
              <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
              </svg>
              </div>
              <div className='font-medium text-xl '>Important Webinar</div>
            </span>
           </div>
        </div>
        <div className='h-15 mt-3 pb-2'>
           <div className='flex h-13'>
             <span className='flex flex-col gap-1 pl-2 pr-3 border-r-2 border-green-400'>
              <span className='font-medium text-xl pl-1'>11:30 AM</span>
              <span className='font-normal pl-1 text-gray-500'>11:30 AM</span>
            </span>
            <span className='flex flex-col gap-1 pl-2'>
              <div className='flex gap-3'>
              <span className='text-gray-500'>Upcoming</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-blue-400">
              <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
              </svg>
              </div>
              <div className='font-medium text-xl '>Webinar 1</div>
            </span>
           </div>
        </div>
        </div>

        </div>
      </div>
        
      <div className='h-62 rounded-2xl mt-24 border-1 border-gray-200 md:col-span-6 shadow-lg col-span-11'>
        <div className='flex justify-between'>
          <span className='flex flex-col gap-2'>
            <div className='w-12 h-12 bg-green-400 rounded-lg flex justify-center items-center mt-8 ml-13'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
              </svg>
            </div>
            <p className='font-semibold text-xs ml-5'>Schedule a webinar</p>

          </span>
          <div className='flex flex-col gap-2 items-center mr-10'>
         <div className='w-12 h-12 bg-green-400 rounded-lg flex justify-center items-center mt-8'>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
         <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
         </svg>

        </div>
        <p className='font-semibold text-xs text-center'>Join a webinar</p>
         </div>

        </div>
           <div className='flex flex-col gap-2 items-center justify-self-start mt-4 ml-6.5'>
         <div className='w-12 h-12 bg-green-400 rounded-lg flex justify-center items-center mt-6'>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
         <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625Zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5A.375.375 0 0 0 3 5.625Zm16.125-.375a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0 0 21 7.125v-1.5a.375.375 0 0 0-.375-.375h-1.5ZM21 9.375A.375.375 0 0 0 20.625 9h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5ZM4.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5ZM3.375 15h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h1.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 4.875 9h-1.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Zm4.125 0a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z" clipRule="evenodd" />
         </svg>
        </div>
        <p className='font-semibold text-xs text-center'>Open Recordings</p>
         </div>


      </div>

      </div>

  </div>
}

export default App
