export const cepRegex = /^(\d{5})-(\d{3})$/;

export const validateCep = (value: string | undefined) =>
  value?.match(cepRegex) ?? false;
