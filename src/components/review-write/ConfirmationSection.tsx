import { CheckCircle2Icon, GiftIcon, BellIcon } from "lucide-react";
import { PROFILE_NAME, reasonOptions } from "./sharedConstants";
import type { EmotionOption } from "./sharedConstants";

type ConfirmationSectionProps = {
  emotion: EmotionOption;
  reasons: string[];
  comment: string;
  onReset: () => void;
  profileName?: string;
};

export default function ConfirmationSection({
  emotion,
  reasons,
  comment,
  onReset,
  profileName = PROFILE_NAME,
}: ConfirmationSectionProps) {
  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-6 text-sm text-slate-600 shadow-sm">
      <div>
        <span className="flex items-center gap-2 text-2xl font-extrabold text-slate-900">
          <CheckCircle2Icon size={24} className="text-green-600" aria-hidden="true" />
          감사합니다, {profileName}님 💚
        </span>
        <p className="mt-1 text-sm text-slate-500">
          오늘의 피드백이 사장님에게 전달되었습니다. 사장님이 답글을 남기면 알림으로 알려드릴게요.
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          <GiftIcon size={18} aria-hidden="true" />
          <span>500원 할인 쿠폰이 발급되었습니다.</span>
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-600">
          <BellIcon size={18} aria-hidden="true" />
          <span>사장님이 답글을 남기면 알림으로 알려드릴게요.</span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
        <dl className="space-y-2 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <dt className="font-semibold text-slate-500">감정</dt>
            <dd>
              {emotion.emoji} {emotion.label}
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-semibold text-slate-500">기억에 남은 점</dt>
            <dd className="text-slate-700">
              {reasons.length > 0
                ? reasons
                    .map((reasonValue) => reasonOptions.find((opt) => opt.value === reasonValue))
                    .filter(Boolean)
                    .map((matched) => `${matched!.icon} ${matched!.label}`)
                    .join(", ")
                : "선택 항목 없음"}
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-semibold text-slate-500">코멘트</dt>
            <dd>{comment}</dd>
          </div>
        </dl>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex h-11 w-full items-center justify-center rounded-full border border-slate-200 text-sm font-semibold text-slate-700 transition hover:scale-[1.01]"
      >
        다시 남기기
      </button>
    </section>
  );
}

