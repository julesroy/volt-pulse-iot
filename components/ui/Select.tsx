import React, { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, helperText, id, className = "", required, ...props }, ref) => {
    const selectId = id || props.name;

    return (
      <div className="w-full flex flex-col gap-1.5">
        <label
          htmlFor={selectId}
          className="text-xs font-medium text-zinc-300 flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-primary ml-1">*</span>}
          </span>
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${selectId}-error` : undefined}
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-900/60 border text-zinc-100 placeholder:text-zinc-500 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed appearance-none cursor-pointer pr-10 ${
              error
                ? "border-red-500/80 focus:ring-red-500/30 focus:border-red-500"
                : "border-zinc-800 hover:border-zinc-700"
            } ${className}`}
            {...props}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-zinc-900 text-zinc-100 py-1"
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400">
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>
        {error ? (
          <p id={`${selectId}-error`} className="text-xs text-red-400 mt-0.5">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-xs text-zinc-500 mt-0.5">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
