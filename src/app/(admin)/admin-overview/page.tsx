import Overview from "@/features/admindashboard/components/Overview";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "OverView | TripTrax",
    description:
        "Request a verification code to reset your password.",
};

const page = () => {
    return (
        <Overview />
    );
};

export default page;