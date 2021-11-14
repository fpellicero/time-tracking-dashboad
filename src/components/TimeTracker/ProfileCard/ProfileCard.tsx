import ProfileImage from "./image-jeremy.png";
import clsx from "clsx";

interface IProfileCardProps {
  timeframe: string;
  setTimeframe: (timeframe: string) => void;
}

function ProfileCard({ setTimeframe, timeframe }: IProfileCardProps) {
  return (
    <div className="flex flex-col text-neutral-paleBlue">
      <div className="bg-neutral-deepPurple rounded-lg pt-12 pl-6 pr-6 md:pr-12 flex-grow z-10 h-36 lg:h-80 flex gap-6 lg:block">
        <div className="w-16 h-16 rounded-full ring-2 ring-white mb-4">
          <img src={ProfileImage} />
        </div>
        <div className="flex-grow">
          <div className="text-sm">Report for</div>
          <h1 className="text-2xl md:text-4xl text-white">Jeremy Robson</h1>
        </div>
      </div>
      <div className="bg-neutral-darkBlue -mt-4 rounded-lg pt-8 pb-6 md:pl-10 flex content-center">
        <ul className="flex justify-around w-full lg:block">
          {["daily", "weekly", "monthly"].map((t) => (
            <li
              className={clsx([
                "my-2",
                timeframe === t && "text-white cursor-default",
                timeframe !== t && "cursor-pointer hover:text-white",
              ])}
              onClick={() => setTimeframe(t)}
            >
              {t.substr(0, 1).toUpperCase()}
              {t.substr(1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
