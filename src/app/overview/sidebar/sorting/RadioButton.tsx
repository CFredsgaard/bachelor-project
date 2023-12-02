import { COLORS } from "@/src/app/colors";
import { ChangeEventHandler } from "react";

const RadioButton = (props: { label: string; value: string; name: string; onChange: ChangeEventHandler }) => {
    return (
        <label className="label cursor-pointer justify-start space-x-2">
            <input
                className="radio border-white checked:bg-secondary checked:border-none"
                type="radio"
                value={props.value}
                name={props.name}
                onChange={props.onChange}
            />
            <span className="label-text" style={{ color: COLORS.secondary }}>
                {props.label}
            </span>
        </label>
    );
};

export default RadioButton;
