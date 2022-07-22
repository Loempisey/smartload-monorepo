import React from 'react';
import BasicSelect from "../../containers/layouts/filterGraph";
import { CustomLineChart } from "../../containers/layouts/lineChat";

const FilterGraph = () => {
    const [duration, setDuration] = React.useState('This week');

    const handleChange = (event) => {
        setDuration(event.target.value);
    };

    return ( 
        <div>
            <BasicSelect duration={duration} handleChange={handleChange}/>
            <CustomLineChart duration={duration}/>
        </div>
     );
}
 
export default FilterGraph;