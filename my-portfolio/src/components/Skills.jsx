import React from "react";
import { skillsData, skillsTitle } from "../data/data";

function Skills() {
    const leftSkills = skillsData.slice(0, 3);
    const rightSkills = skillsData.slice(3);

    return (
        <section className="w-[1440px] pt-[120px] pb-[120px] px-[239px] dark:bg-[#252128]">
            <div className="max-w-[960px] mx-auto flex gap-[60px]">
                <h2 className="text-[48px] font-bold text-[#4731D3] dark: text-secondary mb-10">{skillsTitle}</h2>

                <div className="flex w-[960px] h-[430px] justify-between">

                    <div className="flex flex-col justify-between w-[290px] h-full">
                        {leftSkills.map((item) => (
                            <div key={item.id} className="flex items-center gap-6">
                                <img
                                    src={item.icon}
                                    alt={item.alt}
                                    className="w-[110px] h-[110px]"
                                />
                                <span className="text-[#777777] text-[20px] font-medium">{item.title}</span>
                            </div>
                        ))}
                    </div>


                    <div className="flex flex-col justify-between w-[290px] h-full">
                        {rightSkills.map((item) => (
                            <div key={item.id} className="flex items-center gap-6">
                                <img
                                    src={item.icon}
                                    alt={item.alt}
                                    className="w-[110px] h-[110px]"
                                />
                                <span className="text-[#777777] text-[20px] font-medium">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

