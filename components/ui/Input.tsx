import React, { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, className = "", required, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="text-xs font-medium text-zinc-300 flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-primary ml-1">*</span>}
          </span>
        </label>
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-900/60 border text-zinc-100 placeholder:text-zinc-500 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed ${
              error
                ? "border-red-500/80 focus:ring-red-500/30 focus:border-red-500"
                : "border-zinc-800 hover:border-zinc-700"
            } ${className}`}
            {...props}
          />
        </div>
        {error ? (
          <p id={`${inputId}-error`} className="text-xs text-red-400 mt-0.5">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-xs text-zinc-500 mt-0.5">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
