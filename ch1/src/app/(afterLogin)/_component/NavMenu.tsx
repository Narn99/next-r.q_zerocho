"use client";

import { useSelectedLayoutSegment } from "next/navigation";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  const me = {
    id: "zerocho0",
  }; // 임시 내 정보

  return <div>Enter</div>;
}
