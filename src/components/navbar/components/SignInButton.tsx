import Link from "next/link";

import { Button } from "@/components/ui/button";

export const SignInButton = () => {
    return (
        <Button
            asChild
            variant="outline"
            size="lg"
        >
            <Link href="/signin">
                <span>Sign In</span>
            </Link>
        </Button>
    );
};