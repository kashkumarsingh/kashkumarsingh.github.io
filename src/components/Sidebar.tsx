// import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
// import Link from 'next/link';
// import { useState } from 'react';
// import Button from './Button';

// interface LinkProps{
//     href:string;
//     label:string;
// }

// interface SidebarProps{
//     links: LinkProps[];
// }

// const SideBar = ({links}: SidebarProps) =>{
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleSideBar = ()=>{
//         setIsOpen(!isOpen);
//     };

// return (
//     <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
//          <div className="fixed left-0 top-0 w-{75%} sm:w-{60%} md:w-{50%} h-screen bg-{#ededed} p-10 ease-in duration-500">
//            <header className='bg-gray-800 text-white py-4 px-4 flex items-center justify-between'>
//            <h1 className='text-lg font-bold'>KS</h1>
//             <Button className='block sm:hidden text-white focus:outline-none' onClick={toggleSideBar}>
//                 {isOpen ? <AiOutlineClose/> : <AiOutlineMenu/>}
//             </Button>
//            </header>
//          </div>
//     </div>

// );
// } 