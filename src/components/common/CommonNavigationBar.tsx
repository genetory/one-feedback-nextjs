import { ReactNode } from "react";

type CommonNavigationBarProps = {
  title?: string;
  leftButton?: ReactNode;
  rightButtons?: ReactNode[];
  className?: string;
  backgroundClassName?: string;
};

export default function CommonNavigationBar({
  title,
  leftButton,
  rightButtons = [],
  className = "",
  backgroundClassName = "bg-white",
}: CommonNavigationBarProps) {
  return (
    <nav className={`grid grid-cols-3 items-center px-2 ${backgroundClassName} ${className}`}>
      <div className="flex h-full items-center justify-start">
        {leftButton ?? <span aria-hidden="true" />}
      </div>

      <div className="flex h-full items-center justify-center">
        {title && (
          <span className="text-sm font-semibold text-slate-900">{title}</span>
        )}
      </div>

      <div className="flex h-full items-center justify-end gap-2">
        {rightButtons.map((button, index) => (
          <span key={index}>{button}</span>
        ))}
      </div>
    </nav>
  );
}


