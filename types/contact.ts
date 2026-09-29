export type InquiryType =
  | "enterprise_pilot"
  | "telemetry_hardware"
  | "tariff_audit"
  | "partnership"
  | "general_inquiry";

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  inquiryType: InquiryType;
  message: string;
}

export type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export type FormSubmissionStatus = "idle" | "submitting" | "success" | "error";

export interface ContactFormState {
  data: ContactFormData;
  errors: FormErrors;
  status: FormSubmissionStatus;
  errorMessage?: string;
  isDismissed: boolean;
}
