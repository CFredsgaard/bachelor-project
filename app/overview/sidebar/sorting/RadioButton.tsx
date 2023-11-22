const RadioButton = () => {
    return (
        <label className="label cursor-pointer justify-start space-x-2">
            <input className="radio radio-primary" type="radio" name="Name Here" value="Value Here" onChange={() => {}} />
            <span className="label-text">Label here</span>
        </label>
    );
};

export default RadioButton;
