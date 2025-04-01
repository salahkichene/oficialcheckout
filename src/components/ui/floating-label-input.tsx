
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

  // For select elements, we always want to show the label at the top
  // since they always have a selected value
  useEffect(() => {
    if (as === "select") {
      setIsFilled(true);
    }
  }, [as]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setIsFilled(e.target.value.length > 0);
    if (onChange) onChange(e as any);
  };

  // Improved styles for select elements vs. inputs
  const sharedStyles = cn(
    "h-[52px] w-full bg-white rounded-[5px] border border-solid px-[11px] text-black transition-all duration-200",
    // Reduced top padding for better vertical alignment
    isFilled ? "pt-5 pb-2" : "py-4", 
    "placeholder-transparent", // Hide the default placeholder
    isFocused ? "border-[#1773b0] outline-none" : "border-[#dedede]",
    error ? "border-red-500" : "",
    as === "select" && "appearance-none pr-8", // Added right padding for chevron
    className
  );

  const renderInput = () => {
    if (as === "select") {
      return (
        <select
          value={value as string}
          className={sharedStyles}
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

  // Added custom chevron rendering
  const renderChevron = () => {
    if (as === "select") {
      return (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative w-full">
      {renderInput()}
      {/* Improved label positioning - moved up for less gap */}
      {label && (
        <label
          className={cn(
            "absolute left-[11px] transition-all duration-200 pointer-events-none text-[#707070]",
            isFilled ? 
              "top-[3px] text-xs" : // Moved up from top-[6px] for less gap
              "text-base top-1/2 -translate-y-1/2", // Centered when empty 
            isFocused && "text-[#1773b0]", // Blue color when focused
            error ? "text-red-500" : "",
            // Additional tweaks for select elements
            as === "select" && isFilled && "top-[3px]"
          )}
        >
          {label}
        </label>
      )}
      {/* Custom chevron icon for select elements */}
      {renderChevron()}
      {error && (
        <span className="text-red-500 text-xs mt-1 block">
          {error}
        </span>
      )}
    </div>
  );
}
