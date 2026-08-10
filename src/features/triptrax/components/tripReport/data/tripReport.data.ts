import { ITripReport } from "@/features/triptrax/triptrax.interface";

export const defaultTripReport: ITripReport = {
    id: "#AX-2940-B",

    title: "Colorado Rockies Overland Loop",

    subtitle: "Ouray · Silverton · Telluride · Ridgway",

    overview: {
        duration: "5 Days",
        distance: "187 Mi",
        difficulty: "Expert",
        risk: "Mod-High",
        maxElevation: "13,080 ft",
    },

    briefing: {
        classification: "Level IV Alpine",

        description:
            "The Colorado Rockies Overland Loop represents a high-altitude technical traverse. Key challenges include the Black Bear Pass Staircase, multiple river crossings in the Red Mountain district, and sustained exposure above the tree line. AI predictive models suggest high mechanical stress on drivetrain components. Expedition focus remains on pace management and meteorological monitoring.",

        tags: [
            "70% Unpaved Class 3+",
            "Glacial runoff monitoring required",
        ],
    },

    weather: [
        {
            day: "JUN 14",
            date: "14",
            temperature: "72° / 44°",
            precipitation: "10% Rain",
            status: "low",
            weather: "sunny",
        },
        {
            day: "JUN 15",
            date: "15",
            temperature: "68° / 41°",
            precipitation: "5% Rain",
            status: "ideal",
            weather: "sunny",
        },
        {
            day: "JUN 16",
            date: "16",
            temperature: "55° / 32°",
            precipitation: "55% Rain",
            status: "storm",
            weather: "rain",
        },
        {
            day: "JUN 17",
            date: "17",
            temperature: "48° / 28°",
            precipitation: "40% Rain",
            status: "medium",
            weather: "rain",
        },
        {
            day: "JUN 18",
            date: "18",
            temperature: "66° / 39°",
            precipitation: "5% Rain",
            status: "low",
            weather: "sunny",
        },
    ],

    route: [
        {
            name: "Ouray (Start Point)",
            coordinate: "38.0225° N, 107.6722° W",
            elevation: "7,792 ft",
            badge: "CLASS 1",
        },
        {
            name: "Engineer Pass",
            coordinate: "37.9735° N, 107.5797° W",
            elevation: "12,800 ft",
            badge: "CLASS 2",
        },
        {
            name: "Silverton",
            coordinate: "37.8119° N, 107.6645° W",
            elevation: "9,318 ft",
            badge: "BASECAMP",
        },
        {
            name: "Black Bear Pass",
            coordinate: "37.8969° N, 107.7234° W",
            elevation: "12,840 ft",
            badge: "CLASS 5",
            danger: true,
        },
        {
            name: "Telluride (End Point)",
            coordinate: "37.9375° N, 107.8123° W",
            elevation: "8,750 ft",
            badge: "END",
        },
    ],

    missionAlerts: [
        {
            title: "Lightning Hazard: June 16",
            description:
                "NOAA predicts 85% probability of electrical storms above 11k ft between 1300-1700 hrs.",
            type: "danger",
        },
        {
            title: "Black Bear Pass: Expert Status",
            description:
                "Technical descent requires spotter and low-range gearing. Prohibit amateur solo travel.",
            type: "danger",
        },
        {
            title: "Cell Coverage Blackout",
            description:
                "Zones 3 through 8 are completely dark. SAT-COM active.",
            type: "danger",
        },
    ],

    highlights: {
        bestSummitDay:
            "June 15: Clear visibility and stable winds predicted for high passes.",

        stormAlert:
            "June 16: Severe electrical storm risk. Avoid summits after 12:00.",
    },

    mileage: {
        total: 187,
        offRoad: 142,
        driveTime: "22 hrs 40 min",
    },

    safetyContacts: [
        {
            title: "Montrose Health",
            phone: "970-249-2211",
            subtitle: "Trauma Level 3",
        },
        {
            title: "Ouray County SAR",
            phone: "VHF Channel 16",
            subtitle: "In-Emergency",
        },
        {
            title: "San Juan Sheriff",
            phone: "970-387-5531",
            subtitle: "Silverton HQ",
        },
        {
            title: "US Forest Service",
            phone: "970-240-5300",
            subtitle: "Uncompahgre Dist.",
        },
    ],

    gear: {
        readiness: 86,

        checklist: [
            {
                title: "Recovery Boards (Maxtrax)",
                completed: true,
            },
            {
                title: "Portable Air Compressor",
                completed: true,
            },
            {
                title: "Auxiliary Fuel (10 gal) - MISSING",
                completed: false,
                danger: true,
            },
        ],

        vehicleDescription:
            'Recommended: 33" Minimum Tire, Winch (10k lb), High-clearance bumpers, Skid plates, and Under-armor.',

        tires: '33" MT',

        recovery: "Winch",
    },

    lodging: [
        {
            id: "1",
            nights: "Night 1 & 2",
            title: "Amphitheater Campground (Ouray)",
            description:
                "Potable water, vault toilets, fire pits. Direct access to Chief Ouray Trail.",
            status: "available",
        },
        {
            id: "2",
            nights: "Night 3",
            title: "The Grand Imperial (Silverton)",
            description:
                "Historic lodging. Full mechanical garage nearby. High-speed Starlink WiFi.",
            status: "limited",
        },
    ],

    sustainment: {
        waterPerDay: "4L / Day",

        reservoir: 75,

        note:
            "Filter all alpine stream water. Cryptosporidium risk present in Red Mountain district.",

        meals: [
            {
                type: "BREAKFAST",
                title: "Oatmeal / Coffee",
            },
            {
                type: "LUNCH",
                title: "Trail Mix / Wraps",
            },
            {
                type: "DINNER",
                title: "Freeze-dried Beef Stew",
            },
        ],
    },

    files: [
        {
            id: "1",
            title: "Full Trip Package (Extended)",
            meta: "PDF · 42.4 MB · Vers. 2.1",
            type: "pdf",
        },
        {
            id: "2",
            title: "High-Res Topo Waypoints",
            meta: "GPX · 1.2 MB · Updated Yesterday",
            type: "gpx",
        },
        {
            id: "3",
            title: "Emergency Action Plan",
            meta: "PDF · 850 KB",
            type: "pdf",
        },
    ],
};