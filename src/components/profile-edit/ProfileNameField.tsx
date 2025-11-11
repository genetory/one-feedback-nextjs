type Props = {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
};

export default function ProfileNameField({ value, onChange, maxLength = 20 }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="profile-name" className="text-sm font-semibold text-slate-700">
        닉네임
      </label>
      <input
        id="profile-name"
        type="text"
        value={value}
        maxLength={maxLength}
        placeholder="닉네임을 입력하세요"
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-xl border-0 bg-slate-50 px-4 text-sm text-slate-900 focus:outline-none"
        required
      />
      <p className="text-xs text-slate-400">
        다른 사용자에게 보여지는 이름으로 최대 {maxLength}자까지 가능합니다.
      </p>
    </div>
  );
}


