"use client";

import Link from "next/link";
import { ProfileData } from "./types";

type BadgeListProps = {
  items: string[];
};

function BadgeList({ items }: BadgeListProps) {
  return (
    <ul className="mt-5 flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex w-fit items-center rounded-full bg-slate-900/5 px-3 py-2 text-xs font-semibold text-slate-500"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

type ProfileSectionProps = {
  profile: ProfileData;
};

export default function ProfileSection({ profile }: ProfileSectionProps) {
  const [, ...restParts] = profile.greeting.split(", ");
  const remainder = restParts.join(", ");
  const salutation = `${profile.name}님`;
  const badgeItems = [profile.summary, ...profile.highlights];

  return (
    <section className="relative px-5 pt-0">
      <div className="flex items-center justify-between gap-3">
        <Link href="/profile_user" className="flex flex-1 items-center gap-3 text-left">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-2xl text-white shadow-[0_25px_60px_-45px_rgba(15,23,42,0.7)]">
            <span role="img" aria-label="프로필 아바타">
              {profile.avatar}
            </span>
          </div>
          <div className="flex flex-col gap-0">
            <span className="text-2xl font-extrabold text-slate-900">{salutation}</span>
            {remainder && <span className="text-sm text-slate-500">{remainder}</span>}
          </div>
        </Link>
        <Link
          href="/profile_edit"
          className="inline-flex py-2 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-600 transition hover:scale-105 hover:text-slate-900"
        >
          편집
        </Link>
      </div>
      <div className="">
        <BadgeList items={badgeItems} />
      </div>
    </section>
  );
}

