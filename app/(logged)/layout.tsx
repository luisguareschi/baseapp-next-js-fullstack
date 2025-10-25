"use client";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  if (!isPending && !session) {
    router.replace("/login");
  }

  return <>{children}</>;
}
