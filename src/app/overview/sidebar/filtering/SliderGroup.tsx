import { ApplicationState } from "@/src/types/ApplicationState";
import Slider from "@mui/material/Slider/Slider";
import { useEffect, useState } from "react";

const SliderGroup = (props: { updateSlidersFilterState: (sliders: ApplicationState["filterSliders"]) => void }) => {
    const [techRolesSlider, setTechRolesSlider] = useState<number[]>([0, 100]);
    const [leaderShipSlider, setLeadershipSlider] = useState<number[]>([0, 100]);
    const [flexibleDaysSlider, setFlexibleDaysSlider] = useState<number[]>([0, 7]);

    const handleSliderChange = () => {
        //console.log("Target: ", e.target.name);
        //console.log("The values", range);
        //setTechRolesSlider(range);
        // console.log("Tech: ", techRolesSlider);
        // console.log("Leader: ", leaderShipSlider);
        // console.log("Days: ", flexibleDaysSlider);

        props.updateSlidersFilterState({
            filterWomenTechRoles: techRolesSlider,
            filterWomenLeadership: leaderShipSlider,
            filterFlexibleDays: { ...flexibleDaysSlider },
        });
    };

    useEffect(() => {
        handleSliderChange();
    }, [techRolesSlider, leaderShipSlider, flexibleDaysSlider]);
    return (
        <div className="pt-4">
            <h1 className="md:font-bold text-lg">Filter</h1>

            <div>
                <p>Women in tech roles</p>
                <div className="mx-2">
                    <Slider
                        defaultValue={[0, 100]}
                        valueLabelDisplay="auto"
                        color="info"
                        value={techRolesSlider}
                        onChange={(e, range) => {
                            setTechRolesSlider(range as number[]);
                        }}
                    />
                </div>
                <p>Women in leadership</p>
                <div className="mx-2">
                    <Slider
                        defaultValue={[0, 100]}
                        valueLabelDisplay="auto"
                        color="info"
                        value={leaderShipSlider}
                        onChange={(e, range) => {
                            setLeadershipSlider(range as number[]);
                        }}
                    />
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
                        value={flexibleDaysSlider}
                        onChange={(e, range) => setFlexibleDaysSlider(range as number[])}
                    />
                </div>
            </div>
        </div>
    );
};

export default SliderGroup;
