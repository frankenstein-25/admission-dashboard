import React from 'react';
import styles from './input.module.scss';

interface ComponentProps {
    type?: string;
    label?: string;
    value: string;
    onChangeFunc: (value: any) => void;
}


const Input: React.FC<ComponentProps> = ({onChangeFunc, value, type = undefined, label = undefined}) => {
    return (
        <div className={styles.container}>
            {label && <label htmlFor={`input-${type}`}>{label}</label>}
            <input value={value} type={type ? type : "text"} onChange={(e) => onChangeFunc(e.target.value)}/>
        </div>
    );
};

export default Input;