"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (router) {
      router.replace("/Login"); // Use replace() to prevent history stacking
    }
  }, [router]);

  return <p>Redirecting...</p>; // Display message while redirecting
}
