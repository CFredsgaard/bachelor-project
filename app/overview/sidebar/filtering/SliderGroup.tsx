const SliderGroup = () => {
    return (
        <div>
            <h1 className="md:font-bold text-lg">Filter</h1>
            <p>Women in tech roles</p>
            <input type="range" min={0} max="100" value="40" className="range range-xs" readOnly />
            <p>Women in leadership</p>
            <input type="range" min={0} max="100" value="40" className="range range-xs" readOnly />
            <p>Flexible days</p>
            <input type="range" min={0} max="7" value="2" className="range range-xs" readOnly />
        </div>
    );
};

export default SliderGroup;
