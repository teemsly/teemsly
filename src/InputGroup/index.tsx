import InputGroupComponent from "./InputGroup";
import InputGroupAddon from "./InputGroupAddon";
import InputGroupLabel from "./InputGroupLabel";

type InputGroupType = typeof InputGroupComponent;

interface InputGroup extends InputGroupType {
  Label: typeof InputGroupLabel;
  Addon: typeof InputGroupAddon;
}

const InputGroup = InputGroupComponent as InputGroup;
InputGroup.Addon = InputGroupAddon;
InputGroup.Label = InputGroupLabel;

export default InputGroup;
export * from "./InputGroup";
