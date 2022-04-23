import { FormGroup } from "./FormService";
import { validateCpf } from "../shared/validations/cpfValidation";
import { validateCep } from "../shared/validations/cepValidation";
import {
  requiredFieldValidation,
  minimumLengthValidation,
  maximumLengthValidation,
} from "../shared/validations/formValidations";
import { validateCnpj } from "../shared/validations/cnpjValidation";

const proxyHandler: ProxyHandler<any> = {
  set(target, property: string, value: string) {
    const callback = proxyValidations[property] ?? proxyValidations["default"];
    target[property] = callback(value, property);
    return true;
  },
};

const proxyValidations: {
  [key: string]: (value: string, field?: string) => any;
} = {
  name: (value: string) => {
    requiredFieldValidation("name", value);
    minimumLengthValidation("name", value, 1);
    maximumLengthValidation("name", value, 50);
    return value;
  },
  companyName: (value: string) => {
    requiredFieldValidation("companyName", value);
    minimumLengthValidation("companyName", value, 1);
    maximumLengthValidation("companyName", value, 50);
    return value;
  },
  fantasyName: (value: string) => {
    requiredFieldValidation("fantasyName", value);
    minimumLengthValidation("fantasyName", value, 1);
    maximumLengthValidation("fantasyName", value, 50);
    return value;
  },
  password: (value: string) => {
    requiredFieldValidation("password", value);
    minimumLengthValidation("password", value, 8);
    maximumLengthValidation("password", value, 20);
    return value;
  },
  email: (value: string) => {
    requiredFieldValidation("email", value);
    return value;
  },
  cpf: (value: string) => {
    requiredFieldValidation("cpf", value);
    if (!validateCpf(value)) {
      throw new Error('The "cpf" field is not valid.');
    }
    return value;
  },
  cnpj: (value: string) => {
    requiredFieldValidation("cnpj", value);
    if (!validateCnpj(value)) {
      throw new Error('The "cnpj" field is not valid.');
    }
    return value;
  },
  cep: (value: string) => {
    requiredFieldValidation("cep", value);
    if (!validateCep(value)) {
      throw new Error('The "cep" field is not valid.');
    }
    return value;
  },
  default: (value: string, field?: string) => {
    requiredFieldValidation(field ?? "default", value);
    return value;
  },
};

export class ProxyService {
  static loadProxyTarget(target: any) {
    return new Proxy<FormGroup>(target, proxyHandler);
  }
}
