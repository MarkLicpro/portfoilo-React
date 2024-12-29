"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        Content: (
            <ul className='list-disc pl-5'>
                <li>React</li>
                <li>Php</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        Content: (
            <ul className='list-disc pl-5'>
                <li>
                    Full Stack Developer
                </li>
                <li>
                    Westride
                </li>

            </ul>
        )
    },
    {
        title: "certifications",
        id: "certifications",
        Content: (
            <ul className='list-disc pl-5'>
                <li>
                    Certified Full Stack Developer
                </li>

            </ul>
        )
    },
]


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);

        });
    };

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
                <Image
                    src='/images/about-image.png'
                    alt='com'
                    width={500}
                    height={500}
                />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mt-2 mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        If you are interested in using wordpress or want to design a website, you can ask me at my email..
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{""}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("Education")}
                            active={tab === "Education"}
                        >
                            {" "}
                            Education{""}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8 font font-light text-white'>{TAB_DATA.find((t) => t.id === tab).Content}</div>
                </div>
            </div>
        </section >
    )
}

export default AboutSection