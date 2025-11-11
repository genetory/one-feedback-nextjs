"use client";

import CommonStoreSection from "@/components/common/CommonStoreSection";
import { FeedbackItem, StatusBadge } from "@/components/main-user/types";
import { StoreInfo } from "@/components/review-write/sharedConstants";
import ReviewCommentListView from "./ReviewCommentListView";
import { ReviewComment } from "@/components/review-list/data";

type ReviewDetailViewProps = {
  feedback: FeedbackItem;
  badge: StatusBadge;
  comments?: ReviewComment[];
};

export default function ReviewDetailView({ feedback, badge, comments }: ReviewDetailViewProps) {
  const store: StoreInfo = {
    name: feedback.place,
    category: feedback.tone,
    address: feedback.address,
    image: feedback.photos?.[0],
    reviewCount: "32"
  };

  return (
    <main className="flex flex-col bg-white">
      <div className="px-4 pb-6 pt-2">
        <CommonStoreSection
          store={store}
          imageSize={80}
          ratingLabel="리뷰"
          backgroundClassName="bg-slate-50"
        />
      </div>

      <section className="flex flex-1 flex-col gap-6 bg-white px-5 pb-8 pt-0">
        {feedback.photos && feedback.photos.length > 0 && (
          <div className="-mx-5 flex overflow-x-auto px-5 pb-2">
            <div className="flex gap-3">
              {feedback.photos.map((photo) => (
                <div
                  key={photo}
                  className="h-36 w-48 shrink-0 overflow-hidden rounded-2xl bg-slate-100"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt=""
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


