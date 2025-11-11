"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import CommonNavigationBar from "@/components/common/CommonNavigationBar";
import CommonRoundedButton from "@/components/common/CommonRoundedButton";
import CommonStoreSection from "@/components/common/CommonStoreSection";
import EmotionSection from "@/components/review-write/EmotionSection";
import ReasonSection from "@/components/review-write/ReasonSection";
import CommentSection, { commentSuggestions } from "@/components/review-write/CommentSection";
import { EmotionOption, StoreInfo } from "@/components/review-write/sharedConstants";

const reviewStore: StoreInfo = {
  name: "카페 모노그레이",
  category: "스페셜티 카페 · 디저트",
  address: "서울 강남구 테헤란로 23길 12",
  reviewCount: "48",
  image: "/images/review-cafe-1.webp",
};

export default function ReviewWritePage() {
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionOption | null>(null);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const trimmedComment = comment.trim();
  const isReady = !!selectedEmotion && selectedReasons.length > 0 && trimmedComment.length > 0;

  const toggleReason = (reason: string) => {
    setSelectedReasons((prev) =>
      prev.includes(reason) ? prev.filter((item) => item !== reason) : [...prev, reason],
    );
  };

  const handleSubmit = async () => {
    if (!isReady || isSubmitting) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800)); // TODO: connect to backend
    setIsSubmitting(false);
    setSelectedEmotion(null);
    setSelectedReasons([]);
    setComment("");
  };

  const isActiveSubmit = isReady && !isSubmitting;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <CommonNavigationBar
        backgroundClassName="bg-slate-50"
        title="리뷰 작성"
        leftButton={
          <Link
            href="/main_user"
            className="inline-flex h-10 w-10 items-center justify-center text-slate-600 transition hover:scale-105 hover:text-slate-900"
            aria-label="피드백 홈으로 돌아가기"
          >
            <ArrowLeftIcon size={20} aria-hidden="true" />
          </Link>
        }
        className="sticky top-0 z-10 h-[50px] bg-gray-50"
      />

      <main className="flex flex-1 flex-col gap-10 px-5 pb-16 pt-2">
        <CommonStoreSection
            store={reviewStore}
            className="shadow-[0_30px_70px_-55px_rgba(15,23,42,0.35)]"
            imageSize={80}
            ratingLabel="리뷰"
          />


        <EmotionSection selectedEmotion={selectedEmotion} onSelect={setSelectedEmotion} />

        <ReasonSection selectedReasons={selectedReasons} onToggle={toggleReason} />

        <CommentSection
          comment={comment}
          onChange={setComment}
          suggestions={commentSuggestions}
          onSuggestionClick={setComment}
        />

        <CommonRoundedButton
          type="button"
          onClick={handleSubmit}
          disabled={!isReady || isSubmitting}
          backgroundClassName={isActiveSubmit ? "bg-slate-900 hover:bg-slate-800" : "bg-slate-200"}
          textClassName={isActiveSubmit ? "text-white" : "text-slate-500"}
          paddingClassName="px-4"
          className="h-12 w-full"
          disabledClassName="cursor-not-allowed"
          isLoading={isSubmitting}
        >
          {isSubmitting ? "남기는 중..." : "피드백 보내기"}
        </CommonRoundedButton>
      </main>
    </div>
  );
}
