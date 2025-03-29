
import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isFilled, setIsFilled] = React.useState(false);
    
    React.useEffect(() => {
      // Check if the input has a value on mount
      if (props.value) {
        setIsFilled(true);
      }
    }, [props.value]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (props.onFocus) props.onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setIsFilled(!!e.target.value);
      if (props.onBlur) props.onBlur(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsFilled(!!e.target.value);
      if (props.onChange) props.onChange(e);
    };

    return (
      <div className="relative">
        {label && (
          <label
            className={cn(
              "absolute transition-all duration-200 pointer-events-none text-muted-foreground",
              (isFocused || isFilled) 
                ? "text-xs transform -translate-y-2.5 top-1 left-3" 
                : "text-base top-1/2 -translate-y-1/2 left-3",
              isFocused && "text-primary",
              error && "text-destructive"
            )}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            label && "pt-5 pb-1",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        {error && (
          <p className="text-xs text-destructive mt-1">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
