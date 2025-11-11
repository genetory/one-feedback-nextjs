import { FeedbackItem, StatusBadgeMap } from "@/components/main-user/types";

export type ReviewComment = {
  id: string;
  author: string;
  role: "owner" | "staff";
  message: string;
  date: string;
};

export const feedbacks: (FeedbackItem & { comments?: ReviewComment[] })[] = [
  {
    id: "cafe-monogrey",
    tone: "💚",
    place: "카페 모노그레이",
    message: "음악 분위기 너무 좋아요 🎵",
    date: "11.09",
    status: "confirmed",
    address: "서울 강남구 테헤란로 23길 12",
    photos: ["/images/review-cafe-1.webp", "/images/review-cafe-2.webp"],
    comments: [
      {
        id: "cafe-monogrey-reply-1",
        author: "모노그레이 사장님",
        role: "owner",
        message: "좋은 말씀 감사합니다! 다음 방문에도 기분 좋은 음악 준비해둘게요 🎶",
        date: "11.09",
      },
    ],
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
    comments: [],
  },
  {
    id: "hannam-market-1",
    tone: "💬",
    place: "한남 플리마켓",
    message: "분위기 최고예요!",
    date: "10.30",
    status: "replied",
    address: "서울 용산구 독서당로 83",
    photos: [],
    comments: [
      {
        id: "hannam-market-reply-1",
        author: "한남 플리마켓 스태프",
        role: "staff",
        message: "즐거운 경험이 되셨다니 다행이에요! 다음 시즌에는 새로운 셀러도 많이 참여할 예정입니다 😊",
        date: "10.31",
      },
      {
        id: "hannam-market-reply-2",
        author: "한남 플리마켓 사장님",
        role: "owner",
        message: "소중한 피드백 감사합니다. 더 편안한 동선 준비해둘게요!",
        date: "11.01",
      },
    ],
  },
  {
    id: "hannam-market-2",
    tone: "💬",
    place: "한남 플리마켓",
    message: "분위기 최고예요!",
    date: "10.28",
    status: "replied",
    address: "서울 용산구 독서당로 83",
    photos: [],
    comments: [
      {
        id: "hannam-market-2-reply-1",
        author: "한남 플리마켓 스태프",
        role: "staff",
        message: "응원해주셔서 감사해요! 더 많은 이벤트 준비 중이니 기대해주세요.",
        date: "10.29",
      },
    ],
  },
  {
    id: "hannam-market-3",
    tone: "💬",
    place: "한남 플리마켓",
    message: "야외 부스 구성이 다양해져서 좋았어요!",
    date: "10.21",
    status: "replied",
    address: "서울 용산구 독서당로 83",
    photos: [],
    comments: [],
  },
];

export const statusBadge: StatusBadgeMap = {
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
};


