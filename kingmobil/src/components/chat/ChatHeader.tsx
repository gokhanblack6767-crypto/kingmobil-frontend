import React from "react";
import { ChevronLeft } from "lucide-react";

type ChatHeaderProps = {
  name: string;
  ownerName?: string | null;
  ownerRole?: string | null;
  description?: string | null;
  ownerAvatar?: string | null;
  mobileActions?: React.ReactNode;
  mobileVoiceSlots?: React.ReactNode;
  mobileBackgroundImage?: string | null;
  onMobileBack?: () => void;
};

export const ChatHeader = ({
  name,
  ownerName,
  description,
  ownerAvatar,
  mobileActions,
  mobileVoiceSlots,
  onMobileBack,
}: ChatHeaderProps) => {
  const displayOwnerLabel = "Oda Sahibi";
  const displayOwnerUsername = ownerName || "-";
  const displayDescription = description || "Çevrimiçi";

  return (
    <>
      <header
        className="chat-theme-mobile-header relative overflow-hidden bg-transparent px-2 pt-2 text-white md:hidden"
      >
        <div className="flex items-center justify-between gap-1">
          <div className="flex min-w-0 items-center gap-1">
            <button
              type="button"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/18 p-[1px] shadow-[0_1px_4px_rgba(0,0,0,0.28)] ring-1 ring-white/10 transition-opacity active:opacity-70"
              aria-label="Geri"
              onClick={() => {
                if (onMobileBack) {
                  onMobileBack();
                  return;
                }
                if (typeof window !== "undefined") window.history.back();
              }}
            >
              <span className="flex h-full w-full items-center justify-center rounded-full bg-black/72 backdrop-blur-md">
                <ChevronLeft className="h-[18px] w-[18px] text-white stroke-[2.5]" />
              </span>
            </button>
            <div className="flex h-6 min-w-0 rounded-full bg-white/18 p-[1px] shadow-[0_1px_4px_rgba(0,0,0,0.28)] ring-1 ring-white/10">
              <div className="flex h-full min-w-0 items-center gap-1 rounded-full bg-black/72 py-0.5 pl-0.5 pr-2 backdrop-blur-md">
                {ownerAvatar ? (
                  <img
                    src={ownerAvatar}
                    alt={displayOwnerLabel}
                    className="h-[18px] w-[18px] shrink-0 rounded-sm object-cover"
                  />
                ) : (
                  <div className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-sm bg-zinc-800 text-[6px] font-bold">
                    ROOT
                  </div>
                )}
                <div className="min-w-0 leading-tight">
                  <h1 className="truncate text-[11px] font-bold text-white drop-shadow-sm">
                    {decodeURIComponent(name)}
                  </h1>
                  <span className="line-clamp-1 text-[8px] font-medium text-white/80">
                    Sahibi : {decodeURIComponent(displayOwnerUsername)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {mobileActions ? (
            <div className="flex shrink-0 items-center gap-1">
              {mobileActions}
            </div>
          ) : null}
        </div>

        {mobileVoiceSlots ? (
          <div className="mt-3 grid grid-cols-5 gap-1.5 px-0">
            {mobileVoiceSlots}
          </div>
        ) : null}
      </header>

      <header className="chat-theme-header hidden min-h-14 items-center justify-between gap-3 border-b border-zinc-800 bg-zinc-200 px-3 py-2 md:flex sm:h-16 sm:px-6 sm:py-0">
        <div className="flex min-w-0 items-center gap-2">
          <div className="min-w-0">
            <h1 className="truncate text-base font-bold text-zinc-900 sm:text-lg">
              {decodeURIComponent(name)}
            </h1>
            <span className="line-clamp-1 text-xs text-zinc-500">
              {decodeURIComponent(displayDescription)}
            </span>
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          {ownerAvatar && (
            <img
              src={ownerAvatar}
              alt={displayOwnerLabel}
              className="h-10 w-10 rounded-full object-cover"
            />
          )}
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-zinc-900">
              {displayOwnerLabel}
            </span>
            <span className="text-xs text-zinc-500">
              {decodeURIComponent(displayOwnerUsername)}
            </span>
          </div>
        </div>
      </header>
    </>
  );
};
