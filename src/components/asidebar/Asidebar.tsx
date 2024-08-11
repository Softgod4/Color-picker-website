import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Asidebar.scss';
import buttons from './buttons';
import AsideButton from './AsideButton';

interface AsidebarProps {}

gsap.registerPlugin(useGSAP);

const Asidebar: React.FC<AsidebarProps> = ({}) => {
    const aside = useRef<HTMLElement | null>(null);
    const blocks = useRef<HTMLDivElement | null>(null);
    const place = useRef<HTMLDivElement | null>(null);
    const buttonGsap = useRef<HTMLButtonElement | null>(null);

    const handleMouseEnter = () => {
        gsap.to(aside.current, { left: 0, duration: 0.5, ease: 'power2.out' });
        gsap.to(blocks.current, { marginTop: '32px', duration: 0.5, ease: 'power2.out' });
        gsap.to(place.current, { marginTop: '28px', duration: 0.5, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
        gsap.to(aside.current, { left: '-210px', duration: 0.3, ease: 'power2.out' });
        gsap.to(blocks.current, { marginTop: '0px', duration: 0.3, ease: 'power2.out' });
        gsap.to(place.current, { marginTop: '48px', duration: 0.3, ease: 'power2.out' });
    };

    const handleButtonClick = () => {
        gsap.to(buttonGsap.current, {
            rotation: '+=360',
            duration: 1.5,
            ease: 'power3.inOut',
            yoyo: true
        });
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
                {buttons.map((data) => {
                    return (
                        <AsideButton
                            imageSrc={data.src}
                            imageAlt={data.alt}
                            buttonText={data.text}
                        />
                    );
                })}
                <button className="close blocks-item flex justify-center items-center my-5 !bg-blue-standart">
                    <p className="!text-white">Close this bar</p>
                </button>
            </div>
            <div className="place flex justify-center flex-col items-start mt-12" ref={place}>
                <article className="flex my-2">
                    <img src="/public/images/asidebar/dots.svg" alt="dots" />
                    <a href="https://discord.com" className="ml-4 text-description text-base">
                        Join my discord
                    </a>
                </article>
                <article className="flex my-2">
                    <img src="/public/images/asidebar/dots.svg" alt="dots" />
                    <a href="https://youtube.com" className="ml-4 text-description text-base">
                        Subscribe to my youtube
                    </a>
                </article>
                <article className="flex my-2">
                    <img src="/public/images/asidebar/dots.svg" alt="dots" />
                    <a href="https://google.com" className="ml-4 text-description text-base">
                        And using this awesome site :3
                    </a>
                </article>
                <button
                    className="whitespace-nowrap mt-4 relative"
                    ref={buttonGsap}
                    onClick={() => handleButtonClick()}>
                    Animated GSAP
                </button>
            </div>
            <div className="input flex justify-center items-center">
                <img src="/public/images/asidebar/username.svg" alt="username" className="mr-4" />
                <input type="text" placeholder="@Username" />
            </div>
        </aside>
    );
};

export default Asidebar;
