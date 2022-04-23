export const cpfRegex = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;

export const validateCpf = (value: string | undefined) =>
  value?.match(cpfRegex) ?? false;
