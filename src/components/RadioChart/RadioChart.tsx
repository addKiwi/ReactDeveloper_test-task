import React from "react";
import {Charts} from '../../types/types';

interface Props {
    value: string,
    selected: Charts,
    setSelected: (value: Charts) => void,
}

export const RadioChart: React.FC<Props> = React.memo(({value, selected, setSelected}) => {
    return (
        <label>
            <input 
                type="radio"
                name="chart"
                checked={value === selected}
                onChange={e => setSelected(e.target.value as Charts)} 
                value={value}
            />
            {value}
        </label>
    )
})