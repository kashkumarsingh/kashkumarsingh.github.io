import Link from "next/link";
import Button from "./Button";
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLink from "./NavLink";
import { useState, useRef, useEffect } from 'react';

const links = [
    { href: 'about', label: 'About' },
    { href: 'works', label: 'Projects' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!menuRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuRef]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-4 right-0 left-0  w-full px-2 2xl:px-16 z-[100] header header--home" id="header" ref={menuRef}>
            <div className="container mx-auto">
                <div className="header__inner">
                    <nav className="flex justify-between items-center shadow-xl  bg-black-rgba border-custom rounded-full px-4 py-4 md:px-8 md:py-7 navbar">
                        <div className="navbar__brand flex justify-between items-center w-full ">
                            <Link href="/" className="font-sans text-4xl text-white navbar__logo">KS</Link>
                            <Button className="block md:hidden text-white focus:outline-none " onClick={toggleMenu} disabled={false}>
                                {isOpen ? <FaTimes /> : <FaBars />}
                            </Button>
                        </div>
                        {/* brand */}
                        <div className={`md:flex items-center navbar__collapse ${isOpen ? 'absolute w-[75%]  top-[100%] left-[12%] flex flex-col shadow-xl px-2 py-7 bg-black-rgba border border-solid border-white rounded-3xl  transition-all duration-500 ease-in' : 'hidden relative w-auto top-0 left-0'}`} id="navbar__collapse">
                            <NavLink links={links} className={`${isOpen ? 'w-full flex flex-col navbar__nav mb-4 text-center' : 'md:flex justify-between items-center navbar__nav'}`} />
                            {/* <div className="buttons">
                                <Button className={`uppercase btn btn-primary ml-4 ${isOpen ? 'w-full ml-0' : ''}`} disabled={false}>
                                    <Link href='/assets/pdfs/KashkumarSingh_uiux.pdf' target="_blank" rel="noopener noreferrer">Resume</Link>
                                </Button>
                            </div> */}
                        </div>
                        {/* Collapsible menu */}
                        {/* hidden md:flex justify-between items-center navbar__collapse */}
                    </nav>
                </div>
            </div>
        </header>
    )
}
