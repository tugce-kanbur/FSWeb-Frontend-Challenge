import React from 'react';
import { contactData } from "../data/data";

function Footer() {
    return (
        <section className="w-full max-w-[1440px] h-[454px] bg-[#F9F9F9] dark:bg-[#252128] flex justify-center items-center">
            <div className="w-[483px] h-[290px] flex flex-col items-center gap-6 text-center">

                <h3 className="text-[48px] font-bold leading-[72px] text-[#4731D3] font-Inter dark:text-[#8F88FF]">
                    {contactData.title}
                </h3>


                <p className="text-[24px] font-normal leading-[150%] text-[#120B39] max-w-[448px] font-Inter dark:text-[#FFFFFF]">
                    {contactData.description}
                </p>


                <a
                    href={`mailto:${contactData.email}`}
                    className="text-[20px] font-medium underline text-[#4731D3] tracking-[5%] font-Inter dark:text-[#8F88FF]"
                >
                    {contactData.email}
                </a>


                <div className="flex gap-6 h-[35px]">
                    {contactData.icons.map((icon) => (
                        <a key={icon.id} href={icon.link} target="_blank" rel="noreferrer">
                            <img src={icon.icon} alt={icon.name} className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Footer;
