import iconEllipsis from "./imgs/icon-ellipsis.svg";
import iconWork from "./imgs/icon-work.svg";
import iconPlay from "./imgs/icon-play.svg";
import iconStudy from "./imgs/icon-study.svg";
import iconExercise from "./imgs/icon-exercise.svg";
import iconSocial from "./imgs/icon-social.svg";
import iconSelfCare from "./imgs/icon-self-care.svg";

const Icons: Record<TActivityVariant, string> = {
  Work: iconWork,
  Play: iconPlay,
  Study: iconStudy,
  Exercise: iconExercise,
  Social: iconSocial,
  "Self Care": iconSelfCare,
};

export type TActivityVariant =
  | "Work"
  | "Play"
  | "Study"
  | "Exercise"
  | "Social"
  | "Self Care";

const colors: Record<TActivityVariant, string> = {
  Work: "bg-work",
  Play: "bg-play",
  Study: "bg-study",
  Exercise: "bg-exercise",
  Social: "bg-social",
  "Self Care": "bg-selfcare",
};

const translations: Record<IActivityCardProps["timeframe"], string> = {
  daily: "Yesterday",
  monthly: "Last Month",
  weekly: "Last Week",
};

interface IActivityCardProps {
  variant: TActivityVariant;
  timeframe: "daily" | "weekly" | "monthly";
  current: number;
  previous: number;
}

function ActivityCard({
  variant,
  current,
  previous,
  timeframe,
}: IActivityCardProps) {
  return (
    <div className="text-white">
      <div
        className={`${colors[variant]} rounded-lg h-14 overflow-hidden relative`}
      >
        <span className="absolute right-2 -top-1">
          <img className="h-12" src={Icons[variant]} />
        </span>
      </div>
      <div className="bg-neutral-darkBlue hover:bg-hover cursor-pointer rounded-lg -mt-6 p-4 relative z-10 pb-8">
        <div className="flex justify-between">
          {variant}
          <button className="text-neutral-paleBlue hover:text-white cursor-pointer">
            <img src={iconEllipsis} />
          </button>
        </div>
        <div className="flex justify-between items-center md:block mt-6">
          <div className="text-4xl md:text-6xl text-white font-base md:mb-2">
            {current}hrs
          </div>
          <div className="text-s font-base text-neutral-paleBlue">
            {translations[timeframe]}- {previous}hrs
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
