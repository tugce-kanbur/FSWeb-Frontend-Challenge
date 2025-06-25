import React from 'react';
import { profileData } from '../data/data';

function About() {
    const { about, title, basicInfo } = profileData;

    return (
        <section className="bg-primary dark:bg-[#171043] w-[1440px] h-[552px] pt-[50px] pb-[120px] px-[239px] text-white font-Inter">

            <h2 className="text-[48px] font-bold text-secondary mb-12 leading-[100%] tracking-[1%]">
                {title}
            </h2>


            <div className=" items-start w-[960px] h-[290.68px] flex gap-[30px]">

                <div className="bg-primary dark:bg-[#171043] w-[300px] h-[290.68px] rounded-[10px] p-4">
                    <p className="w-[300px] text-white text-[30px] leading-[28px] font-medium font-Inter mb-5">{basicInfo.sectionTitle}</p>
                    <ul className="space-y-4">
                        {basicInfo.details.map((item, index) => (
                            <li key={index} className="flex w-[300px] justify-between items-start">
                                <span className="w-[101px] text-[#CBF281] text-[16px] leading-[150%] tracking-[0.01em] font-semibold font-Inter">
                                    {item.label}
                                </span>
                                <span className="w-[189px] text-white text-[16px] leading-[150%] tracking-[0.01em] font-normal font-Inter">
                                    {item.value}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="w-[300px] h-[290.68px] rounded-[10px] overflow-hidden">
                    <img
                        src={about.image}
                        alt="Çalışma ortamı"
                        className="w-[300px] h-[290.68px] rounded-[10px] shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14)] 
             shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12)]"
                    />
                </div>


                <div className="bg-primary dark:bg-[#171043] w-[300px] h-[290.68px] rounded-[10px] p-4">
                    <p className="w-[300px] text-white text-[30px] leading-[100%] font-medium font-Inter mb-5">{about.title}</p>
                    {about.paragraphs.map((p, i) => (
                        <p key={i} className="w-[300px] text-white text-[18px] leading-[140%] font-normal font-Inter mb-4">{p}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
