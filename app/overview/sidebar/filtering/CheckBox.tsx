import React, { ChangeEventHandler } from "react";

const CheckBox = (props: { label: string; value: string; onChange: ChangeEventHandler }) => {
    return (
        <label className="label cursor-pointer justify-start space-x-2">
            <input type="checkbox" className="checkbox" onChange={props.onChange} value={props.value} />
            <span className="label-text">{props.label}</span>
        </label>
    );
};

export default CheckBox;
