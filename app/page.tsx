"use client";
import { useRouter } from "next/navigation";
import FullScreenLoading from "@/components/common/full-screen-loading";
import { useSession } from "@/lib/auth-client";

export default function Main() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  if (session) {
    router.replace("/home");
  }

  if (!isPending && !session) {
    router.replace("/login");
  }

  return <FullScreenLoading />;
}
