import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { StepCard } from "./StepCard";
import { FormField } from "./FormField";
import { addSocialAccount, removeSocialAccount, setConfirmOwnership, setPrimaryPlatform, setPrimaryUrl, updatePersonalField, updateSocialAccount } from "../../store/partnership.slice";
import { PlatformSelect } from "./PlatformSelect";
import { Link2, Plus, Trash2 } from "lucide-react";
import { CheckboxRow } from "./CheckBoxRow";

export function PersonalInformationStep() {
    const dispatch = useAppDispatch();

    const application = useAppSelector(
        state =>
            state.partnerApplication,
    );

    return (
        <div className="space-y-5">
            <StepCard title="Personal Information">
                <div
                    className="
                        grid gap-5
                        sm:grid-cols-2
                    "
                >
                    <FormField
                        label="Full name"
                        value={
                            application.personal
                                .fullName
                        }
                        placeholder="Alex Johnson"
                        autoComplete="name"
                        onChange={value =>
                            dispatch(
                                updatePersonalField({
                                    field: "fullName",
                                    value,
                                }),
                            )
                        }
                    />

                    <FormField
                        label="Email Address"
                        type="email"
                        value={
                            application.personal
                                .email
                        }
                        placeholder="alex.johnson@email.com"
                        autoComplete="email"
                        onChange={value =>
                            dispatch(
                                updatePersonalField({
                                    field: "email",
                                    value,
                                }),
                            )
                        }
                    />

                    <FormField
                        label="Phone Number"
                        type="tel"
                        value={
                            application.personal
                                .phone
                        }
                        placeholder="+1 (555) 123-4567"
                        autoComplete="tel"
                        onChange={value =>
                            dispatch(
                                updatePersonalField({
                                    field: "phone",
                                    value,
                                }),
                            )
                        }
                    />

                    <FormField
                        label="Location"
                        value={
                            application.personal
                                .location
                        }
                        placeholder="Denver, Colorado"
                        autoComplete="address-level2"
                        onChange={value =>
                            dispatch(
                                updatePersonalField({
                                    field: "location",
                                    value,
                                }),
                            )
                        }
                    />
                </div>
            </StepCard>

            <StepCard title="Social Media Presence">
                <div
                    className="
                        grid gap-5
                        sm:grid-cols-2
                    "
                >
                    <PlatformSelect
                        label="Select Platform"
                        value={
                            application.social
                                .primaryPlatform
                        }
                        onChange={platform =>
                            dispatch(
                                setPrimaryPlatform(
                                    platform,
                                ),
                            )
                        }
                    />

                    <FormField
                        label="Profile URL"
                        value={
                            application.social
                                .primaryUrl
                        }
                        placeholder="https://instagram.com/yourhandle"
                        icon={
                            <Link2 className="size-4" />
                        }
                        onChange={value =>
                            dispatch(
                                setPrimaryUrl(
                                    value,
                                ),
                            )
                        }
                    />
                </div>

                <div className="mt-7">
                    <h3 className="text-base font-medium">
                        Additional Account
                    </h3>

                    <div className="mt-4 space-y-3">
                        {application.social.additionalAccounts.map(
                            account => (
                                <div
                                    key={
                                        account.id
                                    }
                                    className="
                                        grid gap-3
                                        sm:grid-cols-[170px_minmax(0,1fr)_44px]
                                    "
                                >
                                    <PlatformSelect
                                        hideLabel
                                        label="Platform"
                                        value={
                                            account.platform
                                        }
                                        onChange={platform =>
                                            dispatch(
                                                updateSocialAccount(
                                                    {
                                                        id: account.id,
                                                        changes:
                                                        {
                                                            platform,
                                                        },
                                                    },
                                                ),
                                            )
                                        }
                                    />

                                    <FormField
                                        hideLabel
                                        label={`${account.platform} URL`}
                                        value={
                                            account.url
                                        }
                                        placeholder={`Enter your ${account.platform} profile URL`}
                                        onChange={value =>
                                            dispatch(
                                                updateSocialAccount(
                                                    {
                                                        id: account.id,
                                                        changes:
                                                        {
                                                            url: value,
                                                        },
                                                    },
                                                ),
                                            )
                                        }
                                    />

                                    <button
                                        type="button"
                                        aria-label={`Remove ${account.platform}`}
                                        onClick={() =>
                                            dispatch(
                                                removeSocialAccount(
                                                    account.id,
                                                ),
                                            )
                                        }
                                        className="
                                            flex h-12
                                            items-center
                                            justify-center
                                            rounded-lg
                                            border
                                            border-border
                                            text-muted-foreground
                                            transition-colors
                                            hover:border-destructive/30
                                            hover:bg-destructive/5
                                            hover:text-destructive
                                        "
                                    >
                                        <Trash2 className="size-4" />
                                    </button>
                                </div>
                            ),
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            dispatch(
                                addSocialAccount({
                                    id:
                                        crypto.randomUUID(),
                                    platform:
                                        "Instagram",
                                    url: "",
                                }),
                            )
                        }
                        className="
                            mt-5 inline-flex
                            items-center gap-3
                            text-sm font-semibold
                            text-[#d6a900]
                            transition-colors
                            hover:text-[#b89000]
                            dark:text-[#ffd23f]
                        "
                    >
                        <Plus className="size-4" />
                        Add Another Platform
                    </button>
                </div>

                <CheckboxRow
                    className="mt-8"
                    checked={
                        application.social
                            .confirmOwnership
                    }
                    onChange={checked =>
                        dispatch(
                            setConfirmOwnership(
                                checked,
                            ),
                        )
                    }
                    title="I confirm these social accounts belong to me and accurately reflect my current digital reach and engagement metrics."
                />
            </StepCard>
        </div>
    );
}