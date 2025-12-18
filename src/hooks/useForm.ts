import { useState } from "react";

type FormErrors<T> = Partial<Record<keyof T, string>>;

export function useForm<T extends object>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return {
    values,
    errors,
    setErrors,
    handleChange,
  };
}
