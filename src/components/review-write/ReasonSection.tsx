import { reasonOptions } from "./sharedConstants";

type ReasonSectionProps = {
  selectedReasons: string[];
  onToggle: (reason: string) => void;
};

export default function ReasonSection({ selectedReasons, onToggle }: ReasonSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <span className="text-xl font-extrabold text-slate-900">어떤 점이 가장 기억에 남았나요?</span>
        <p className="mt-1 text-sm text-slate-500">여러 개 선택해도 좋아요.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {reasonOptions.map((reason) => {
          const isActive = selectedReasons.includes(reason.value);
          return (
            <button
              key={reason.value}
              type="button"
              onClick={() => onToggle(reason.value)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold shadow-[0_30px_60px_-30px_rgba(37,99,235,0.55)]"
                  : "bg-white text-slate-700 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.35)] hover:shadow-[0_30px_70px_-45px_rgba(15,23,42,0.4)]"
              }`}
            >
              <span aria-hidden="true">{reason.icon}</span>
              {reason.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}

