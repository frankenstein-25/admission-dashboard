import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    LineChart,
    Line,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

import styles from './chart.module.scss';

interface ComponentProps {
    type: 'bar' | 'line';
    title: string;
    data: any;
}

const Chart: React.FC<ComponentProps> = ({type, title, data}) => {
    const getChart = () => {
        switch (type) {
            case 'bar':
                return <>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="program"/>
                            <YAxis/>
                            <Tooltip/>
                            <Bar dataKey="count" fill="#1976d2"/>
                        </BarChart>
                    </ResponsiveContainer>
                </>;

            case 'line':
                return <>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <XAxis dataKey="date"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Line type="monotone" dataKey="count" stroke="#2e7d32"/>
                        </LineChart>
                    </ResponsiveContainer>
                </>;
            default:
                return '';
        }
    }
    return (
        <div>
            <h5 className={styles.heading}>
                {title}
            </h5>
            {data?.length === 0 ? (
                <p>No Data Available</p>
            ) : getChart()}
        </div>
    );
};

export default Chart;