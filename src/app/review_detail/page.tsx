import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import CommonNavigationBar from "@/components/common/CommonNavigationBar";
import ReviewDetailView from "@/components/review-detail/ReviewDetailView";
import { feedbacks, statusBadge } from "@/components/review-list/data";

type ReviewDetailPageProps = {
  searchParams?: Promise<{
    id?: string;
  }>;
};

export default async function ReviewDetailPage({ searchParams }: ReviewDetailPageProps) {
  const params = searchParams ? await searchParams : {};
  const id = params.id;

  if (!id) {
    return notFound();
  }

  const feedback = feedbacks.find((item) => item.id === id);

  if (!feedback) {
    return notFound();
  }

  const badge = statusBadge[feedback.status];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <CommonNavigationBar
        backgroundClassName="bg-white"
        leftButton={
          <Link
            href="/review_list"
            className="inline-flex h-10 w-10 items-center justify-center text-slate-600 transition hover:scale-105 hover:text-slate-900"
            aria-label="리스트로 돌아가기"
          >
            <ArrowLeftIcon size={20} aria-hidden="true" />
          </Link>
        }
        className="sticky top-0 z-10 h-[50px]"
      />
      <ReviewDetailView
        feedback={feedback}
        badge={badge}
        comments={feedback.comments}
      />
    </div>
  );
}


