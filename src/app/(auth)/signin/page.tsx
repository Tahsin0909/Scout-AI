import AuthPageLayout from "@/features/auth/components/AuthPageLayout";
import SignInForm from "@/features/auth/components/SignInForm";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Sign In | Scout Ai",
    description: "Sign in to continue your adventure.",
};

export default function SignInPage() {
    return (
        <AuthPageLayout sidebarImage="/authSidebar.png">
            <SignInForm />
        </AuthPageLayout>
    );
} 