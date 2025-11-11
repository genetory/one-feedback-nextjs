import Link from "next/link";
import { FeedbackItem, StatusBadge } from "../main-user/types";

type FeedbackCardProps = {
  feedback: FeedbackItem;
  badge: StatusBadge;
};

export default function FeedbackCard({ feedback, badge }: FeedbackCardProps) {
  return (
    <li>
      <Link
        href={`/review_detail?id=${feedback.id}`}
        className="block rounded-2xl bg-white px-5 py-5 shadow-[0_0_45px_-15px_rgba(15,23,42,0.1)] transition"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-0">
              <span className="text-base font-semibold text-slate-900">
                {feedback.place}
              </span>
              <span className="text-xs text-slate-500">{feedback.address}</span>
            </div>
          </div>
          {feedback.photos && feedback.photos.length > 0 && (
          <PhotoGrid photos={feedback.photos} place={feedback.place} />
          )}
          <p className="text-sm leading-6 text-slate-600">{feedback.message}</p>
          <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
            <span>방문일 {feedback.date}</span>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold uppercase ${badge.className}`}
            >
              <span>{badge.icon}</span>
              {badge.label}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

type PhotoGridProps = Pick<FeedbackItem, "photos" | "place">;

function PhotoGrid({ photos, place }: PhotoGridProps) {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div className="-mx-1 flex overflow-x-auto py-1">
      <div className="flex gap-2 px-1">
        {photos.map((photo, index) => (
          <ImageCard key={photo} src={photo} alt={``} />
        ))}
      </div>
    </div>
  );
}

type ImageCardProps = {
  src: string;
  alt: string;
};

function ImageCard({ src, alt }: ImageCardProps) {
  return (
    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-50">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}


