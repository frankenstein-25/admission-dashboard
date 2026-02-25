import React, {useEffect, useMemo, useState} from 'react';
import styles from "./home.module.scss";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Card from "@/components/Card";
import {AdmissionAnalytics} from "@/types/analytics";
import {fetchAdmissionAnalytics} from "@/api/analytics";
import Loader from "@/components/Loader";
import Chart from "@/components/Chart";

const Home: React.FC = () => {
    const [fromDate, setFromDate] = useState<string>('');
    const [toDate, setToDate] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<AdmissionAnalytics | null>(null);

    const loadData = async () => {
        setLoading(true);
        try {
            const response: AdmissionAnalytics = await fetchAdmissionAnalytics(fromDate, toDate);
            setData(response);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadData();
    }, []);

    const totalStats = useMemo(() => {
        if (!data) return [];
        return [
            {label: "Total Applicants", value: data.totalApplicants},
            {label: "Verified Applicants", value: data.verifiedApplicants},
            {label: "Rejected Applicants", value: data.rejectedApplicants},
        ];
    }, [data]);

    const getHighlightColor = (value: number) => {
        if (value > 1000) return "red";
        if (value > 500) return "orange";
        return "black";
    };

    if (loading) return <Loader/>;

    return <div className={`container ${styles.container}`}>
        <h1 className={`heading ${styles.heading}`}>Admission Analytics Dashboard</h1>
        <div className={styles.formContainer}>
            <div className={styles.formContainer}>
                <Input label={'From'} value={fromDate} onChangeFunc={setFromDate} type={'date'}/>
                <Input label={'To'} value={toDate} onChangeFunc={setToDate} type={'date'}/>
            </div>
            <Button onClick={loadData} title={'Refresh'}/>
        </div>
        {totalStats.length > 0 && <div className={styles.cardWrapper}>
            {totalStats.map(
                ({label, value}: { label: string, value: any }, index: number) => (
                    <Card key={index} label={label} value={value} valueColor={getHighlightColor(value)}/>))}
        </div>}
        <div className={styles.chartContainer}>
            <div className={`${styles.chart} ${styles.chart1}`}>
                <Chart type={'bar'} title={'Applications per Program'} data={data?.applicationsPerProgram}/>
            </div>
            <div className={`${styles.chart} ${styles.chart2}`}>
                <Chart type={'line'} title={'Application Trends'} data={data?.applicationTrends}/>
            </div>
        </div>
    </div>;
};

export default Home;