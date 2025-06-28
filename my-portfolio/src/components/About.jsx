import React from 'react';
import { profileData } from '../data/data';
import { useLanguage } from '../context/LanguageContext';

function About() {
    const { language } = useLanguage();
    const { about, title, basicInfo } = profileData;

    return (
        <section className="bg-primary dark:bg-[#171043] w-full max-w-[1440px] pt-[50px] pb-[120px] px-[20px] md:px-[60px] lg:px-[150px] xl:px-[239px] text-white font-Inter mx-auto">
            <h2 className="text-[36px] md:text-[48px] font-bold text-secondary mb-12 leading-[100%] tracking-[1%]">
                {title[language]}
            </h2>

            <div className="flex flex-col xl:flex-row items-start gap-[30px] max-w-[960px] mx-auto">

                <div className="bg-primary dark:bg-[#171043] w-full xl:w-[300px] rounded-[10px] p-4">
                    <p className="text-white text-[24px] md:text-[30px] leading-[28px] font-medium mb-5">
                        {basicInfo.sectionTitle[language]}
                    </p>
                    <ul className="space-y-4">
                        {basicInfo.details.map((item, index) => (
                            <li key={index} className="flex justify-between items-start">
                                <span className="w-[100px] text-[#CBF281] text-[16px] font-semibold">
                                    {item.label[language]}
                                </span>
                                <span className="w-[160px] text-white text-[16px] font-normal">
                                    {item.value}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="w-full xl:w-[300px] rounded-[10px] overflow-hidden">
                    <img
                        src={about.image}
                        alt="Çalışma ortamı"
                        className="w-full h-full object-cover rounded-[10px] shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14)] shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12)]"
                    />
                </div>


                <div className="bg-primary dark:bg-[#171043] w-full xl:w-[300px] rounded-[10px] p-4">
                    <p className="text-white text-[24px] md:text-[30px] leading-[100%] font-medium mb-5">
                        {about.title[language]}
                    </p>
                    {about.paragraphs.map((p, i) => (
                        <p key={i} className="text-white text-[16px] md:text-[18px] leading-[140%] font-normal mb-4">
                            {p[language]}
                        </p>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default About;