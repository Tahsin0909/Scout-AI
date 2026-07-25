export const PLAN_IDS = [
    "trailhead",
    "basecamp",
    "summit",
    "apex-elite",
] as const;

export const BILLING_TYPES = [
    "standard",
    "annual",
] as const;

export type PlanId =
    (typeof PLAN_IDS)[number];

export type BillingType =
    (typeof BILLING_TYPES)[number];

type SearchParamValue =
    | string
    | string[]
    | undefined;

function getFirstValue(
    value: SearchParamValue,
): string | undefined {
    return Array.isArray(value)
        ? value[0]
        : value;
}

export function resolvePlan(
    value: SearchParamValue,
): PlanId | undefined {
    const plan = getFirstValue(value);

    if (
        !plan ||
        !PLAN_IDS.includes(plan as PlanId)
    ) {
        return undefined;
    }

    return plan as PlanId;
}

export function resolveBilling(
    value: SearchParamValue,
): BillingType | undefined {
    const billing =
        getFirstValue(value);

    if (
        !billing ||
        !BILLING_TYPES.includes(
            billing as BillingType,
        )
    ) {
        return undefined;
    }

    return billing as BillingType;
}