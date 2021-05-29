import { Dispatch, SetStateAction, useState } from "react";

import { mutateFormData } from "Utils/mutateFormData";

import { Form, FormData } from "Utils/types";

const useForm = (
  state: Form
): [Form, Dispatch<SetStateAction<Form>>, FormData] => {
  const [form, setForm] = useState<Form>(state);
  const data: FormData = mutateFormData(form);
  return [form, setForm, data];
};

export default useForm;
