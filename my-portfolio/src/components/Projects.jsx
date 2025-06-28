import React from 'react';
import { projectsHeader, projectsData } from "../data/data";
import { useLanguage } from '../context/LanguageContext';

function Projects() {
    const { language } = useLanguage();

    return (
        <section className="bg-secondary dark:bg-[#1A210B] w-full max-w-[1440px] pt-[50px] pb-[120px] px-6 md:px-[80px] xl:px-[239px] text-white font-Inter mx-auto">
            <h2 className="text-[32px] md:text-[48px] font-bold text-primary dark:text-secondary mb-12 leading-[100%] tracking-[1%]">
                {projectsHeader[language]}
            </h2>

            <div className="space-y-10">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col lg:flex-row w-full max-w-[1000px] h-auto gap-4 bg-white rounded-[12px] overflow-hidden mx-auto"
                    >
                        <img
                            src={project.image}
                            alt={project.title[language]}
                            className="w-full lg:w-[360px] h-[200px] lg:h-[320px] object-cover"
                        />
                        <div className="flex flex-col justify-center p-6 w-full dark:bg-[#2B2727]">
                            <h3 className="text-[18px] md:text-[22px] font-bold text-[#4731D3] mb-3 dark:text-[#C1BAED]">
                                {project.title[language]}
                            </h3>
                            <p className="text-sm text-black mb-4 leading-relaxed dark:text-[#FFFFFF]">
                                {project.description[language]}
                            </p>

                            <div className="flex gap-2 mb-4 flex-wrap">
                                {project.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-primary text-xs px-3 py-1 rounded-full text-white font-medium dark:bg-[#8173DA]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 text-sm font-medium text-[#4731D3] underline dark:text-secondary">
                                <a href={project.links.live} target="_blank" rel="noreferrer">
                                    {language === "en" ? "View Site" : "Siteyi Görüntüle"}
                                </a>
                                <a href={project.links.github} target="_blank" rel="noreferrer">
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
