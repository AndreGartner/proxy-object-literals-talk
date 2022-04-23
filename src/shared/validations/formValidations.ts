export const requiredFieldValidation = (field: string, value?: string) => {
  if (!value) {
    throw new Error(`The "${field}" field is required.`);
  }
};

export const minimumLengthValidation = (
  field: string,
  value: string,
  minimum: number
) => {
  if (value.length < minimum) {
    throw new Error(`The minimum length for "${field} is ${minimum}"`);
  }
};

export const maximumLengthValidation = (
  field: string,
  value: string,
  maximum: number
) => {
  if (value.length > maximum) {
    throw new Error(`The maximum length for "${field} is ${maximum}"`);
  }
};
