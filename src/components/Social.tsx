import { IconType } from "react-icons";

interface SocialLinkProps{
     href:string;
     icon:IconType;
}

interface SocialProps{
    links:SocialLinkProps[];
}

const Social:React.FC<SocialProps> = ({links})=>{
    return(
        <ul className="max-w-[768px] mx-auto social-links flex justify-center items-center text-center mb-8">
            {links.map(({href, icon: Icon}) => (
                 <li key={href} className="px-4">
                    <a href={href} className="social-link">
                        <Icon size={40}/>
                    </a>
                 </li>
            ))}
        </ul>
    );
};
export default Social;