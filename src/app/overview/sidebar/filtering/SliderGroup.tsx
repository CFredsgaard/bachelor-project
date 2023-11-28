import Slider from "@mui/material/Slider/Slider";
import { useState } from "react";

const SliderGroup = () => {
    const [techRolesSlider, setTechRolesSlider] = useState<number[]>([0, 100]);

    const handleSliderChange = (e: any, value: any) => {
        console.log("Target: ", e.target.name);
        console.log("The values", value);
    };
    return (
        <div className="pt-4">
            <h1 className="md:font-bold text-lg">Filter</h1>

            <div>
                <p>Women in tech roles</p>
                <div className="mx-2">
                    <Slider defaultValue={[0, 100]} valueLabelDisplay="auto" color="info" onChangeCommitted={handleSliderChange} />
                </div>
                <p>Women in leadership</p>
                <div className="mx-2">
                    <Slider defaultValue={[0, 100]} valueLabelDisplay="auto" color="info" onChangeCommitted={handleSliderChange} />
                </div>
                <p>Flexible days</p>
                <div className="mx-2">
                    <Slider
                        defaultValue={[0, 7]}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={7}
                        color="info"
                        onChangeCommitted={handleSliderChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default SliderGroup;
