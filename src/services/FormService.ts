import { cpfRegex } from "../shared/validations/cpfValidation";
import { cepRegex } from "../shared/validations/cepValidation";
import { cnpjRegex } from "../shared/validations/cnpjValidation";

export type FormGroup = {
  [id: string]: FormControl;
};

interface IFormTypes {
  [id: string]: FormGroup;
}

export type FormControl = {
  type: string;
  id: string;
  label: string;
  regex?: RegExp;
};

const formGroupTypes: IFormTypes = {
  login: {
    email: { type: "email", id: "email", label: "E-mail" },
    password: {
      type: "password",
      id: "password",
      label: "Senha",
    },
  },
  signUpPerson: {
    name: { type: "text", id: "name", label: "Nome completo" },
    email: { type: "email", id: "email", label: "E-mail" },
    password: {
      type: "password",
      id: "password",
      label: "Senha",
    },
    cpf: {
      type: "text",
      id: "cpf",
      label: "CPF",
      regex: cpfRegex,
    },
    cep: {
      type: "text",
      id: "cep",
      label: "CEP",
      regex: cepRegex,
    },
  },
  signUpCompany: {
    companyName: {
      type: "text",
      id: "companyName",
      label: "Razão social",
    },
    fantasyName: {
      type: "text",
      id: "fantasyName",
      label: "Nome Fantasia",
    },
    email: { type: "email", id: "email", label: "E-mail" },
    password: {
      type: "password",
      id: "password",
      label: "Senha",
    },
    cnpj: {
      type: "text",
      id: "cnpj",
      label: "CNPJ",
      regex: cnpjRegex,
    },
    cep: {
      type: "text",
      id: "cep",
      label: "CEP",
      regex: cepRegex,
    },
  },
};

export class FormService {
  static selectFormGroupType(type: string) {
    return formGroupTypes[type];
  }

  static getFormTypes() {
    return [
      { name: "login", label: "Login" },
      { name: "signUpPerson", label: "Cadastrar Pessoa Física" },
      { name: "signUpCompany", label: "Cadastrar Empresa" },
    ];
  }
}
