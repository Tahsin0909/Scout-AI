import { NextResponse } from "next/server";

const BASE_URL = "https://api.opentripmap.com/0.1/en/places";

export async function GET(
    request: Request,
    {
        params,
    }: {
        params: Promise<{
            xid: string;
        }>;
    }
) {
    try {
        const { xid } = await params;

        const apiKey = process.env.NEXT_PUBLIC_OPENTRIPMAP_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                {
                    message: "OpenTripMap API key is missing.",
                },
                {
                    status: 500,
                }
            );
        }

        const url = new URL(`${BASE_URL}/xid/${xid}`);

        url.searchParams.set("apikey", apiKey);

        const response = await fetch(url.toString(), {
            cache: "no-store",
        });

        if (!response.ok) {
            return NextResponse.json(
                {
                    message: "Failed to fetch place details.",
                },
                {
                    status: response.status,
                }
            );
        }

        const data = await response.json();

        const formattedPlace = {
            xid: data.xid,
            name: data.name,
            kinds: data.kinds,
            rate: data.rate,

            image: data.preview?.source ?? null,

            description:
                data.wikipedia_extracts?.text ??
                data.wikipedia_extracts?.html ??
                data.info?.descr ??
                null,

            wikipedia: data.wikipedia ?? null,

            lat: data.point?.lat ?? null,
            lng: data.point?.lon ?? null,

            address: data.address
                ? {
                    road: data.address.road ?? null,
                    houseNumber: data.address.house_number ?? null,
                    suburb: data.address.suburb ?? null,
                    city: data.address.city ?? data.address.town ?? data.address.village ?? null,
                    state: data.address.state ?? null,
                    country: data.address.country ?? null,
                    postcode: data.address.postcode ?? null,
                }
                : null,
        };

        return NextResponse.json({
            place: formattedPlace,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: "Internal server error.",
            },
            {
                status: 500,
            }
        );
    }
}