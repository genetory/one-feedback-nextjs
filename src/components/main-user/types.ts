export type ProfileData = {
  name: string;
  avatar: string;
  email: string;
  greeting: string;
  summary: string;
  mood: string;
  highlights: string[];
};

export type FeedbackStatus = "confirmed" | "pending" | "replied";

export type FeedbackItem = {
  id: string;
  tone: string;
  place: string;
  message: string;
  date: string;
  status: FeedbackStatus;
  address: string;
  photos?: string[];
};

export type StatusBadge = {
  label: string;
  icon: string;
  className: string;
};

export type StatusBadgeMap = Record<FeedbackStatus, StatusBadge>;

export type RewardData = {
  title: string;
  weekly: string;
  goal: string;
  progress: number;
};

