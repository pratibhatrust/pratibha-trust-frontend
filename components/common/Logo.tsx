import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Logo({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={cn("", imageClassName)}>
      <Image
        className={cn("", className)}
        src={"/images/logo.jpeg"}
        width={80}
        height={80}
        alt="pratibha secure trust"
      />
    </div>
  );
}
