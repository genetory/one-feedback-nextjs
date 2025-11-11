import { ButtonHTMLAttributes, ReactNode } from "react";

type CommonRoundedButtonProps = {
  children: ReactNode;
  paddingClassName?: string;
  backgroundClassName?: string;
  textClassName?: string;
  fontClassName?: string;
  shadowClassName?: string;
  disabledClassName?: string;
  isLoading?: boolean;
  spinner?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function CommonRoundedButton({
  children,
  paddingClassName = "px-4 py-3",
  backgroundClassName = "bg-slate-900 hover:bg-slate-800",
  textClassName = "text-white",
  fontClassName = "text-md font-semibold",
  shadowClassName = "shadow-sm",
  disabledClassName = "opacity-60 cursor-not-allowed hover:bg-current",
  className = "",
  disabled,
  isLoading = false,
  spinner = null,
  ...props
}: CommonRoundedButtonProps) {
  const isDisabled = disabled || isLoading;
  return (
    <button
      {...props}
      disabled={isDisabled}
      className={`inline-flex items-center justify-center rounded-full transition-transform duration-150 will-change-transform ${paddingClassName} ${backgroundClassName} ${textClassName} ${fontClassName} ${shadowClassName} ${isDisabled ? disabledClassName : ""} ${className}`}
    >
      {isLoading ? spinner ?? <DefaultSpinner aria-label="로딩중" /> : children}
    </button>
  );
}

function DefaultSpinner(props: ButtonHTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent"
    />
  );
}

