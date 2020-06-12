import * as React from 'react';
import {FunctionComponent, useEffect, useState} from 'react';
import './Pad.scss';
import {Key} from '../Key';
import {Screen} from '../Screen';
import {VALID_PIN} from '../../App';


export const Pad: FunctionComponent = () => {

    // Another way more easy to create a array string numbers
    const numbers: string[] = '1234567890'.split('');

    // Intentar hacerlo con array en lugar de string
    const [lastKeyPressed, setLastKeyPressed] = useState('');
    const [pressedKeyMemory, setPressedKeyMemory] = useState('');
    const [screenDisplay, setScreenDisplay] = useState('');
    const [isValidPin, setIsValidPin] = useState(false);

    useEffect(() => {
        setPressedKeyMemory(pressedKeyMemory + lastKeyPressed);
        if (pressedKeyMemory.length === VALID_PIN.length) {
            if (pressedKeyMemory === VALID_PIN) {
                setIsValidPin(true);
            }
        } else {
            const shouldHidePreviousKeys = pressedKeyMemory.length >= 2;
            if (shouldHidePreviousKeys) {
                setScreenDisplay(obfuscatePin(pressedKeyMemory));
            } else {
                setScreenDisplay(pressedKeyMemory);
            }
        }
        setLastKeyPressed('');
    }, [lastKeyPressed]);

    return <div className="Pad">
        <Screen digit={screenDisplay} isCorrect={isValidPin}/>
        {numbers.map(KeyNumber =>
            <Key
                value={KeyNumber}
                key={KeyNumber}
                onClickValue={() => setLastKeyPressed(KeyNumber)}
            >
                {KeyNumber}
            </Key>)
        }
    </div>;
};
Pad.displayName = 'Pad';

function obfuscatePin(currentPin: string) {
    const toConvert: any = currentPin.slice(0, -1);
    let converted = '';
    // tslint:disable-next-line:forin
    for (let character in toConvert) {
        character = '*';
        converted += character;
    }
    converted += currentPin.charAt(currentPin.length - 1);
    return converted;
}
