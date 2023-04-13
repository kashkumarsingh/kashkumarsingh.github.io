interface MarqueeProps {
    heading1: string;
    heading2: string;
    list1: string[];
    list2: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ heading1, heading2, list1, list2 }) => {
    return (
        <section className="marquee" id="marquee">
            <div className="container mx-auto px-4 marquee__container">
                <div className="marquee__inner">
                    <div className="marquees marquee__tools marquees--tools">
                        <h6 className="marquee__heading">{heading1}</h6>
                        <div className="marquee__list">
                            {list1.map((item, index) => (<span key={index}>{item}</span>))}
                        </div>
                    </div>
                    <div className="marquees marquee__skills marquees--skills">
                        <h6 className="marquee__heading">{heading2}</h6>
                        <div className="marquee__list">
                            {list2.map((item, index) => (<span key={index}>{item}</span>))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marquee;

// usage
{/* 
  const tools = ['Figma', 'Adobe XD', 'PhotoShop', 'InVision', 'Axure', 'Sketch', 'Miro', 'Whimsical', 'Balsamiq'];
  const skills = [
    'User-centered design',
    'User research',
    'Information architecture',
    'Wireframing',
    'Prototyping',
    'Visual Design',
    'Design System',
    'Front-end development',
    'Collaboration',
    'Communication',
    'Problem-solving'
  ];


<Marquee heading1="UI/UX Tools that I've worked:" heading2="UI/UX Skills:" list1={tools} list2={skills} /> 

*/}