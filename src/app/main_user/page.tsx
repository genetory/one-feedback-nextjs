import Link from "next/link";
import { SettingsIcon } from "lucide-react";
import FeedbackSection from "@/components/main-user/FeedbackSection";
import FeedbackQuickActionSection from "@/components/main-user/FeedbackQuickActionSection";
import ProfileSection from "@/components/main-user/ProfileSection";
import RewardSection from "@/components/main-user/RewardSection";
import CommonNavigationBar from "@/components/common/CommonNavigationBar";
import RecommendStoreSection from "@/components/main-user/RecommendStoreSection";
import {
  FeedbackItem,
  ProfileData,
  RewardData,
  StatusBadgeMap,
} from "@/components/main-user/types";
import { StoreInfo } from "@/components/review-write/sharedConstants";

const profileName = "지윤";

const profile: ProfileData = {
  name: profileName,
  avatar: "🧋",
  email: "ji-yoon@example.com",
  greeting: `${profileName}님, 오늘도 좋은 하루예요`,
  summary: "이번주에 3개의 피드백을 남겼어요",
  mood: "오늘은 ‘좋아요’ 키워드가 가장 많았어요 😊",
  highlights: ["사장님 2명이 답글을 남겼어요", "평균 만족도 4.8점"],
};

const feedbacks: FeedbackItem[] = [
  {
    id: "cafe-monogrey",
    tone: "💚",
    place: "카페 모노그레이",
    message: "음악 분위기 너무 좋아요 🎵",
    date: "11.09",
    status: "confirmed",
    address: "서울 강남구 테헤란로 23길 12",
    photos: ["/images/review-cafe-1.webp", "/images/review-cafe-2.webp"],
  },
  {
    id: "menya-jin",
    tone: "🕓",
    place: "멘야진",
    message: "국물은 맛있는데 양이 조금 아쉬워요 😅",
    date: "11.05",
    status: "pending",
    address: "서울 서초구 서초대로77길 24",
    photos: ["/images/review-menya-1.webp"],
  },
  {
    id: "hannam-market",
    tone: "💬",
    place: "한남 플리마켓",
    message: "분위기 최고예요!",
    date: "10.30",
    status: "replied",
    address: "서울 용산구 독서당로 83",
    photos: [],
  },
];

const statusBadge: StatusBadgeMap = {
  confirmed: {
    label: "확인됨",
    icon: "💙",
    className: "bg-blue-600/10 text-blue-700",
  },
  pending: {
    label: "대기중",
    icon: "🕓",
    className: "bg-slate-900/5 text-slate-700",
  },
  replied: {
    label: "사장님 답글",
    icon: "💬",
    className: "bg-sky-500/10 text-sky-700",
  },
} as const;

const reward: RewardData = {
  title: "내가 받은 리워드 💎",
  weekly: "이번주 쿠폰 2개 + 총 피드백 7회",
  goal: "다음 목표: 10회 달성 시 감사쿠폰 🎁",
  progress: 0.7,
};

const recommendedStores: StoreInfo[] = [
  {
    name: "카페 폴인커피",
    category: "스페셜티 카페 · 브런치",
    address: "서울 강남구 논현로 123길 25",
    reviewCount: "124",
    image: "/images/review-cafe-2.webp",
  },
  {
    name: "우라쿠 스시바",
    category: "오마카세 · 스시",
    address: "서울 서초구 사평대로 55길 8",
    reviewCount: "87",
    image: "/images/review-sushi-1.webp",
  },
  {
    name: "라르떼 베이커리",
    category: "베이커리 · 디저트",
    address: "서울 용산구 이태원로 42길 17",
    reviewCount: "203",
    image: "/images/review-bakery-1.webp",
  },
];

export default function MainUserPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <CommonNavigationBar
        rightButtons={[
          <Link
            href="/settings"
            className="inline-flex h-10 w-10 items-center justify-center text-slate-600 transition hover:scale-105 hover:text-slate-900"
            aria-label="설정으로 이동"
          >
            <SettingsIcon size={20} aria-hidden="true" />
          </Link>,
        ]}
        className="sticky top-0 z-10 h-[50px] bg-white"
      />
      <main className="flex-1 overflow-y-auto pb-12">
        <ProfileSection profile={profile} />
        <FeedbackQuickActionSection />
        <FeedbackSection feedbacks={feedbacks} statusBadge={statusBadge} />
        <RecommendStoreSection stores={recommendedStores} />
        {/* <RewardSection reward={reward} /> */}
      </main>
    </div>
  );
}
