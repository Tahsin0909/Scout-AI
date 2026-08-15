interface TripWizardHeaderProps {
    step: number;
}

const TripWizardHeader = ({ step }: TripWizardHeaderProps) => {
    const totalSteps = 8;
    const progress = (step / totalSteps) * 100;

    return (
        <div className="flex items-center gap-5">
            <span className="w-10 text-xs font-medium text-muted-foreground ">
                {Math.round(progress)}%
            </span>

            <div className="h-3 flex-1 overflow-hidden rounded-full dark:bg-muted bg-gray-400">
                <div className="h-full bg-foreground transition-all duration-300 " style={{ width: `${progress}%` }} />
            </div>

            <span className="min-w-[70px] text-xs font-medium text-muted-foreground">
                Step {step} / {totalSteps}
            </span>
        </div>
    );
};

export default TripWizardHeader;