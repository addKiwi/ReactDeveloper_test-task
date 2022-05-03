import React, { useState } from "react";

import './InputChart.scss';

interface Props {
    axis: 'X' | 'Y',
    data: string[],
    setData: (value: string[]) => void,
}

export const InputChart: React.FC<Props> = React.memo(({axis, data, setData}) => {

    const handleBlur = (event:React.FocusEvent<HTMLInputElement, Element>) => {
        const values = event.target.value.split(',').map(value => value.trim());

        setData(values)
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const values = event.currentTarget.value.split(',').map(value => value.trim());

        if (event.key === 'Enter') {
            event.currentTarget.blur();
            setData(values)
        }
    }

    return (
        <label>
            <h3>{ axis } axis labels </h3>
            <input 
                className="input"
                type="text"
                onBlur={handleBlur}
                onKeyPress={handleKeyPress} 
                defaultValue={data.join(', ')}
            />
        </label>
    )
})