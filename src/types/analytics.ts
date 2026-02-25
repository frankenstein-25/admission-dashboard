export interface ProgramData {
    program: string;
    count: number;
}

export interface TrendData {
    date: string;
    count: number;
}

export interface AdmissionAnalytics {
    totalApplicants: number;
    verifiedApplicants: number;
    rejectedApplicants: number;
    applicationsPerProgram: ProgramData[];
    applicationTrends: TrendData[];
}