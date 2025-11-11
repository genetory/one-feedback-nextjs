"use client";

import Link from "next/link";
import { FeedbackItem, StatusBadge } from "@/components/main-user/types";
import ReviewCommentListView from "./ReviewCommentListView";
import { ReviewComment } from "@/components/review-list/data";

type ReviewDetailViewProps = {
  feedback: FeedbackItem;
  badge: StatusBadge;
  comments?: ReviewComment[];
};

export default function ReviewDetailView({ feedback, badge, comments }: ReviewDetailViewProps) {
  return (
    <main className="flex flex-col bg-slate-50">
      <section className="flex flex-1 flex-col gap-6 bg-white px-5 pb-8 pt-0">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-slate-900">{feedback.place}</h1>
          <span className="text-sm text-slate-500">{feedback.address}</span>
        </div>

        {feedback.photos && feedback.photos.length > 0 && (
          <div className="-mx-5 flex overflow-x-auto px-5 pb-2">
            <div className="flex gap-3">
              {feedback.photos.map((photo, index) => (
                <div
                  key={photo}
                  className="h-36 w-48 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt={``}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <article className="flex flex-col gap-3 text-base leading-7 text-slate-700">
          <p>{feedback.message}</p>
          <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
            <span>방문일 {feedback.date}</span>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold uppercase ${badge.className}`}
            >
              <span>{badge.icon}</span>
              {badge.label}
            </span>
          </div>
        </article>
      </section>

      <ReviewCommentListView comments={comments} />
    </main>
  );
}


