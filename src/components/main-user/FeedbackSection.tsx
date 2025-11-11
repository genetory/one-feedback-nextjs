import Link from "next/link";
import CommonFeedbackCard from "../common/CommonFeedbackCard";
import CommonRoundedButton from "../common/CommonRoundedButton";
import { FeedbackItem, StatusBadgeMap } from "./types";

type FeedbackSectionProps = {
  feedbacks: FeedbackItem[];
  statusBadge: StatusBadgeMap;
};

export default function FeedbackSection({ feedbacks, statusBadge }: FeedbackSectionProps) {
  return (
    <section className="flex flex-col gap-5 px-5 pt-10">
      <header>
        <h2 className="text-lg font-semibold text-slate-900">내가 남긴 피드백</h2>
      </header>

      <ul className="flex flex-col gap-3">
        {feedbacks.map((feedback) => (
          <CommonFeedbackCard
            key={feedback.id}
            feedback={feedback}
            badge={statusBadge[feedback.status]}
          />
        ))}
      </ul>

      <div className="pt-2">
        <Link href="/review_list" className="block">
          <CommonRoundedButton
            className="h-[50px] w-full"
            paddingClassName="px-4"
            fontClassName="text-md font-bold"
          >
            전체 리뷰 보러가기
          </CommonRoundedButton>
        </Link>
      </div>
    </section>
  );
}
