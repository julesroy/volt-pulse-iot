import React, { forwardRef } from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, id, className = "", required, ...props }, ref) => {
    const textareaId = id || props.name;

    return (
      <div className="w-full flex flex-col gap-1.5">
        <label
          htmlFor={textareaId}
          className="text-xs font-medium text-zinc-300 flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-primary ml-1">*</span>}
          </span>
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-900/60 border text-zinc-100 placeholder:text-zinc-500 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed resize-y min-h-[120px] ${
            error
              ? "border-red-500/80 focus:ring-red-500/30 focus:border-red-500"
              : "border-zinc-800 hover:border-zinc-700"
          } ${className}`}
          {...props}
        />
        {error ? (
          <p id={`${textareaId}-error`} className="text-xs text-red-400 mt-0.5">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-xs text-zinc-500 mt-0.5">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
