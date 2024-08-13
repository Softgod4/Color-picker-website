import { FC, useRef, useState } from 'react';
import './MainContent.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CopyColor from '../copyColor/CopyColor';
import ColorWheel from '../colorWheel/ColorWheel';
import useAsideStore from '../../store/store';

interface MainContentProps {}

gsap.registerPlugin(useGSAP);

const MainContent: FC<MainContentProps> = ({}) => {
    const [textChange, setTextChange] = useState(false);
    const text = useRef<HTMLHeadingElement | null>(null);
    const { asideShow } = useAsideStore();

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
        <div className={asideShow ? 'flex justify-end blur-md brightness-75' : 'flex justify-end'}>
            <div className="container mx-auto w-4/5 p-6">
                <header className="flex justify-between items-center">
                    <h1 className="text-white font-semibold text-5xl">Make new color</h1>
                    <div className="about flex items-center justify-between">
                        <article
                            onMouseEnter={() => handleMouseEnter()}
                            onMouseLeave={() => handleMouseLeave()}>
                            <h2 ref={text}>{textChange ? "It's me" : 'Softgod'}</h2>
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
                </header>

                <main className="flex justify-between items-start mt-14">
                    <section>
                        <CopyColor />
                    </section>
                    <section>
                        <ColorWheel />
                    </section>
                </main>
            </div>
        </div>
    );
};

export default MainContent;
