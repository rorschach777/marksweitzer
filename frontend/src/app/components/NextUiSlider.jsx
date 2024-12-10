import {Slider} from "@nextui-org/react";

const NextUiSlider = (props) => {

    return(
        <Slider   
        size="md"
        step={1}
        color="foreground"
        label={props.label}
        showSteps={true} 
        maxValue={props.maxValue} 
        minValue={props.minValue} 
        defaultValue={props.defaultValue}
        className="max-w-md nextui-slider" 
        onChange={props.onChange}
        formatOptions={{style: "unit", unit: 'year', useGrouping: false}}
        />
    );
}

export default NextUiSlider;