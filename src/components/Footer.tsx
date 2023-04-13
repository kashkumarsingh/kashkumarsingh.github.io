import Link from "next/link";
// import Image from 'next/image'

interface FooterProps {
    year: number;
}

const Footer: React.FC<FooterProps> = ({ year }) => {
    return (
        <footer className="relative bg-[#222] py-4 footer" id="footer">
            <div className="container mx-auto px-4">
                <div className="text-center footer__copyright">
                    <span className="font-sans font-bold text-white">© {year} Designed & Built with ❤️ by <Link className="tracking-wider transition-all duration-500 ease-in-out text-[#FFC857] underline hover:text-[#efd178]" href={`https://www.linkedin.com/in/kashkumar-singh/`} target="_blank" rel="noopener">Kashkumar Singh.</Link></span>
                    {/* using <Image
                        className="relative inline align-sub mx-2 dark:invert"
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={65}
                        height={37}
                        priority
                    /> and <Image
                    className="relative inline align-sub mx-2 dark:invert"
                    src="/tailwind-mark.svg"
                    alt="TailwindCss Logo"
                    width={30}
                    height={37}
                    priority/>  */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;