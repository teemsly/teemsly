import FormComponent from "./Form";
import FormGroup from "./FormGroup";

type FormType = typeof FormComponent;

interface Form extends FormType {
  Group: typeof FormGroup;
}

const Form = FormComponent as Form;
Form.Group = FormGroup;

export default Form;
export * from "./Form";
