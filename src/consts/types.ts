export type FormInputOption = {
  label: string;
  value: string;
};

export type FormInputData = {
  label: string;
  placeholder?: string;
  type: string;
  options?: FormInputOption[];
};
