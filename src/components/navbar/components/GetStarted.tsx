import Link from "next/link";

import { Button } from "@/components/ui/button";

export const GetStarted = () => {
    return (
        <Button
            asChild
            variant="primary"
            size="lg"
        >
            <Link href="/memberships">
                <span>Get Started</span>
            </Link>
        </Button>
    );
};