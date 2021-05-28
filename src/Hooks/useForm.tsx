import { Dispatch, SetStateAction, useState } from "react";

import { mutateFormData } from "Utils/mutateFormData";

import { Form /* , FormData */ } from "Utils/types";

const useForm = (state: Form): [Form, Dispatch<SetStateAction<Form>>, any] => {
  const [form, setForm] = useState<Form>(state);
  const data: any = mutateFormData(form);
  return [form, setForm, data];
};

export default useForm;
