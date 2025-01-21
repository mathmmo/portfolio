import React from 'react'
import { Timeline } from './ui/Timeline'
import { LuMedal } from "react-icons/lu";

const Experience = () => {
  const exp = [
    {
      title: "2021 - 2025",
      content: (
        <div>
          <div className='flex items-center justify-start gap-4 pb-8'>
            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M46.4874 0.0546875C47.0071 1.578 48.4499 1.226 49.5197 1.37772C65.6167 3.7082 76.994 12.2108 83.5844 26.9523C84.2752 28.4999 84.7154 30.1932 85.0394 31.8621C86.0909 37.3303 83.3521 41.6271 77.9355 43.199C73.6193 44.4492 68.7774 42.0519 66.8883 37.3363C64.9748 32.5661 62.5171 28.3057 58.4333 24.9921C55.3459 22.4917 52.0263 20.6952 48.0219 20.4585C46.249 20.3493 46.1573 19.8031 46.6097 18.2312C48.1503 12.9148 47.3739 7.8351 44.3538 3.17414C43.7058 2.17276 43.8403 1.06214 43.4307 0.0546875H46.4874Z" fill="#B2CF4A"/>
              <path d="M40.9914 87.9453C40.0866 86.7011 38.6499 86.9924 37.415 86.7739C21.2936 83.9822 10.0141 75.1519 3.77828 60.1373C2.18265 56.3017 1.60186 52.2537 4.16955 48.5395C8.63854 42.0699 18.0351 43.0653 21.2019 50.4694C23.1826 55.1061 25.5364 59.3179 29.4185 62.6377C32.4263 65.2109 35.7643 67.0377 39.7687 67.335C41.5905 67.4686 42.2141 67.8752 41.6272 69.8719C40.1049 75.073 40.8691 80.0738 43.773 84.6741C44.4822 85.8029 44.8735 86.7739 44.0482 87.9392H40.9914V87.9453Z" fill="#3D88C7"/>
              <path d="M0.0488281 41.882C1.32044 40.735 0.959745 39.1207 1.19206 37.7066C3.47852 23.8633 10.3257 13.0787 22.6811 5.95376C24.882 4.68534 27.1624 3.58686 29.6506 2.96783C36.1309 1.35348 40.7344 3.52617 42.6785 9.1339C44.5126 14.426 41.8654 19.5179 35.9536 21.8544C32.8908 23.0622 30.0969 24.6219 27.6942 26.8856C23.751 30.6059 20.8287 34.8542 20.3335 40.4012C20.2113 41.7971 20.1012 42.6103 18.1999 42.0155C12.8445 40.3587 7.72743 41.1659 3.0628 44.2732C1.94402 45.0197 1.05756 45.0075 0.0488281 44.3096V41.8881V41.882Z" fill="#17ADD1"/>
              <path d="M54.6 85.621C49.9109 85.6331 46.6646 83.1509 45.2463 78.4717C44.0174 74.4116 45.6008 69.963 49.2323 67.6265C50.3266 66.9225 51.5921 66.4673 52.7842 65.9272C60.848 62.2554 66.4235 56.5992 67.7318 47.5382C67.8847 46.4822 67.579 45.3352 69.5598 45.9663C74.9947 47.696 80.1973 46.9556 84.9781 43.7876C86.7511 42.6102 87.5275 42.8833 87.3807 45.141C86.2864 62.1583 77.917 76.8149 61.0987 84.1765C59.0384 85.0748 56.8803 85.6331 54.6061 85.627L54.6 85.621Z" fill="#183E5E"/>
            </svg>
            
            <p className='text-lg md:text-4xl font-bold'>ProV - Technical Leader</p>
          </div>
          <div className='pb-4'>
            <ul className='list-disc list-inside'>
              <li className='flex flex-row pb-4'>
                <span className='text-lg'>CEO Awards Winner of 2023.</span>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
              </li>
              <li>Define solution architecture.</li>
              <li>Estimate effort.</li>
              <li>Responsible for the Agile framework setup and maintenance.</li>
              <li>Develop primarily more complex items.</li>
              <li>Instance upgrade.</li>
              <li>Monitor and support the squad technically.</li>
              <li>Guide and support the professional development of the squad's developers.</li>
              <li>Support the Engagement Manager with development resources.</li>
              <li>Reviewed code changes from developers to ensure accuracy and compliance with standards.</li>
              <li>Study new products and features, and keep up to date.</li>
              <li>Connected with clients to identify needs and provide helpful solutions.</li>
            </ul>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <div className='flex items-center justify-start gap-4 pb-8'>
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.2" baseProfile="tiny-ps" viewBox="0 0 1649 1740" width="60" height="64">
              <title>Accenture-svg</title>
              <g id="Layer">
                <path id="Layer" fill='#A100FF' d="M0.25 1228L962.68 869.83L0.25 501.43L0.25 0L1648.67 665.17L1648.67 1074.5L0.25 1739.66L0.25 1228Z"/>
              </g>
            </svg>
            <p className='text-lg md:text-4xl font-bold'>Accenture  -  Senior Developer</p>
          </div>
          <div className='pb-4'>
            <ul className='list-disc list-inside'>
              <li>Estimate effort.</li>
              <li>Technical support to team members.</li>
              <li>Integrated third-party APIs into existing systems for added functionality.</li>
              <li>ITSM.</li>
              <li>Portal.</li>
              <li>CMDB.</li>
              <li>Asset Management.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <div className='flex items-center justify-start gap-4 pb-8'>
            <LuMedal size={60} />
            <p className='text-lg md:text-4xl font-bold'>Alpar Service - Technical Consultant</p>
          </div>
          <div className='pb-4'>
            <ul className='list-disc list-inside'>
              <li>Start in ServiceNow</li>
              <li>Client - Ambev</li>
              <li>Service Portal - "Click Portal"</li>
              <li>Entire stack of ITSM module.</li>
              <li>Dashboards and complex reports.</li>
              <li>Mobile app applet launchers and menus.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <div className='flex items-center justify-start gap-4 pb-8'>
            <img src="./innovare.svg" alt="Innovare" className='w-[100px] h-[100px]' />
            <p className='text-lg md:text-4xl font-bold'>InnovareIT - Jr Developer</p>
          </div>
          <div className='pb-4'>
            <ul className='list-disc list-inside'>
              <li>Develop a HR Portal called HumanFlow in web using the stack Javascript, NodeJS and VueJS.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className='py-20' id='experience'>
        <h1 className='heading'>
          A career built with {' '}
            <span className='text-[#a784f9]'>passion</span>
        </h1>
        <Timeline data={exp} />
    </div>
  )
}

export default Experience