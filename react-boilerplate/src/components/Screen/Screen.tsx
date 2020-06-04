import * as React from 'react';
import './Screen.scss';

interface ScreenProps {
    digit: string;
    isCorrect: boolean | any;
}

export const Screen: React.FC<ScreenProps>= ({ digit , isCorrect}) => {

    return (
        <div className="Screen"  >

            {isCorrect
                ? 'OK'
                : digit
            }

        </div>
    );


};

Screen.displayName = 'Screen';
