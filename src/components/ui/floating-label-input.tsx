
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FloatingLabelInput({
  label,
  value,
  onChange,
  className,
  ...props
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || (value && String(value).length > 0);

  return (
    <div className="relative">
      <input
        value={value}
        onChange={onChange}
        className={cn(
          "block w-full h-[52px] px-4 pt-5 pb-2 text-base bg-white border rounded-[5px] border-[rgba(222,222,222,1)] border-solid focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      <label
        className={cn(
          "absolute duration-300 left-4 pointer-events-none",
          isActive
            ? "transform -translate-y-3 text-xs text-gray-500"
            : "transform translate-y-0 top-1/4 text-gray-400"
        )}
      >
        {label}
      </label>
    </div>
  );
}
