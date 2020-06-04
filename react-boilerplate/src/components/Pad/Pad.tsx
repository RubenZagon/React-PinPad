import * as React from 'react';
import './Pad.scss';
import { FunctionComponent, useEffect, useState } from 'react';
import { Key } from '../Key';
import { Screen } from '../Screen';


export const Pad: FunctionComponent = () => {

    const numeros: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    // Intentar hacerlo con array en lugar de string
    const [digit, setDigit] = useState('');
    const [inputPin, setInputPin] = useState('');
    const [typedPin, setTypedPin] = useState('');

    const [check, setCheck] = useState(false);

    const pin = '1547';

    useEffect(() => {

        const numero = inputPin + digit;
        const pinLowerThanFour = inputPin.length < 4;
        if (pinLowerThanFour){
            setInputPin(numero);
        }
        const pinGreaterThanTwo = inputPin.length >= 2;
        if(pinGreaterThanTwo){
            // 4356
            const toConvert:any = inputPin.slice(0,-1);
            let converted = '';
            for(let character in toConvert){
                character = '*';
                converted += character;
            }
            converted += inputPin.charAt(inputPin.length-1);
            setTypedPin(converted);
        }
        else{
            setTypedPin(inputPin);
        }
        const pinEqualsFour = inputPin.length === 4;
        if(pinEqualsFour){
            if(inputPin === pin){
                console.log('chacho te la mandaste');
                setCheck(true);
            }
            else{
                console.log('Vuelve a intentarlo, crack');
            }
        }
        setDigit('');
    },[digit]);


    return <div className="Pad">
        <Screen digit={typedPin} isCorrect={check}/>
        {numeros.map(KeyNumber =>
            <Key
                Value = {KeyNumber}
                key =  {KeyNumber}
                onClickValue={() => setDigit(KeyNumber)}
            >
                {KeyNumber}
            </Key>)
        }
    </div>;
};
Pad.displayName = 'Pad';
