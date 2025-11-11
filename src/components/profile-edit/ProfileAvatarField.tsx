import { ChangeEvent, ForwardedRef, forwardRef } from "react";

type Props = {
  avatarEmoji: string;
  previewUrl: string | null;
  onAvatarClick: () => void;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
};

const ACCEPTED_TYPES = "image/png,image/jpeg,image/gif";

function ProfileAvatarField(
  { avatarEmoji, previewUrl, onAvatarClick, onFileChange, onReset }: Props,
  ref: ForwardedRef<HTMLInputElement | null>,
) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={onAvatarClick}
          className="relative flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 text-4xl text-white shadow-[0_25px_60px_-45px_rgba(15,23,42,0.7)] transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white"
          aria-label="프로필 사진 변경"
        >
          {previewUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={previewUrl}
              alt="새 프로필 미리보기"
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <span aria-hidden="true">{avatarEmoji}</span>
          )}
        </button>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onAvatarClick}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:scale-105"
            >
              사진 변경
            </button>
            {previewUrl && (
              <button
                type="button"
                onClick={onReset}
                className="rounded-full border border-transparent px-3 py-2 text-xs font-semibold text-slate-400 transition hover:text-slate-700"
              >
                초기화
              </button>
            )}
          </div>
          <p className="text-xs text-slate-400">PNG, JPG, GIF / 최대 5MB</p>
        </div>
      </div>

      <input
        ref={ref}
        type="file"
        accept={ACCEPTED_TYPES}
        className="hidden"
        onChange={onFileChange}
      />
    </div>
  );
}

export default forwardRef(ProfileAvatarField);


