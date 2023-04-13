import Button from "./Button";
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Social from "./Social";
import { useEffect, useRef } from 'react';
import gsap, { Quint } from 'gsap';


interface HeroProps {
    id: string;
}
const socialLinks = [
    { href: 'https://www.facebook.com/', icon: FaFacebook },
    { href: 'https://twitter.com/', icon: FaTwitter },
    { href: 'https://www.instagram.com/', icon: FaInstagram }
];


const Hero: React.FC<HeroProps> = ({ id }) => {
    const elementsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elements = elementsRef.current?.querySelectorAll('.hero__content > *');
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (!isMobile && elements) {
            gsap.fromTo(
                elements,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: Quint.easeOut,
                    stagger: {
                        each: 0.1,
                        from: 'start',
                        grid: 'auto',
                    },
                    delay: (i) => i * .2
                }
            );
        }
    }, []);

    return (
        <section className="sm:h-auto md:h-screen relative overflow-hidden flex justify-center items-center z-0 text-center hero " id={id}>
            <div className="container mx-auto px-4">
                <div className="hero__content sm:py-8 md:py-0" ref={elementsRef}>
                    <h1 id="text-animation" className="mb-8 hero__heading sm:text-4xl md:text-[4rem] ">
                        Hi, I&apos;m Kashkumar Singh
                    </h1>
                    <h2 id="text-animation-2" className="mb-8 hero__subheading sm:text-2xl md:text-[2.5rem]">
                        A UI/UX Designer
                    </h2>
                    <p className="font-bold sm:max-w-[100%] md:max-w-[67.777%] w-full mx-auto  mb-4 hero__description">
                        Passionate about creating functional, accessible, and responsive
                        digital experiences that not only drive engagement and user satisfaction, but also meet the
                        highest standards of usability and inclusivity.
                    </p>
                    <Social links={socialLinks} />
                    <Link to="works" smooth={true} duration={500}> <Button className="btn btn-secondary section-scroll-link hero__cta" data-scroll>Projects</Button></Link>
                </div>
            </div>
        </section>
    )
}
export default Hero;