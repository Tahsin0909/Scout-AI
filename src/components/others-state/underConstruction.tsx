import {
    Construction,
    Server,
    Database,
    Monitor,
    Wrench,
} from "lucide-react";

type ConstructionType = "frontend" | "backend" | "server" | "database";

interface UnderConstructionProps {
    type?: ConstructionType;
    name?: string;
    title?: string;
    description?: string;
}

const variants = {
    frontend: {
        icon: Monitor,
        badge: "Frontend",
        title: "Page Under Construction",
        description:
            "We're currently building this page and polishing the user experience.",
    },

    backend: {
        icon: Database,
        badge: "Backend",
        title: "Backend Integration in Progress",
        description:
            "This page depends on backend services that are currently being implemented.",
    },

    server: {
        icon: Server,
        badge: "Server",
        title: "Server Integration in Progress",
        description:
            "This feature requires server-side functionality that is currently under development.",
    },

    database: {
        icon: Database,
        badge: "Database",
        title: "Data Integration in Progress",
        description:
            "This page depends on database services that are currently being configured.",
    },
};

export default function UnderConstruction({
    type,
    name,
    title,
    description,
}: UnderConstructionProps) {
    // Nothing passed → previous/default design
    if (!type) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center px-4">
                <div className="w-full max-w-xl text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                            <Construction className="h-10 w-10 text-primary" />
                        </div>
                    </div>

                    <h1 className="mb-3 text-3xl font-semibold tracking-tight">
                        {title || (name ? `${name} Under Construction` : "Under Construction")}
                    </h1>

                    <p className="mx-auto max-w-md text-muted-foreground">
                        {description ||
                            (name
                                ? `We're currently working on the ${name} page. It will be available soon.`
                                : "We're working on this feature. It will be available soon.")}
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                        Development in progress
                    </div>
                </div>
            </div>
        );
    }

    const config = variants[type];
    const Icon = config.icon;

    return (
        <div className="flex min-h-[70vh] items-center justify-center px-4">
            <div className="w-full max-w-xl text-center">
                <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-10 w-10 text-primary" />
                    </div>
                </div>

                <div className="mb-4">
                    <span className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm text-muted-foreground">
                        <Wrench className="h-3.5 w-3.5" />
                        {config.badge}
                    </span>
                </div>

                <h1 className="mb-3 text-3xl font-semibold tracking-tight">
                    {title || (name ? `${name} — ${config.title}` : config.title)}
                </h1>

                <p className="mx-auto max-w-md text-muted-foreground">
                    {description ||
                        (name
                            ? `The ${name} page is currently unavailable because ${config.description.charAt(0).toLowerCase()}${config.description.slice(1)}`
                            : config.description)}
                </p>

                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    Development in progress
                </div>
            </div>
        </div>
    );
}