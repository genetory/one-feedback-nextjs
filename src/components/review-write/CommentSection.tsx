import { PROFILE_NAME } from "./sharedConstants";

type CommentSectionProps = {
  comment: string;
  onChange: (value: string) => void;
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
};

export default function CommentSection({
  comment,
  onChange,
  suggestions,
  onSuggestionClick,
}: CommentSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <span className="text-xl font-extrabold text-slate-900">한 줄로 남겨주세요 💬</span>
        <p className="mt-1 text-sm text-slate-500">{PROFILE_NAME}님의 이름으로 남겨지며, 사장님에게 바로 전달돼요.</p>
      </div>

      <textarea
        value={comment}
        onChange={(event) => onChange(event.target.value)}
        rows={3}
        placeholder="예: 분위기가 정말 좋았어요!"
        className="w-full min-h-[240px] resize-none rounded-lg border-0 bg-slate-100 px-4 py-3 text-sm text-slate-700 transition focus:outline-none"
      />

      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => onSuggestionClick(suggestion)}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500 transition hover:border-slate-300"
          >
            “{suggestion}”
          </button>
        ))}
      </div>
    </section>
  );
}

export { commentSuggestions } from "./sharedConstants";

