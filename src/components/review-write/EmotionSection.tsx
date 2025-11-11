import { EmotionOption, emotionOptions, PROFILE_NAME } from "./sharedConstants";

type EmotionSectionProps = {
  selectedEmotion: EmotionOption | null;
  onSelect: (emotion: EmotionOption) => void;
};

export default function EmotionSection({ selectedEmotion, onSelect }: EmotionSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <span className="text-xl font-extrabold text-slate-900">{`${PROFILE_NAME}님, 오늘 어떠셨나요?`}</span>
        <p className="mt-1 text-sm text-slate-500">방문 경험을 가장 잘 표현하는 감정을 선택해주세요.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {emotionOptions.map((emotion) => {
          const isActive = selectedEmotion?.value === emotion.value;
          return (
            <button
              key={emotion.value}
              type="button"
              onClick={() => onSelect(emotion)}
              className={`flex flex-col justify-between rounded-2xl px-4 py-4 text-left transition ${
                isActive
                  ? "bg-blue-50 text-blue-700 shadow-[0_30px_60px_-30px_rgba(37,99,235,0.55)]"
                  : "bg-white text-slate-700 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.35)] hover:shadow-[0_30px_70px_-45px_rgba(15,23,42,0.4)]"
              }`}
            >
              <span className="text-lg mb-1">{emotion.emoji}</span>
              <span className={`mb-1 text-sm ${isActive ? "font-semibold" : "font-medium"}`}>
                {emotion.label}
              </span>
              <span className="text-xs text-slate-400">{emotion.description}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export type { EmotionOption };

