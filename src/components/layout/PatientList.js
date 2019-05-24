import React from 'react';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

const textStyle = {
    display: 'inline-block',
};

const buttonStyle = {
    display: 'inline-block',
    float: 'right'
}

const PatientList = props => {
    
    const getButtonProps = title => {
        if (title === "Prior Authorization Pending" || title === "Prior Authorization Completed")
            return ["", "text", true];
        if (title === "Access Requested")
            return ["Try Again", "contained", false];
        return ["Appeal", "contained", false];
    }
    
    const patients = props.patients.map(patient => {
        const buttonProps = getButtonProps(props.title);
        
        return (
        <div>
            <div style={textStyle}>
            <Typography variant="h5">{patient[0]}</Typography>
            <Typography variant="subtitle2" color='textSecondary'>{patient[1]}</Typography>
            </div>
            <div style={buttonStyle}>
                <Button variant={buttonProps[1]} disabled={buttonProps[2]} >
                    {buttonProps[0]}
                </Button>
            </div>
        </div>
        );
    });

    return <div>{patients}</div>;
};

export default PatientList;