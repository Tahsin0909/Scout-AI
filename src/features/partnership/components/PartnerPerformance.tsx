import AdminPartnerMetrics from "@/features/metricksandcharts/components/adminPartnerMetrics";
import { IConversionMetric, IPartnerDetails, IReferralChartData } from "../partnership.interface";
import PartnerActions from "./PartnerActions";
import PartnerContactInfo from "./PartnerContactInfo";

interface PartnerPerformanceProps {
    partner: IPartnerDetails;
    referralFlow: IReferralChartData[];
    conversionMetrics: IConversionMetric[];
}

const PartnerPerformance = ({
    partner,
    referralFlow,
    conversionMetrics,
}: PartnerPerformanceProps) => {
    return (
        <div className="space-y-5">
            <AdminPartnerMetrics conversionMetrics={conversionMetrics} referralFlow={referralFlow} />

            <div className="grid gap-5 xl:grid-cols-[2fr_0.8fr]">
                <PartnerContactInfo
                    partner={partner}
                />

                <PartnerActions
                    currentTier={partner.tier}
                />
            </div>
        </div >
    );
};

export default PartnerPerformance;