
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  as?: "input" | "select";
}

export function FloatingLabelInput({
  label,
  value,
  onChange,
  className,
  error,
  as = "input",
  children,
  ...props
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  
  useEffect(() => {
    // Check if the input has a value on mount
    if (value || props.defaultValue) {
      setIsFilled(true);
    }
  }, [value, props.defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setIsFilled(e.target.value.length > 0);
    if (onChange) onChange(e as any);
  };

  const sharedStyles = cn(
    "h-[52px] w-full bg-white rounded-[5px] border border-solid px-[11px] text-black transition-all duration-200",
    isFilled ? "pt-7 pb-2" : "py-4", // Adjust vertical padding based on filled state
    "placeholder-transparent", // Hide the default placeholder
    isFocused ? "border-[#1773b0] outline-none" : "border-[#dedede]",
    error ? "border-red-500" : "",
    className
  );

  const renderInput = () => {
    if (as === "select") {
      return (
        <select
          value={value as string}
          className={cn(sharedStyles, "text-center")} // Added text-center class
          onFocus={(e) => {
            setIsFocused(true);
            if (props.onFocus) props.onFocus(e as any);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (props.onBlur) props.onBlur(e as any);
          }}
          onChange={handleChange}
          {...props as any}
        >
          {children}
        </select>
      );
    }

    return (
      <input
        value={value}
        className={sharedStyles}
        placeholder={label || ""}
        onFocus={(e) => {
          setIsFocused(true);
          if (props.onFocus) props.onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          if (props.onBlur) props.onBlur(e);
        }}
        onChange={handleChange as any}
        {...props}
      />
    );
  };

  return (
    <div className="relative w-full">
      {renderInput()}
      {label && (
        <label
          className={cn(
            "absolute left-[11px] transition-all duration-200 pointer-events-none text-[#707070]",
            isFilled ? 
              "top-[6px] text-xs" : // Label moves up only when input has content
              "text-base top-1/2 -translate-y-1/2", // Centered when empty 
            isFocused && "text-[#1773b0]", // Blue color when focused
            error ? "text-red-500" : "",
            as === "select" && isFilled && "z-10" // Ensure the label appears above the select text
          )}
        >
          {label}
        </label>
      )}
      {error && (
        <span className="text-red-500 text-xs mt-1 block">
          {error}
        </span>
      )}
    </div>
  );
}
