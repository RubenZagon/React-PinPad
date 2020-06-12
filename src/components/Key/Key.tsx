import * as React from 'react';
import './Key.scss';
import {FunctionComponent} from 'react';

interface Data = {
    value: string;
    onClickValue?: () => string | void,
};

export const Key: FunctionComponent<Data> = ({ value , onClickValue}) => {
    return (
        <button className="Key" onClick={onClickValue} >
            {value}
        </button>
    );
};

Key.displayName = 'Key';
