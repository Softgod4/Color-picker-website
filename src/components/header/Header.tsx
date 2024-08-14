import { FC, useRef, useState } from 'react';
import './Header.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useAsideStore from '../../store/store';

interface HeaderProps {}

gsap.registerPlugin(useGSAP);

const Header: FC<HeaderProps> = ({}) => {
    const [textChange, setTextChange] = useState(false);
    const text = useRef<HTMLHeadingElement | null>(null);

    const handleMouseEnter = () => {
        gsap.to(text.current, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                setTextChange(true);
                gsap.to(text.current, { opacity: 1, duration: 0.2 });
            }
        });
    };

    const handleMouseLeave = () => {
        gsap.to(text.current, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                setTextChange(false);
                gsap.to(text.current, { opacity: 1, duration: 0.2 });
            }
        });
    };

    return (
        <div className="about flex items-center justify-end p-2">
            <article
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}>
                <h2 className="text-end" ref={text}>
                    {textChange ? "It's me" : 'Softgod'}
                </h2>
                <p>Frontend Developer</p>
            </article>

            <LazyLoadImage
                src="/public/images/mainContent/avatar.jpeg"
                alt="avatar"
                width="60px"
                height="60px"
                wrapperProps={{
                    style: { transitionDelay: '1s' }
                }}
            />
        </div>
    );
};

export default Header;
