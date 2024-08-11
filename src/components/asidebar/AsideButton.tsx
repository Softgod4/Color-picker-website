import React, { FC } from 'react';

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
    return (
        <button {...props} className="blocks-item flex justify-start items-center my-5">
            <img src={imageSrc} alt={imageAlt} />
            <p className="ml-4">{buttonText}</p>
        </button>
    );
};

export default AsideButton;
