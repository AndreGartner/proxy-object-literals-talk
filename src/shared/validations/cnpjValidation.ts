export const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

export const validateCnpj = (value: string | undefined) =>
  value?.match(cnpjRegex) ?? false;
