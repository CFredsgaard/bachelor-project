import { ChangeEventHandler } from "react";

const CheckBox = (props: { label: string; value: string; onChange: ChangeEventHandler }) => {
    return (
        <label className="label cursor-pointer justify-start space-x-2">
            <input type="checkbox" className="checkbox border-solid border-secondary" value={props.value} onChange={props.onChange} />
            <span>{props.label}</span>
        </label>
    );
};

export default CheckBox;
