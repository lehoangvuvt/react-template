import { useEffect, useState } from "react";

const useForm = (initialValues) => {
  const [myValues, setMyValues] = useState(new Map());
  const [errors, setErrors] = useState(new Map())

  useEffect(() => {
    initValues()
  }, [])

  const initValues = () => {
    let _initialValues = new Map();
    for (let key in initialValues) {
      _initialValues.set(key, initialValues[key]);
    }
    setMyValues(_initialValues);
  };

  const setValue = (fieldName, value) => {
    let newValues = new Map(JSON.parse(JSON.stringify(Array.from(myValues))));
    newValues.set(fieldName, value);
    setMyValues(newValues);
  };

  const getValue = (fieldName) => {
    return myValues.get(fieldName);
  };

  const values = () => {
    let valueObj = {};
    for (let [key, value] of myValues) {
      valueObj[key] = value;
    }
    return valueObj;
  };

  const setError = (fieldName, message) => {
    let newErrors = new Map(JSON.parse(JSON.stringify(Array.from(errors))));
    newErrors.set(fieldName, message);
    setErrors(newErrors);
  }

  const getError = (fieldName) => {
    return errors.get(fieldName);
  }

  const removeError = (fieldName) => {
    let newErrors = new Map(JSON.parse(JSON.stringify(Array.from(errors))));
    newErrors.delete(fieldName);
    setErrors(newErrors)
  }

  return {
    setValue,
    getValue,
    values,
    setError,
    getError,
    removeError
  };
};

export default useForm;
