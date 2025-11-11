"use client";

import CommonCommentCard from "@/components/common/CommonCommentCard";
import { ReviewComment } from "@/components/review-list/data";

type ReviewCommentListViewProps = {
  comments?: ReviewComment[];
};

export default function ReviewCommentListView({ comments }: ReviewCommentListViewProps) {
  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-3 bg-slate-50 px-5 py-8">
      <header className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
          댓글 <span className="text-xs text-slate-400">({comments.length})</span>
        </h2>
      </header>

      <ul className="flex flex-col gap-3">
        {comments.map((comment) => (
          <CommonCommentCard
            key={comment.id}
            author={comment.author}
            date={comment.date}
            message={comment.message}
          />
        ))}
      </ul>
    </section>
  );
}


