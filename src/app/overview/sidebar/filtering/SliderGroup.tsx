import { COLORS } from "@/src/app/colors";
import { ApplicationState } from "@/src/types/ApplicationState";
import Slider from "@mui/material/Slider/Slider";
import { useEffect, useState } from "react";

const SliderGroup = (props: { updateSlidersFilterState: (sliders: ApplicationState["filterSliders"]) => void }) => {
    const [techRolesSlider, setTechRolesSlider] = useState<number[]>([0, 100]);
    const [leaderShipSlider, setLeadershipSlider] = useState<number[]>([0, 100]);
    const [flexibleDaysSlider, setFlexibleDaysSlider] = useState<number[]>([0, 7]);

    const handleSliderChange = () => {
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
                <div className="mx-2.5">
                    <Slider
                        defaultValue={[0, 100]}
                        valueLabelDisplay="auto"
                        style={{ color: COLORS.primary }}
                        value={techRolesSlider}
                        onChange={(e, range) => {
                            setTechRolesSlider(range as number[]);
                        }}
                    />
                </div>
                <p>Women in leadership</p>
                <div className="mx-2.5">
                    <Slider
                        defaultValue={[0, 100]}
                        valueLabelDisplay="auto"
                        style={{ color: COLORS.primary }}
                        value={leaderShipSlider}
                        onChange={(e, range) => {
                            setLeadershipSlider(range as number[]);
                        }}
                    />
                </div>
                <p>Flexible days</p>
                <div className="mx-2.5">
                    <Slider
                        defaultValue={[0, 7]}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={7}
                        style={{ color: COLORS.primary }}
                        value={flexibleDaysSlider}
                        onChange={(e, range) => setFlexibleDaysSlider(range as number[])}
                    />
                </div>
            </div>
        </div>
    );
};

export default SliderGroup;
