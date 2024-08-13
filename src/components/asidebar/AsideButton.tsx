import React, { FC } from 'react';
import useAsideStore from '../../store/store';

interface AsideButtonProps {
    imageSrc: string | undefined;
    imageAlt: string;
    buttonText: string;
}

const AsideButton: FC<AsideButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    imageSrc,
    imageAlt,
    buttonText,
    ...props
}) => {
    const { asideShow } = useAsideStore();

    return (
        <button
            {...props}
            className="blocks-item flex justify-start items-center my-5"
            style={asideShow ? {} : { userSelect: 'none', cursor: 'default' }}
            tabIndex={asideShow ? 0 : -1}>
            <img src={imageSrc} alt={imageAlt} />
            <p className="ml-4">{buttonText}</p>
        </button>
    );
};

export default AsideButton;
