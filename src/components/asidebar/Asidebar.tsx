import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Asidebar.scss';

interface AsidebarProps {}

gsap.registerPlugin(useGSAP);

const Asidebar: React.FC<AsidebarProps> = ({}) => {
    const aside = useRef<HTMLElement | null>(null);
    const blocks = useRef<HTMLDivElement | null>(null);

    const handleMouseEnter = () => {
        gsap.to(aside.current, { left: 0, duration: 0.5, ease: 'power2.out' });
        gsap.to(blocks.current, { marginTop: '32px', duration: 0.5, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
        gsap.to(aside.current, { left: '-210px', duration: 0.3, ease: 'power2.out' });
        gsap.to(blocks.current, { marginTop: '0px', duration: 0.3, ease: 'power2.out' });
    };

    return (
        <aside
            ref={aside}
            className="fixed h-svh top-0 flex flex-col justify-start items-center rounded-xl"
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}>
            <article className="flex mb-10 mt-5 select-none justify-between w-full items-center">
                <p className="ml-4 text-3xl text-white leading-5">
                    React
                    <br />
                    <span className="text-2xl">color picker</span>
                </p>
                <img src="/public/images/asidebar/logo.svg" alt="logo" />
            </article>
            <div className="blocks" ref={blocks}>
                <button className="blocks-item flex justify-start items-center my-5">
                    <img
                        src="/public/images/asidebar/blocks/create-nev-color.svg"
                        alt="create nev color"
                    />
                    <p className="ml-4">Create new Color</p>
                </button>
                <button className="blocks-item flex justify-start items-center my-5">
                    <img src="/public/images/asidebar/blocks/explore.svg" alt="explore" />
                    <p className="ml-4">Explore</p>
                </button>
                <button className="blocks-item flex justify-start items-center my-5">
                    <img
                        src="/public/images/asidebar/blocks/Your favorite.svg"
                        alt="Your favorite"
                    />
                    <p className="ml-4">Your favorite</p>
                </button>
                <button className="blocks-item flex justify-start items-center my-5">
                    <img
                        src="/public/images/asidebar/blocks/Import from image.svg"
                        alt="Import from Image"
                    />
                    <p className="ml-4">Import from Image</p>
                </button>
            </div>
            <div className="place flex justify-center flex-col items-start mt-12">
                <article className="flex my-2">
                    <img src="/public/images/asidebar/dots.svg" alt="dots" />
                    <a href="https://discord.com" className="ml-4 text-description text-base">
                        Join my discord
                    </a>
                </article>
                <article className="flex my-2">
                    <img src="/public/images/asidebar/dots.svg" alt="dots" />
                    <a href="https://discord.com" className="ml-4 text-description text-base">
                        Subscribe to my youtube
                    </a>
                </article>
                <article className="flex my-2">
                    <img src="/public/images/asidebar/dots.svg" alt="dots" />
                    <a href="https://discord.com" className="ml-4 text-description text-base">
                        And using this awesome site :3
                    </a>
                </article>
                <button></button>
            </div>
            <div className="input flex">
                <img src="/public/images/asidebar/username.svg" alt="username" className="mr-4" />
                <input type="text" placeholder="@Username" />
            </div>
        </aside>
    );
};

export default Asidebar;
