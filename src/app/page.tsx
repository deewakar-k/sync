import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8">SyncShare</h1>
      <div className="space-x-4">
        <Link href={"/login"}>
          <Button variant="default">User</Button>
        </Link>
        <Link href={"/login"}>
          <Button variant="outline">Business</Button>
        </Link>
      </div>
    </div>
  );
}
