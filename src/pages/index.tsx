
import Head from "next/head";
import Hero from "@/components/Hero";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import WorkItem from "@/components/WorkItem";

export default function Home() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 25000,
    cssEase: "linear",
    variableWidth: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: false,
    touchMove: false,
    arrows: false,
    infinite: true,
  };
  const labels = ['UI/UX Designer'];
  return (
    <>
      <Head>
        <title>Kashkumar Singh - UI/UX Designer Portfolio</title>
      </Head>
      <main className="site-main">
        <Hero id="about" />
        <section
          className="relative bg-[#222] py-4 overflow-hidden whitespace-nowrap w-full marquee"
          id="marquee"
        >
          <div className="container  marquee__container">
            <Slider {...settings} className="marquee__inner">
              <div className=" mx-4 marquees marquee__tools marquee-tools">
                <h6 className="inline-block text-[#FFC857] marquee__heading">
                  UI/UX Tools that I&apos;ve worked:
                </h6>
                <p className="inline-block text-white marquee__list">
                  <span className="relative px-4">Figma</span>
                  <span className="relative px-4">Adobe XD</span>
                  <span className="relative px-4">PhotoShop</span>
                  <span className="relative px-4">InVision</span>
                  <span className="relative px-4">Axure</span>
                  <span className="relative px-4">Sketch</span>
                  <span className="relative px-4">Miro</span>
                  <span className="relative px-4">Whimsical</span>
                  <span className="relative px-4">Balsamiq</span>
                </p>
              </div>
              <div className=" mx-4 marquees marquee__skills marquee-skills">
                <h6 className="inline-block text-[#FFC857] marquee__heading">
                  UI/UX Skills:
                </h6>
                <p className="inline-block text-white  marquee__list">
                  <span className="relative px-4">User-centered design</span>
                  <span className="relative px-4">User research</span>
                  <span className="relative px-4">
                    Information architecture
                  </span>
                  <span className="relative px-4"> Wire Framing</span>
                  <span className="relative px-4">Prototyping</span>
                  <span className="relative px-4">Visual Design</span>
                  <span className="relative px-4"> Design System</span>
                  <span className="relative px-4"> Front-end development</span>
                  <span className="relative px-4">
                    Collaboration, Communication, and Problem-solving
                  </span>
                </p>
              </div>
            </Slider>
          </div>
        </section>

        <section className="works py-24" id="works">
          <div className="container mx-auto px-4">
            <div className="sm:max-w-full md:max-w-[67.777%] mx-auto text-center mb-8 section-title">
              <svg
                className="mx-auto mb-4"
                width="156"
                height="114"
                viewBox="0 0 156 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_827_1652)">
                  <path
                    d="M24.9193 55.7907C24.9193 61.6871 27.4718 66.543 31.3004 70.7051C33.7369 73.3642 36.6373 75.5609 39.3059 77.9888C40.002 78.5669 40.8141 79.0295 41.3943 79.7231C43.0186 81.5729 42.5544 83.8852 40.3501 85.0414C39.654 85.3883 38.9579 85.5038 38.2616 85.8506C30.0241 89.2036 23.9911 94.6375 22.0187 103.771C21.6707 105.274 21.3226 106.662 20.9745 108.049C20.7425 108.974 20.3944 110.014 20.0463 110.939C19.5823 112.211 18.6541 113.136 17.1459 113.02C15.6376 112.905 14.8255 111.98 14.4774 110.592C14.0133 108.858 13.6652 107.008 13.2012 105.158C12.0409 100.418 10.8807 95.678 8.56033 91.2846C7.05205 88.2787 5.07969 85.7351 2.17918 83.7696C-0.605327 81.9197 -0.721348 79.6074 1.83111 77.4108C3.91948 75.6765 6.35593 74.1736 8.56033 72.555C13.7813 68.7396 16.7978 63.6526 17.2619 57.0625C17.494 56.022 17.494 54.6347 17.7259 53.2472C17.958 50.588 18.3061 50.2412 20.6265 50.1256C22.9469 49.8944 24.2232 50.8193 24.6872 52.9003C24.9193 53.8253 24.8033 54.8658 24.9193 55.7907Z"
                    fill="#F7D046"
                  />
                  <path
                    d="M123.917 73.2561C123.561 70.1848 123.443 66.9954 122.969 64.0423C122.139 59.081 119.768 55.1829 115.264 52.7022C111.47 50.6941 107.677 48.9222 103.765 47.0323C102.58 46.4415 101.276 45.9691 100.091 45.3784C99.1422 44.906 98.5494 44.0791 98.9051 43.016C99.1422 42.3073 99.972 41.8347 100.565 41.2442C100.683 41.126 100.92 41.126 101.157 41.126C110.522 39.236 116.805 33.2115 121.072 25.179C124.865 18.2096 127.947 10.8859 131.385 3.79838C131.859 2.73524 132.333 1.67211 132.926 0.845236C133.282 0.372735 134.23 -0.0997665 134.823 0.0183587C135.415 0.136484 136.127 0.845236 136.245 1.55399C136.482 2.26274 136.364 3.20774 136.245 4.03462C136.008 5.68838 135.771 7.34212 135.415 9.11401C133.993 16.0834 135.415 22.8166 136.838 29.5497C137.549 32.5028 139.327 34.6291 141.935 36.0466C145.254 37.8185 148.692 38.9997 152.366 39.8266C153.552 40.0629 155.211 40.0629 155.33 41.8347C155.449 43.7247 153.789 44.1973 152.485 44.5515C146.795 45.9691 142.765 49.7491 139.09 54.1198C135.297 58.6084 132.333 63.6878 130.437 69.2398C129.37 72.3111 128.422 75.3823 127.355 78.3354C127.118 78.926 127.118 79.5167 126.762 79.871C126.288 80.4617 125.458 81.2886 124.984 81.1704C124.391 81.0523 123.917 80.1073 123.561 79.3986C123.324 78.926 123.443 78.3354 123.443 77.7449C123.443 76.2092 123.443 74.6736 123.443 73.2561C123.68 73.2561 123.798 73.2561 123.917 73.2561Z"
                    fill="#EA552B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_827_1652">
                    <rect width="156" height="114" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="mb-4 section-title__heading">Projects</h1>
              <p className="font-bold section-title__description">
                From wire frames to prototypes, I use a range of design tools
                and techniques to ensure each project is both visually appealing
                and functional. By exploring the case studies, visitors can gain
                insight into my design process and problem-solving skills,
                demonstrating my ability to deliver innovative design solutions.
              </p>
            </div>
            {/* Section-title */}
            <div className="relative flex flex-col justify-center items-start flex-nowrap work-items">
              <WorkItem
                bgClassName="work-item-bg-1"
                labels={labels}
                title="UX Design for Pediatric Healthcare: App & Web App"
                description="ClinicQuest is a app and website designed to improve 
                            the pediatric clinic experience for children aged 6-21 years old who 
                            visit the hospital for infusion, chemotherapy, and routine checkups."
                linkText="View Case Study" linkUrl="https://www.example.com/"
              />
              <WorkItem
                bgClassName="work-item-bg-2"
                labels={labels}
                title="ProShine Window Cleaning Website Redesign"
                description="ProShine Window Cleaning is a cleaning service company based in Meridian, Idaho. 
                            The company provides commercial and residential cleaning services to customers in the local area."
                linkText="View Case Study" linkUrl="https://www.example2.com/"
              />
              <WorkItem
                bgClassName="work-item-bg-3"
                labels={labels}
                title="Redwing-VFX-Studio Website Design"
                description="Redwing-VFX-Studio was a new company in the market and aimed to attract clients through their landing page by showcasing their services and existing portfolio, as well as attracting potential candidates interested in joining the company."
                linkText="View Case Study" linkUrl="https://www.example3.com/"
              />
              <WorkItem
                bgClassName="work-item-bg-4"
                labels={labels}
                title="Revitalized SuAyu E-commerce Website(B2B & B2C)"
                description="SuAyu is an Indian healthcare company that specializes in developing innovative healthcare solutions using natural sources."
                linkText="View Case Study" linkUrl="https://www.example4.com/"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}