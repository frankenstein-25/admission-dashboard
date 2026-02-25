import {AdmissionAnalytics} from "@/types/analytics";

export const fetchAdmissionAnalytics = async (
    from?: string,
    to?: string
): Promise<AdmissionAnalytics> => {
    // await new Promise((resolve) => setTimeout(resolve, 800));
    const mockData: AdmissionAnalytics = {
        totalApplicants: 1200,
        verifiedApplicants: 850,
        rejectedApplicants: 320,
        applicationsPerProgram: [
            {program: "Engineering", count: 400},
            {program: "Medical", count: 300},
            {program: "Business", count: 250},
            {program: "Arts", count: 150},
        ],
        applicationTrends: [
            {date: "2026-02-01", count: 50},
            {date: "2026-02-02", count: 80},
            {date: "2026-02-03", count: 120},
            {date: "2026-02-04", count: 200},
            {date: "2026-02-05", count: 150},
        ],
    };
    if (from && to) {
        mockData.applicationTrends = mockData.applicationTrends.filter(
            (item) => item.date >= from && item.date <= to
        );
    }
    return mockData;
}