import React from 'react';
import styles from './button.module.scss'

interface ComponentProps {
    onClick: () => void;
    title: string;
}

const Button: React.FC<ComponentProps> = ({onClick, title}) => {
    return (
        <div className={styles.container}>
            <button className={styles.primaryBtn} onClick={onClick}>{title}</button>
        </div>
    );
};

export default Button;