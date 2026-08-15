import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://api.opentripmap.com/0.1/en/places";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const lat = searchParams.get("lat");
        const lng = searchParams.get("lng");

        if (!lat || !lng) {
            return NextResponse.json(
                {
                    message: "Latitude and longitude are required.",
                },
                {
                    status: 400,
                }
            );
        }

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

        const url = new URL(`${BASE_URL}/radius`);

        url.searchParams.set("radius", "30000");
        url.searchParams.set("lat", lat);
        url.searchParams.set("lon", lng);
        url.searchParams.set("rate", "2");
        url.searchParams.set("limit", "30");
        url.searchParams.set("format", "json");
        url.searchParams.set("apikey", apiKey);

        const response = await fetch(url.toString(), {
            cache: "no-store",
        });

        if (!response.ok) {
            const error = await response.text();

            console.error("OpenTripMap error:", error);

            return NextResponse.json(
                {
                    message: "Failed to fetch nearby travel places.",
                },
                {
                    status: response.status,
                }
            );
        }

        const data = await response.json();

        const places = data.filter(
            (place: {
                name?: string;
            }) => place.name?.trim()
        );

        return NextResponse.json({
            places,
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