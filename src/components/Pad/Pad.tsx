import * as React from 'react';
import {FunctionComponent, useEffect, useState} from 'react';
import './Pad.scss';
import {Key} from '../Key';
import {Screen} from '../Screen';


export const Pad: FunctionComponent = () => {

    const numeros: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    // Intentar hacerlo con array en lugar de string
    const [lastKeyPressed, setLastKeyPressed] = useState('');
    const [pressedKeyMemory, setPressedKeyMemory] = useState('');
    const [screenDisplay, setScreenDisplay] = useState('');
    const [isValidPin, setIsValidPin] = useState(false);
    const validPin = '154777';
    useEffect(() => {
        setPressedKeyMemory(pressedKeyMemory + lastKeyPressed);
        if (pressedKeyMemory.length === validPin.length) {
            if (pressedKeyMemory === validPin) {
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
        {numeros.map(KeyNumber =>
            <Key
                Value={KeyNumber}
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
    for (let character in toConvert) {
        character = '*';
        converted += character;
    }
    converted += currentPin.charAt(currentPin.length - 1);
    return converted;
}
