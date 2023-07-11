import { useState } from "react";
export default function useForm<T extends object>(initialForm: T) {
  const [formulario, setFormulario] = useState(initialForm);
  const onChange = (value: string, campo: keyof T) => {
    setFormulario({ ...formulario, [campo]: value });
  };
  return { formulario, onChange };
}
