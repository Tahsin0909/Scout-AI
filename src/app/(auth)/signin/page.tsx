import SignInForm from "@/features/auth/components/SignInForm";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Sign In | Triptrax",
    description: "Sign in to continue your adventure.",
};

export default function SignInPage() {
    return <SignInForm />;
}