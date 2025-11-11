"use client";

import { CheckIcon, ListIcon, ArrowLeftIcon, FilterIcon, ListFilter } from "lucide-react";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import CommonNavigationBar from "@/components/common/CommonNavigationBar";
import CommonFeedbackCard from "@/components/common/CommonFeedbackCard";
import { feedbacks, statusBadge } from "./data";

const SORT_LABELS: Record<"desc" | "asc", string> = {
  desc: "최신순",
  asc: "오래된순",
};

type ReviewListViewProps = {
  title?: string;
  backHref?: string;
  showBackButton?: boolean;
};

export default function ReviewListView({
  title = "내가 남긴 피드백",
  backHref = "/",
  showBackButton = true,
}: ReviewListViewProps) {
  const [isFilterMounted, setIsFilterMounted] = useState(false);
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  const toggleFilter = useCallback(() => {
    if (isFilterMounted) {
      setIsSheetVisible(false);
    } else {
      setIsFilterMounted(true);
      requestAnimationFrame(() => setIsSheetVisible(true));
    }
  }, [isFilterMounted]);

  const handleSelectOrder = useCallback((order: "desc" | "asc") => {
    setSortOrder(order);
    setIsSheetVisible(false);
  }, []);

  const sortedFeedbacks = useMemo(() => {
    const clone = [...feedbacks];
    return clone.sort((a, b) => {
      const [am, ad] = a.date.split(".").map(Number);
      const [bm, bd] = b.date.split(".").map(Number);
      const aValue = am * 100 + ad;
      const bValue = bm * 100 + bd;
      return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
    });
  }, [sortOrder]);

  const filterButton = (
    <button
      type="button"
      onClick={toggleFilter}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-600 transition hover:scale-105 hover:text-slate-900"
    >
      <ListIcon size={16} aria-hidden="true" />
      {SORT_LABELS[sortOrder]}
    </button>
  );

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <CommonNavigationBar
        title={title}
        leftButton={
          showBackButton ? (
            <Link
              href={backHref}
              className="inline-flex h-10 w-10 items-center justify-center text-slate-600 transition hover:scale-105 hover:text-slate-900"
              aria-label="이전 화면으로 돌아가기"
            >
              <ArrowLeftIcon size={20} aria-hidden="true" />
            </Link>
          ) : (
            <span aria-hidden="true" />
          )
        }
        className="sticky top-0 z-10 h-[50px] border-b border-slate-100 bg-white"
      />

      <div className="flex justify-end px-5 pt-4">
        <button
          type="button"
          onClick={toggleFilter}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-600 transition hover:scale-105 hover:text-slate-900"
        >
          <ListFilter size={16} aria-hidden="true" />
          {SORT_LABELS[sortOrder]}
        </button>
      </div>

      <section className="flex flex-1 flex-col gap-4 px-5 pb-10 pt-4">
        <ul className="flex flex-col gap-3">
          {sortedFeedbacks.map((feedback) => (
            <CommonFeedbackCard
              key={feedback.id}
              feedback={feedback}
              badge={statusBadge[feedback.status]}
            />
          ))}
        </ul>
      </section>

      {isFilterMounted && (
        <>
          <button
            type="button"
            className={`fixed inset-0 z-20 bg-black/60 transition-opacity duration-200 ${
              isSheetVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsSheetVisible(false)}
            aria-label="필터 닫기"
          />
          <div
            className={`fixed inset-x-0 bottom-0 z-30 rounded-t-3xl bg-white px-6 pb-8 pt-6 shadow-[0_-20px_60px_-40px_rgba(15,23,42,0.45)] transition-transform duration-250 ${
              isSheetVisible ? "translate-y-0" : "translate-y-full"
            }`}
            onTransitionEnd={() => {
              if (!isSheetVisible) {
                setIsFilterMounted(false);
              }
            }}
          >
            <div className="mx-auto flex w-full max-w-md flex-col">
              <h2 className="text-sm font-semibold text-slate-500">정렬 기준</h2>
              <ul className="mt-2 divide-y divide-slate-100">
                <li>
                  <button
                    type="button"
                    onClick={() => handleSelectOrder("desc")}
                    className="flex w-full items-center justify-between py-3 text-sm text-slate-700"
                  >
                    최신순
                    <span
                      aria-hidden="true"
                      className={`text-lg font-semibold ${
                        sortOrder === "desc" ? "text-slate-900" : "text-slate-300"
                      }`}
                    >
                      <CheckIcon size={24} aria-hidden="true" />
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSelectOrder("asc")}
                    className="flex w-full items-center justify-between py-3 text-sm text-slate-700"
                  >
                    오래된순
                    <span
                      aria-hidden="true"
                      className={`text-lg font-semibold ${
                        sortOrder === "asc" ? "text-slate-900" : "text-slate-300"
                      }`}
                    >
                      <CheckIcon size={24} aria-hidden="true" />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}


