import { ChangeEventHandler } from "react";

const RadioButton = (props: { label: string; value: string; name: string; onChange: ChangeEventHandler<HTMLInputElement> }) => {
    return (
        <label className="label cursor-pointer justify-start space-x-2">
            <input className="radio radio-primary" type="radio" value={props.value} name={props.name} onChange={props.onChange} />
            <span className="label-text">{props.label}</span>
        </label>
    );
};

export default RadioButton;
