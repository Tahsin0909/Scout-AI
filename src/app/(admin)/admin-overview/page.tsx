import Overview from "@/features/admin/components/Overview";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "OverView | Scout Ai",
    description:
        "Request a verification code to reset your password.",
};

const page = () => {
    return (
        <Overview />
    );
};

export default page;