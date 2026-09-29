"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X, Send } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import {
  ContactFormData,
  FormErrors,
  FormSubmissionStatus,
} from "@/types/contact";

const INQUIRY_OPTIONS = [
  { value: "enterprise_pilot", label: "Enterprise Pilot & Microgrid Staging" },
  { value: "telemetry_hardware", label: "IoT Hardware & Telemetry Specs" },
  { value: "tariff_audit", label: "Peak Tariff & Load Shedding Audit" },
  { value: "partnership", label: "Technology & Infrastructure Partnership" },
  { value: "general_inquiry", label: "General Industrial Energy Inquiry" },
];

const INITIAL_FORM_DATA: ContactFormData = {
  fullName: "",
  workEmail: "",
  companyName: "",
  inquiryType: "enterprise_pilot",
  message: "",
};

// strict email regex matching corporate standard format
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormSubmissionStatus>("idle");
  const [isSuccessDismissed, setIsSuccessDismissed] = useState(false);

  // validate a single field
  const validateField = (
    field: keyof ContactFormData,
    value: string
  ): string | undefined => {
    switch (field) {
      case "fullName":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2)
          return "Full name must be at least 2 characters.";
        return undefined;
      case "workEmail":
        if (!value.trim()) return "Work email is required.";
        if (!EMAIL_REGEX.test(value.trim()))
          return "Please enter a valid business email address.";
        return undefined;
      case "companyName":
        if (!value.trim()) return "Company or facility name is required.";
        if (value.trim().length < 2)
          return "Company name must be at least 2 characters.";
        return undefined;
      case "message":
        if (!value.trim()) return "Message details are required.";
        if (value.trim().length < 15)
          return "Message must be at least 15 characters describing your project.";
        return undefined;
      case "inquiryType":
        if (!value) return "Please select an inquiry type.";
        return undefined;
      default:
        return undefined;
    }
  };

  // validate all fields before submission
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof ContactFormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // instant validation cleanup if the user fixes the error
    if (errors[name as keyof ContactFormData]) {
      const fieldError = validateField(name as keyof ContactFormData, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const fieldError = validateField(name as keyof ContactFormData, value);
    if (fieldError) {
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    // simulate high-reliability asynchronous b2b api dispatch
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setIsSuccessDismissed(false);
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full relative">
      {/* dismissible success confirmation toast / banner */}
      <AnimatePresence>
        {status === "success" && !isSuccessDismissed && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="mb-8 p-5 rounded-xl border border-primary/40 bg-zinc-900/90 backdrop-blur-md shadow-[0_0_30px_rgba(0,207,111,0.15)] flex items-start justify-between gap-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-semibold text-white">
                  Inquiry Dispatched Successfully
                </h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Thank you for reaching out. A VoltPulse systems engineer will
                  review your telemetry requirements and contact you within 24
                  business hours.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsSuccessDismissed(true)}
              className="text-zinc-500 hover:text-zinc-300 transition-colors p-1 rounded-md hover:bg-zinc-800/80 cursor-pointer"
              aria-label="Dismiss confirmation"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* api error banner */}
      {status === "error" && (
        <div className="mb-8 p-4 rounded-xl border border-red-500/30 bg-red-950/20 text-red-300 text-xs flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <span>
            Unable to send inquiry at this time. Please verify your connection or
            reach out directly to our engineering desk.
          </span>
        </div>
      )}

      {/* main interactive form card */}
      <motion.form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col gap-6"
      >
        <div className="border-b border-zinc-800/70 pb-5">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Schedule an Engineering Assessment
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Complete the form below to receive a personalized microgrid audit
            or request IoT hardware specifications.
          </p>
        </div>

        {/* row 1: 2-column inputs for name and email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* column 1: full name */}
          <Input
            id="fullName"
            name="fullName"
            label="Full Name"
            placeholder="Dr. Jordan Hayes"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.fullName}
            required
            disabled={status === "submitting"}
          />
          {/* column 2: work email */}
          <Input
            id="workEmail"
            name="workEmail"
            type="email"
            label="Work Email"
            placeholder="j.hayes@enterprise.com"
            value={formData.workEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.workEmail}
            required
            disabled={status === "submitting"}
          />
        </div>

        {/* row 2: 2-column inputs for company and inquiry type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* column 1: company name */}
          <Input
            id="companyName"
            name="companyName"
            label="Company / Facility Name"
            placeholder="Advanced Logistics Grid Ltd"
            value={formData.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.companyName}
            required
            disabled={status === "submitting"}
          />
          {/* column 2: inquiry type */}
          <Select
            id="inquiryType"
            name="inquiryType"
            label="Inquiry Type"
            options={INQUIRY_OPTIONS}
            value={formData.inquiryType}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.inquiryType}
            required
            disabled={status === "submitting"}
          />
        </div>

        {/* row 3: message textarea */}
        <Textarea
            id="message"
            name="message"
            label="Project Scope / Facility Requirements"
            placeholder="Please describe your facility's current peak load, energy storage setup, or metering specifications..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.message}
            required
            disabled={status === "submitting"}
            helperText="Minimum 15 characters required."
        />

        {/* row 4: submit button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-zinc-500 font-mono">
            * All fields are strictly encrypted and confidential.
          </span>
          <Button
            type="submit"
            variant="primary"
            size="md"
            isLoading={status === "submitting"}
            className="w-full sm:w-auto"
          >
            <Send className="w-4 h-4" />
            <span>Submit Engineering Inquiry</span>
          </Button>
        </div>
      </motion.form>
    </div>
  );
}
