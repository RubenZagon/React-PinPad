import * as React from 'react';
import './Key.scss';
import {FunctionComponent} from 'react';

type Data = {
    Value: string;
    onClickValue?: () => string | void,
};

export const Key: FunctionComponent<Data> = ({ Value , onClickValue}) => {
    return (
        <button className="Key" onClick={onClickValue} >
            {Value}
        </button>
    );
};

Key.displayName = 'Key';
