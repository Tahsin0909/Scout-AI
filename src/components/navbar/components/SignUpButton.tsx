import { LogIn } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const SignUpButton = () => {
    return (
        <Button
            asChild
            variant="primary"
            size="lg"
        >
            <Link href="/register">
                <LogIn />
                <span>Sign up</span>
            </Link>
        </Button>
    );
};