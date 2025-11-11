"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import CommonNavigationBar from "@/components/common/CommonNavigationBar";
import CommonRoundedButton from "@/components/common/CommonRoundedButton";
import ProfileAvatarField from "@/components/profile-edit/ProfileAvatarField";
import ProfileNameField from "@/components/profile-edit/ProfileNameField";

const defaultProfile = {
  name: "지윤",
  avatarEmoji: "🧋",
};

export default function ProfileEditPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState(defaultProfile.name);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const trimmedName = name.trim();
  const isNameValid = trimmedName.length > 0;

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setAvatarPreview((previous) => {
      if (previous && previous.startsWith("blob:")) {
        URL.revokeObjectURL(previous);
      }
      return objectUrl;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isNameValid) {
      return;
    }
    setIsSubmitting(true);

    // TODO: Connect to API when backend is ready.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    router.push("/");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <CommonNavigationBar
        title="프로필 편집"
        leftButton={
          <Link
            href="/"
            className="inline-flex h-10 w-10 items-center justify-center text-slate-600 transition hover:scale-105 hover:text-slate-900"
            aria-label="이전 화면으로 돌아가기"
          >
            <ArrowLeftIcon size={20} aria-hidden="true" />
          </Link>
        }
        className="sticky top-0 z-10 h-[50px] bg-white"
      />

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-12 px-5 pt-4">
        <section className="flex flex-col gap-6">
          <ProfileAvatarField
            ref={fileInputRef}
            avatarEmoji={defaultProfile.avatarEmoji}
            previewUrl={avatarPreview}
            onAvatarClick={handleAvatarClick}
            onFileChange={handleAvatarChange}
            onReset={() => setAvatarPreview(null)}
          />

          <ProfileNameField value={name} onChange={setName} />
        </section>

        <div className="mt-auto pb-6">
          <CommonRoundedButton
            type="submit"
            disabled={isSubmitting || !isNameValid}
            backgroundClassName={
              isSubmitting || !isNameValid ? "bg-slate-200" : "bg-slate-900 hover:bg-slate-800"
            }
            textClassName={isSubmitting || !isNameValid ? "text-slate-500" : "text-white"}
            paddingClassName="px-4"
            className="h-12 w-full"
            disabledClassName="cursor-not-allowed"
            isLoading={isSubmitting}
          >
            {isSubmitting ? "저장 중..." : "저장"}
          </CommonRoundedButton>
        </div>
      </form>
    </div>
  );
}



