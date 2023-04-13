import Link from "next/link";

interface WorkItemProps{
    labels:string[];
    title: string;
    description:string;
    links:{url:string; text:string; }[];
    bgClassName:string;
}

const WorkItem:React.FC<WorkItemProps> = ({labels, title, description, links, bgClassName}) => {
    return (
        <div className={`sm:h-auto md:h-[460px] relative overflow-hidden w-full flex justify-start  items-center px-12 py-8 border-0 border-transparent rounded-[1rem] work-item mb-4 ${bgClassName}`}>
             <div className="scrollable__content">
                  {labels.map((label,index)=> (
                     <small key={index} className="font-sans font-bold text-white work-item__label">{label}</small>
                  ))}
                  <h3 className="text-white mb-4 work-item__title">{title}</h3>
                  <p className="sm:max-w-[100%] md:max-w-[75%] text-white mb-4 work-item__description">{description}</p>
                  <div className="text-white mb-4 work-item__links">
                       {links.map((link, index)=>(
                         <Link key={index} href={link.url} className="font-sans font-bold btn btn-primary" target="_blank" rel="noopener">{link.text}</Link>
                       ))}
                  </div>
             </div>
        </div>
    );
};
export default WorkItem

//usage
// const links = [
//     { text: 'View Case Study', url: 'https://example.com' },
//   ];
