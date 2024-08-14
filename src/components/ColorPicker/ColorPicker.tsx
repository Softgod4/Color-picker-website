import { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const ColorPicker = () => {
    const [currentColor, setCurrentColor] = useState('#1a222e');
    useEffect(() => {
        console.log(currentColor);
        document.body.style.backgroundColor = currentColor;
    }, [currentColor]);

    return (
        <div className="absolute right-0 mr-16 mt-16 shadow-2xl p-4 flex justify-center items-center flex-col border-gray-600 border border-solid rounded-lg bg-color-picker">
            <HexColorPicker color={currentColor} onChange={setCurrentColor} />
            <input
                type="text"
                id="input-group-1"
                className="border mt-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-6 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white font-extrabold"
                disabled={true}
                placeholder={'current color: ' + currentColor}
            />
        </div>
    );
};

export default ColorPicker;
