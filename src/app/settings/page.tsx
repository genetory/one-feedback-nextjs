import Link from "next/link";
import { ArrowLeftIcon, ChevronRightIcon } from "lucide-react";
import CommonNavigationBar from "@/components/common/CommonNavigationBar";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <CommonNavigationBar
        title="설정"
        leftButton={
          <Link
            href="/"
            className="inline-flex h-10 w-10 items-center justify-center text-slate-600 transition hover:scale-105 hover:text-slate-900"
            aria-label="홈으로 돌아가기"
          >
            <ArrowLeftIcon size={20} aria-hidden="true" />
          </Link>
        }
        className="sticky top-0 z-10 h-[50px] bg-white"
      />

      <main className="flex flex-1 flex-col gap-10 px-5 py-2 text-sm text-slate-600">
        <section className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            계정
          </h2>
          <ul className="flex flex-col">
            <li className="flex h-[50px] items-center justify-between px-1 text-sm font-medium text-slate-700">
              <span>계정 관리</span>
              <ChevronRightIcon size={16} className="text-slate-400" aria-hidden="true" />
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            일반
          </h2>
          <ul className="flex flex-col">
            <li className="flex h-[50px] items-center justify-between px-1 text-sm font-medium text-slate-700">
              <span>개발자에게 문의하기</span>
              <ChevronRightIcon size={16} className="text-slate-400" aria-hidden="true" />
            </li>
            <li className="flex h-[50px] items-center justify-between px-1 text-sm font-medium text-slate-700">
              <span>이용약관</span>
              <ChevronRightIcon size={16} className="text-slate-400" aria-hidden="true" />
            </li>
            <li className="flex h-[50px] items-center justify-between px-1 text-sm font-medium text-slate-700">
              <span>개인정보처리방침</span>
              <ChevronRightIcon size={16} className="text-slate-400" aria-hidden="true" />
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            정보
          </h2>
          <ul className="flex flex-col">
            <li className="flex h-[50px] items-center justify-between px-1 text-sm font-medium text-slate-700">
              <span>버전</span>
              <span className="text-xs text-slate-400">v0.1.0</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}


