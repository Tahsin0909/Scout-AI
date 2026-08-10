import { CloudRain, Sun } from "lucide-react";
import { ITripReport, ITripReportWeather } from "../../triptrax.interface";

const WeatherIcon = ({
    weather,
}: {
    weather: ITripReportWeather["weather"];
}) => {
    if (weather === "rain") {
        return <CloudRain className="h-6 w-6 text-blue-500" />;
    }

    return <Sun className="h-6 w-6 text-blue-500" />;
};

const weatherStatusClass = {
    low: "bg-emerald-950 text-emerald-500",
    medium: "bg-amber-950 text-amber-500",
    ideal: "bg-blue-600 text-white",
    storm: "bg-red-600 text-white",
};

export const WeatherIntelligence = ({
    trip,
}: {
    trip: ITripReport;
}) => {

    return (
        <section>
            <h2 className="mb-4 text-lg font-semibold">
                Weather Intelligence
            </h2>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
                {trip.weather.map((weather) => (
                    <div key={weather.day} className={`rounded-md border dark:bg-[#0d0d0d] bg-card p-4 text-center ${weather.status === "storm" ? "border-red-900" : "dark:border-[#292929]"}`}>
                        <p className={`text-xs font-semibold ${weather.status === "storm" ? "text-red-500" : weather.status === "ideal" ? "text-blue-500" : "text-neutral-500"}`}>
                            {weather.day}
                        </p>

                        <div className="my-3 flex justify-center">
                            <WeatherIcon weather={weather.weather} />
                        </div>

                        <p className="text-base font-semibold">
                            {weather.temperature}
                        </p>

                        <p className="mt-1 text-[10px] text-neutral-500">
                            {weather.precipitation}
                        </p>

                        <div className={`mt-3 py-1 text-[9px] font-semibold uppercase ${weatherStatusClass[weather.status]}`}>
                            {weather.status === "medium" ? "RISK MED" : weather.status === "low" ? "RISK LOW" : weather.status}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};