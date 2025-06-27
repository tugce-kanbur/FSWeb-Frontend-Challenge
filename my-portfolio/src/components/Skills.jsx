import React from "react";
import { skillsData, skillsTitle } from "../data/data";
import { useLanguage } from "../context/LanguageContext";

function Skills() {
    const { language } = useLanguage();
    const leftSkills = skillsData.slice(0, 3);
    const rightSkills = skillsData.slice(3);

    return (
        <section className="w-[1440px] pt-[120px] pb-[120px] px-[239px] dark:bg-[#252128]">
            <div className="max-w-[960px] mx-auto flex flex-col gap-10">
                <h2 className="text-[48px] font-bold text-[#4731D3] dark:text-secondary">
                    {skillsTitle[language]}
                </h2>
                <div className="flex w-[960px] h-[430px] justify-between">
                    {[leftSkills, rightSkills].map((group, i) => (
                        <div key={i} className="flex flex-col justify-between w-[290px] h-full">
                            {group.map((item) => (
                                <div key={item.id} className="flex items-center gap-6">
                                    <img src={item.icon} alt={item.alt} className="w-[110px] h-[110px]" />
                                    <span className="text-[#777777] text-[20px] font-medium dark:text-white">
                                        {item.title[language]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
