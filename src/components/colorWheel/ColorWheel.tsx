import React, { FC } from 'react';
import './ColorWheel.scss';

interface ColorWheelProps {}

const ColorWheel: FC<ColorWheelProps> = ({}) => {
    return (
        <div className="color-wheel">
            <p className="text-xl font-bold">TRY COLOR WHEEL</p>
        </div>
    );
};

export default ColorWheel;
