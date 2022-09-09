import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";




const InputText = ({ label, note, name, multiline, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => {
        return ref.value;
      }
    });
  }, [fieldName, registerField]);

  const props = {
    ...rest,
    ref: inputRef,
    id: fieldName,
    "aria-label": label,
    defaultValue
  };

  return (
    <div>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <textarea {...props} />

      {error && <span>{error}</span>}
    </div>
  );
};

export default InputText;