import CommonStoreCard from "@/components/common/CommonStoreCard";
import { StoreInfo } from "@/components/review-write/sharedConstants";

type RecommendStoreSectionProps = {
  stores: StoreInfo[];
  title?: string;
  className?: string;
};

export default function RecommendStoreSection({
  stores,
  title = "방문해볼만한 곳",
  className = "",
}: RecommendStoreSectionProps) {
  if (!stores || stores.length === 0) {
    return null;
  }

  return (
    <section className={`flex flex-col gap-4 px-4 pt-10 ${className}`}>
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      </header>

      <div className="-mx-4">
        <div className="overflow-x-auto px-4 pb-4 pt-2">
          <div className="flex gap-3 after:block after:w-1 after:shrink-0 after:content-['']">
            {stores.map((store) => (
              <CommonStoreCard
                key={`${store.name}-${store.address}`}
                store={store}
                className="w-[200px] shrink-0"
                ratingLabel="리뷰"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

