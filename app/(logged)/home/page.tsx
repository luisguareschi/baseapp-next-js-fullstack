"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Home = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="flex flex-col items-center justify-center p-5 w-fit gap-2">
        <h1>Home</h1>
        <p>Welcome, {user?.name}</p>
        <Button
          onClick={() =>
            signOut(
              {},
              {
                onSuccess: () => {
                  router.push("/login");
                },
              },
            )
          }
          className="w-full"
        >
          Logout
        </Button>
      </Card>
    </div>
  );
};

export default Home;
