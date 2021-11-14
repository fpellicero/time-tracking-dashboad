import ActivityCard, {
  TActivityVariant,
} from "./components/TimeTracker/ActivityCard/ActivityCard";
import ProfileCard from "./components/TimeTracker/ProfileCard/ProfileCard";
import data from "./data.json";
import React from "react";

function TimeTrackingDashboard() {
  const [timeframe, setTimeframe] = React.useState<
    "weekly" | "monthly" | "daily"
  >("weekly");
  return (
    <>
      <div className="bg-neutral-darkestBlue grid grid-cols-12 gap-8 min-h-screen items-center px-2 py-12 md:px-12">
        <div className="col-span-12 lg:col-span-3">
          <ProfileCard
            timeframe={timeframe}
            //@ts-ignore
            setTimeframe={setTimeframe}
          />
        </div>
        <div className="col-span-12 lg:col-span-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.map(({ title, timeframes }) => (
            <ActivityCard
              key={title}
              current={timeframes[timeframe].current}
              previous={timeframes[timeframe].previous}
              variant={title as unknown as TActivityVariant}
              timeframe={timeframe}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TimeTrackingDashboard;
