import Image from "next/image";
import { StoreInfo } from "@/components/review-write/sharedConstants";

type CommonStoreCardProps = {
  store: StoreInfo;
  className?: string;
  ratingLabel?: string;
  imageAlt?: string;
};

export default function CommonStoreCard({
  store,
  className = "",
  ratingLabel = "리뷰",
  imageAlt,
}: CommonStoreCardProps) {
  return (
    <article
      className={`flex flex-col gap-3 rounded-2xl bg-white px-3 pt-3 pb-4 shadow-[0_0_45px_-15px_rgba(15,23,42,0.1)] ${className}`}
    >
      <div
        className="relative w-full overflow-hidden rounded-xl bg-slate-100 aspect-4/3"
      >
        {store.image ? (
          <Image
            src={store.image}
            alt={imageAlt ?? `${store.name} 썸네일`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 160px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl">
            {store.avatar ?? "🏬"}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-0">
        <h2 className="text-base font-semibold text-slate-900">{store.name}</h2>
        {store.address && <span className="text-xs text-slate-500 mb-2">{store.address}</span>}
        {store.reviewCount && (
          <span className="inline-flex items-center gap-1 text-xs text-slate-600">
            {ratingLabel && <span className="text-slate-400">{ratingLabel}</span>}
            <span className="font-semibold text-slate-900">{store.reviewCount}</span>
          </span>
        )}
      </div>
    </article>
  );
}
