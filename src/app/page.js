import { redirect } from "next/navigation";

export default function Page() {
  redirect("/Login"); // Server-side redirect (better for SEO)
}
