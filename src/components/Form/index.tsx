/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from "react";

import debounce from "lodash.debounce";
import { Select } from "@chakra-ui/react";

import { ProxyService } from "../../services/ProxyService";
import { FormGroup, FormService } from "../../services/FormService";

import { Container } from "./style";
import { CustomInput } from "../Input/index";

export const Form: React.FC = () => {
  const [formType, setFormType] = useState<string | null>(null);
  const [formTypes, setFormTypes] = useState<any[]>([]);
  const [formGroup, setFormGroup] = useState<FormGroup>();

  const requestBody = useRef<any>();

  const getFormTypes = () => {
    const formTypes = FormService.getFormTypes();
    setFormTypes(formTypes);
  };

  useEffect(() => {
    getFormTypes();
  }, []);

  const onChangeFormType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormType(event.target.value);
  };

  const onChangeFormControl = useCallback(
    debounce(
      (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        formControl: string
      ) => {
        try {
          requestBody.current[formControl] = event.target.value;
        } catch (err) {
          alert(err);
        }
      },
      1000
    ),
    []
  );

  useEffect(() => {
    if (formTypes && formTypes.length > 0) {
      setFormType(formTypes[0].name);
    }
  }, [formTypes]);

  useEffect(() => {
    if (formType) {
      let proxyTarget = {};

      const newFormGroup = FormService.selectFormGroupType(formType);
      setFormGroup(newFormGroup);

      proxyTarget = Object.keys(newFormGroup).map((key) => ({
        ...proxyTarget,
        key: null,
      }));

      requestBody.current = ProxyService.loadProxyTarget(proxyTarget);
    }
  }, [formType]);

  return (
    <Container>
      <div className="form-wrapper">
        <div className="select-type">
          <label>Escolher formulário: </label>
          <Select name="form_type" id="form_type" onChange={onChangeFormType}>
            {formTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.label}
              </option>
            ))}
          </Select>
        </div>
      </div>
      {formGroup ? (
        <div className="form-group">
          {Object.keys(formGroup).map((key) => (
            <CustomInput
              key={key}
              type={formGroup[key].type}
              label={formGroup[key].label}
              id={formGroup[key].id}
              onChange={(e) => onChangeFormControl(e, key)}
            ></CustomInput>
          ))}
        </div>
      ) : undefined}
    </Container>
  );
};
