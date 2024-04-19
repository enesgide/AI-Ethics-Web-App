import React, { useState } from 'react';
import{
    Button,
} from 'semantic-ui-react'

function CustomButton({color, message='Text', fontSize='12px', disabled=false, onClick, value, id, 'data-userType':userType}) {
    const [isHovered, setIsHovered] = useState(false);

    const colorValues = {
        green: '#21ba45',
        red: '#f71616',
    };

    color = colorValues[color] || colorValues.green;

    const buttonStyles = {
        backgroundColor: isHovered ? color : 'rgba(255, 255, 255, 0)',
        border: disabled ? `1px solid ${color}` : `2px solid ${color}`,
        color: isHovered ? '#ffffff' : color,
        opacity: disabled ? '50%' : '100%',
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: fontSize,
        display: 'flex',
        justifyContent: 'center', // Horizontally center the content
        alignItems: 'center',
        width: '100px',
        height: '40px',
        borderRadius: '5px',
        cursor: disabled ? 'not-allowed' : 'pointer',
    };
  
    function handleMouseEnter() {
        if (disabled) return;
        setIsHovered(true);
    };
  
    function handleMouseLeave() {
        if (disabled) return;
        setIsHovered(false);
    };

    return (
        <Button
            className="ui button btn"
            style={buttonStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            value={value}
            id={id}
            data-userType={userType}
        >
            {message}
        </Button>
      );
};

export default CustomButton;
