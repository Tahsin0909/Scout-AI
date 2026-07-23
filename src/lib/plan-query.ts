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

export type PlanId = (typeof PLAN_IDS)[number];
export type BillingType = (typeof BILLING_TYPES)[number];

type SearchParamValue =
    | string
    | string[]
    | undefined;

function getFirstValue(
    value: SearchParamValue,
): string | undefined {
    return Array.isArray(value) ? value[0] : value;
}

export function resolvePlan(
    value: SearchParamValue,
): PlanId {
    const plan = getFirstValue(value);

    return PLAN_IDS.includes(plan as PlanId)
        ? (plan as PlanId)
        : "trailhead";
}

export function resolveBilling(
    value: SearchParamValue,
): BillingType {
    const billing = getFirstValue(value);

    return BILLING_TYPES.includes(
        billing as BillingType,
    )
        ? (billing as BillingType)
        : "standard";
}