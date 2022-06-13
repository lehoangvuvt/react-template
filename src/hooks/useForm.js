import { useEffect, useState } from "react";

const useForm = (initialValues) => {
  const [myValues, setMyValues] = useState(new Map());

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

  return {
    setValue,
    getValue,
    values,
  };
};

export default useForm;
