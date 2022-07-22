import { Button } from "@mui/material"
import PropTypes from 'prop-types'
const TestButton=({children,onClick})=>{
    return(
        <Button onClick={onClick}>
            {
                children
            }

        </Button>
    );
}
export default TestButton;
TestButton.PropTypes={
    children: PropTypes.any.isRequired,
    onClick: PropTypes.func
}