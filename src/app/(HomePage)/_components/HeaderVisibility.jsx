'use client';

import { usePathname } from "next/navigation";
import Header from "./Header";


const hiddenRoutes = ["/sign-in", "/sign-up", "/onboarding"]; // Add others as needed

export default function HeaderVisibility() {
  const pathname = usePathname();

  const shouldHide = hiddenRoutes.some(route => pathname.startsWith(route));

  if (shouldHide) return null;

  return <Header />;
}
