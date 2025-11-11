import { RewardData } from "./types";

type RewardSectionProps = {
  reward: RewardData;
};

export default function RewardSection({ reward }: RewardSectionProps) {
  return (
    <section className="mt-10 px-5">
      <div className="relative overflow-hidden rounded-[26px] bg-slate-900 px-6 py-7 text-white shadow-[0_60px_150px_-110px_rgba(15,23,42,0.75)]">
        <div className="absolute -right-14 -top-10 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-blue-400/15 blur-3xl" />

        <div className="relative flex flex-col gap-4">
          <div>
            <h3 className="pt-3 text-xl font-bold">{reward.title}</h3>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/85">
            <p>{reward.weekly}</p>
            <p className="text-xs font-semibold text-blue-200">{reward.goal}</p>
          </div>

          <div className="mt-3 h-[7px] w-full overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-blue-400"
              style={{ width: `${reward.progress * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Progress</span>
            <span>{Math.round(reward.progress * 100)}%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

