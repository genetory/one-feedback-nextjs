"use client";

import Link from "next/link";
import { XIcon } from "lucide-react";
import CommonNavigationBar from "@/components/common/CommonNavigationBar";
import CommonRoundedButton from "@/components/common/CommonRoundedButton";
import CommonStoreSection from "@/components/common/CommonStoreSection";
import { StoreInfo } from "@/components/review-write/sharedConstants";

const qrStore: StoreInfo = {
  name: "카페 모노그레이",
  category: "스페셜티 카페 · 디저트",
  address: "서울 강남구 테헤란로 23길 12",
  highlight: "핸드드립과 어쿠스틱 음악이 인기예요",
  reviewCount: "48",
  image: "/images/review-cafe-1.webp",
};

export default function QREntrancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <CommonNavigationBar
        backgroundClassName="bg-slate-50"
        leftButton={
          <Link
            href="/main_user"
            className="inline-flex h-10 w-10 items-center justify-center text-slate-600 transition hover:scale-105 hover:text-slate-900"
            aria-label="메인으로 돌아가기"
          >
            <XIcon size={20} aria-hidden="true" />
          </Link>
        }
        className="sticky top-0 z-10 h-[50px] bg-gray-50"
      />

      <main className="flex flex-1 flex-col gap-6 px-5 pb-12 pt-2">
        <CommonStoreSection
          store={qrStore}
          className="shadow-[0_30px_70px_-55px_rgba(15,23,42,0.35)]"
          imageSize={80}
          ratingLabel="리뷰"
          highlight={qrStore.highlight}
        />

        <section className="flex flex-col gap-4 rounded-3xl bg-white px-4 py-6 shadow-[0_30px_70px_-55px_rgba(15,23,42,0.25)]">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-blue-600">리뷰 작성 안내</span>
            <h2 className="text-2xl font-extrabold text-slate-900">방문한 곳에 대해 남겨볼까요?</h2>
            <p className="text-sm text-slate-500">
              {qrStore.name}에서 QR을 찍은 것이 확인되었어요. 이번 방문은 익명이 아닌 <strong>지윤님 이름으로</strong>{" "}
              기록돼 사장님에게 바로 전달됩니다.
            </p>
          </div>

          <ul className="flex flex-col gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
            <li>• 감정을 선택하고, 기억에 남은 이유를 골라주세요.</li>
            <li>• 한 줄 코멘트는 자동 제안을 참고해도 좋아요.</li>
            <li>• 남긴 리뷰는 언제든 확인할 수 있어요.</li>
          </ul>

          <div className="flex flex-col gap-3 pt-2">
            <Link href="/review_write" className="block">
              <CommonRoundedButton className="h-12 w-full" paddingClassName="px-4">
                리뷰 작성 계속하기
              </CommonRoundedButton>
            </Link>
            <Link
              href="/main_user"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-transparent text-sm font-semibold text-slate-500 transition hover:text-slate-700"
            >
              나중에 작성할게요
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

