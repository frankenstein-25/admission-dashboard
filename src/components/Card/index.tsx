import React from 'react';
import styles from './card.module.scss';

interface ComponentProps {
    label: string;
    value: string;
    valueColor?: 'orange' | 'red' | 'black';
}

const Card: React.FC<ComponentProps> = ({label, value, valueColor}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>{label}</h3>
            <p className={styles.value} style={{'color': valueColor}}>{value}</p>
        </div>
    );
};

export default Card;