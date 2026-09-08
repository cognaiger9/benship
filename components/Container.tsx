import { ReactNode } from "react";

export function Container({
  children,
  size = "wide",
  className = "",
}: {
  children: ReactNode;
  size?: "wide" | "narrow";
  className?: string;
}) {
  const max = size === "narrow" ? "max-w-3xl" : "max-w-5xl";
  return (
    <div className={`mx-auto w-full ${max} px-6 ${className}`}>{children}</div>
  );
}
