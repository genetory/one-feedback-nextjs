import Image from "next/image";
import { MapPinIcon, StarIcon } from "lucide-react";
import { StoreInfo } from "@/components/review-write/sharedConstants";

type CommonStoreSectionProps = {
  store: StoreInfo;
  className?: string;
  imageSize?: number;
  highlight?: string;
  ratingLabel?: string;
  imageAlt?: string;
};

export default function CommonStoreSection({
  store,
  className = "",
  imageSize = 64,
  highlight,
  ratingLabel = "리뷰 평점",
  imageAlt,
}: CommonStoreSectionProps) {
  return (
    <section
      className={`flex flex-col gap-4 rounded-3xl bg-white px-4 py-4 shadow-[0_30px_70px_-55px_rgba(15,23,42,0.35)] ${className}`}
    >
      <div className="flex items-center gap-4">
        <div
          className="relative flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100"
          style={{ width: imageSize, height: imageSize }}
        >
          {store.image ? (
            <Image
              src={store.image}
              alt={''}
              fill
              className="object-cover"
              sizes={`${imageSize}px`}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-3xl">{store.avatar ?? "🏬"}</div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-1">
        <h1 className="text-xl font-extrabold text-slate-900">{store.name}</h1>
          {store.address && (
            <span className="text-xs text-slate-500">
              {store.address}
            </span>
          )}
          {store.rating && (
            <span className="inline-flex items-center gap-1 text-xs text-amber-600">
              <span className="font-semibold">{store.rating}</span>
              {ratingLabel && <span className="text-amber-500">{ratingLabel}</span>}
            </span>
          )}
        </div>
      </div>

      {highlight && (
        <p className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
          {highlight}
        </p>
      )}
    </section>
  );
}

