import React from "react";
import { skillsData, skillsTitle } from "../data/data";
import { useLanguage } from "../context/LanguageContext";

function Skills() {
    const { language } = useLanguage();
    const leftSkills = skillsData.slice(0, 3);
    const rightSkills = skillsData.slice(3);

    return (
        <section className="w-full max-w-[1440px] px-6 md:px-[80px] xl:px-[239px] py-[80px] dark:bg-[#252128] mx-auto font-Inter">

            <div className="hidden md:block">
                <div className="max-w-[960px] mx-auto">
                    <h2 className="text-[48px] font-bold text-[#4731D3] mb-10 dark:text-secondary">
                        {skillsTitle[language]}
                    </h2>

                    <div className="flex justify-between w-full h-[430px]">
                        {[leftSkills, rightSkills].map((group, i) => (
                            <div key={i} className="flex flex-col justify-between">
                                {group.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4">
                                        <img
                                            src={item.icon}
                                            alt={item.alt}
                                            className="w-[100px] h-[100px]"
                                        />
                                        <span className="text-[#777777] text-[20px] font-medium dark:text-white">
                                            {item.title[language]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="block md:hidden">
                <h2 className="text-[32px] font-bold text-[#4731D3] mb-10 dark:text-secondary text-center">
                    {skillsTitle[language]}
                </h2>

                <div className="flex flex-col gap-6 items-start justify-center max-w-[300px] mx-auto">
                    {skillsData.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-6 w-full"
                        >
                            <img
                                src={item.icon}
                                alt={item.alt}
                                className="w-[64px] h-[64px] object-contain"
                            />
                            <span className="text-[#333] text-[18px] font-medium dark:text-white whitespace-nowrap">
                                {item.title[language]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
}


export default Skills;
