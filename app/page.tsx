import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Welcome to Sporteo</h1>
      <p className="text-gray-600">Book sports venues easily</p>

      <div className="flex gap-4">
        <Link href="/login">
          <Button>Login</Button>
        </Link>

        <Link href="/register">
          <Button variant="outline">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
}
