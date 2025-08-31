import React, { useCallback, useState } from 'react';
import './Calculator.css';

const buttons = [
    { id: "clear", value: "Clear", label: "Clear all input" },
    { id: "division", value: "/", label: "Divide" },
    { id: "multiplicaton", value: "*", label: "Multiply" },
    { id: "7", value: "7", label: "7" },
    { id: "8", value: "8", label: "8" },
    { id: "9", value: "9", label: "9" },
    { id: "minus", value: "-", label: "Substract" },
    { id: "4", value: "4", label: "4" },
    { id: "5", value: "5", label: "5" },
    { id: "6", value: "6", label: "6" },
    { id: "plus", value: "+", label: "Add" },
    { id: "1", value: "1", label: "1" },
    { id: "2", value: "2", label: "2" },
    { id: "3", value: "3", label: "3" },
    { id: "0", value: "0", label: "0" },
    { id: "00", value: "00", label: "00" },
    { id: ".", value: ".", label: "Decimal" },
    { id: "equal", value: "=", label: "Equal" },
];

const Calculator = () => {
    const [valueInput, setValueInput] = useState('');

    const handleClick = useCallback((value) => {
        if(value === '=') {
            try {
                const result = Function(`"use strict"; return (${valueInput})`)();
                setValueInput(result.toString());
            } catch(err) {
                setValueInput('Error');
                console.error('Math Error: ', err.message);
            }
        } else if(value === 'Clear') {
            setValueInput('');
        } else if(value === '00') {
            setValueInput(prev => {
                if(!prev) return '0';

                const lastChar = prev.slice(-1);

                if(['+', '-', '*', '/'].includes(lastChar)) {
                    return prev + '0';
                }
                return prev + '00';
            })
        } else {
            setValueInput(prev => prev + value);
        }
    }, [valueInput]);

  return (
    <section className="calculator">
        <div className="buttons">
            <h2 className="value">{valueInput}</h2>

            { buttons.map(({ id, value, label }) => (
                <button key={id} id={id} aria-label={label} onClick={() => handleClick(value)}>{value}</button>
            ))
            }
        </div>
    </section>
  )
}

export default Calculator