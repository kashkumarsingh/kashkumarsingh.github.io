import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
interface NavlinkProps {
     links: {
          href: string;
          label: string;
     }[];
     className?: string;
}

const NavLink = ({ links, className }: NavlinkProps): JSX.Element => {

     const [activeLink, setActiveLink] = useState<string>('');
     const handleClick = (href: string) => {
          setActiveLink(href);
     }
     useEffect(() => {
          const handleScroll = () => {
               const sections = document.querySelectorAll<HTMLElement>('section[id]');
               const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

               sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionBottom = sectionTop + section.clientHeight;

                    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                         setActiveLink(section.getAttribute('id') || '');
                    }
               });
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);
     return (
          <ul className={`${className}`}>
               {links.map(({ href, label }) =>
                    <li key={href} className={`px-4 py-1 border-none rounded-2xl navbar__item ${href === activeLink ? 'active' : ''}`}>
                         <Link to={href} smooth={true} duration={500} className="cursor-pointer font-sans uppercase text-white navbar__link" onClick={() => handleClick(href)}>{label}</Link>
                    </li>
               )}
          </ul>
     );
}
export default NavLink;