import Link from "next/link";
interface WorkItemProps{
    labels:string[];
    title: string;
    description:string;
    linkUrl: string;
    linkText: string;
    bgClassName:string;
}

const WorkItem:React.FC<WorkItemProps> = ({labels, title, description, linkUrl,linkText, bgClassName}) => {
    return (
        <div className={`sm:h-auto md:h-[460px] relative overflow-hidden w-full flex justify-start  items-center px-12 py-8 border-0 border-transparent rounded-[1rem] work-item mb-4 ${bgClassName}`}>
             <div className="scrollable__content">
                  {labels.map((label,index)=> (
                     <small key={index} className="font-sans font-bold text-white work-item__label">{label}</small>
                  ))}
                  <h3 className="text-white mb-4 work-item__title">{title}</h3>
                  <p className="sm:max-w-[100%] md:max-w-[75%] text-white mb-4 work-item__description">{description}</p>
                  <div className="text-white mb-4 work-item__links">
                    <Link  href={linkUrl} className="w-full text-center  md:w-auto font-sans font-bold btn btn-primary" target="_blank" rel="noopener noreferrer">{linkText}</Link>
                  </div>
             </div>
        </div>
    );
};
export default WorkItem