import { FC } from 'react';
import './CopyColor.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Cards from './Cards';
import useAsideStore from '../../store/store';

interface CopyColorProps {}

gsap.registerPlugin(useGSAP);

const CopyColor: FC<CopyColorProps> = ({}) => {
    const { asideShow } = useAsideStore();
    const handleColorSelect = (index: number) => {
        gsap.to(`.copy-block__item:nth-child(${index + 1})`, {
            scale: 1.15,
            duration: 0.15,
            yoyo: true,
            repeat: 1,
            overwrite: true
        });
    };

    return (
        <div className="copy-block">
            <main className="container flex justify-center items-start">
                {Cards.map((data, index) => {
                    return (
                        <button
                            className="copy-block__item flex items-end justify-center"
                            key={index}
                            onClick={() => handleColorSelect(index)}
                            tabIndex={asideShow ? -1 : 0}
                            style={{
                                backgroundColor: data.color
                            }}>
                            <p>{data.color}</p>
                        </button>
                    );
                })}
            </main>
            <footer></footer>
        </div>
    );
};

export default CopyColor;
