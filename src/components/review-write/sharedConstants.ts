export const PROFILE_NAME = "지윤";

export type EmotionOption = {
  value: "great" | "good" | "neutral" | "bad";
  emoji: string;
  label: string;
  description: string;
};

export const emotionOptions: EmotionOption[] = [
  { value: "great", emoji: "😊", label: "너무 좋았어요", description: "기분 좋은 경험이었어요" },
  { value: "good", emoji: "🙂", label: "괜찮았어요", description: "만족스러운 방문이었어요" },
  { value: "neutral", emoji: "😐", label: "그냥 그랬어요", description: "보통 수준이었어요" },
  { value: "bad", emoji: "😔", label: "조금 아쉬웠어요", description: "개선이 필요했어요" },
];

export type ReasonOption = {
  value: string;
  icon: string;
  label: string;
};

export type StoreInfo = {
  name: string;
  category: string;
  address: string;
  rating?: string;
  image?: string;
  highlight?: string;
  avatar?: string;
};

export const reasonOptions: ReasonOption[] = [
  { value: "food", icon: "🍽️", label: "음식" },
  { value: "kindness", icon: "🧍‍♀️", label: "친절" },
  { value: "mood", icon: "🎵", label: "분위기" },
  { value: "price", icon: "💸", label: "가격" },
  { value: "speed", icon: "⏰", label: "속도" },
  { value: "location", icon: "📍", label: "위치" },
];

export const commentSuggestions = ["친절했어요", "깔끔했어요", "분위기 최고였어요"];

