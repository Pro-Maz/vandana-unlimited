import React from "react";

export function Card({ children, className }) {
  return <div className={`rounded-2xl ${className}`}>{children}</div>;
}
export function CardHeader({ children }) {
  return <div className="px-4 pt-4">{children}</div>;
}
export function CardTitle({ children, className }) {
  return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
}
export function CardContent({ children, className }) {
  return <div className={`px-4 pb-4 ${className}`}>{children}</div>;
}
