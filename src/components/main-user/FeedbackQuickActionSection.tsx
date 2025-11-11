import Image from "next/image";
import Link from "next/link";

export default function FeedbackQuickActionSection() {
  return (
    <section className="px-5 pt-6">
      <Link
        href="/qr_entrance"
        className="flex w-full items-center justify-between rounded-2xl bg-blue-600 px-6 py-1 text-white shadow-[0_30px_70px_-40px_rgba(37,99,235,0.65)] transition hover:bg-blue-500 active:scale-[0.99]"
      >
        <div className="flex flex-col gap-1 text-left">
          <span className="text-xl font-extrabold uppercase text-white">
            QR 코드찍고 리뷰남기기
          </span>
          <span className="text-sm text-white/80">
            여러분의 솔직한 리뷰를 남겨주세요
          </span>
        </div>
        <Image
          src="/images/icon_qr.webp"
          alt="QR 코드 아이콘"
          width={52}
          height={52}
          className="h-24 w-24 -mr-4 object-contain"
        />
      </Link>
    </section>
  );
}

