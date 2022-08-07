import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Carousal.css';

const AutoPlaySwipeableViews = autoPlay( SwipeableViews );

const images = [
    {
        imgPath:
            'https://wallpaperaccess.com/full/318904.jpg',
    },
    {
        imgPath:
            'https://wallpaperaccess.com/full/695763.jpg',
    },
    {
        imgPath:
            'https://wallpaperaccess.com/full/318904.jpg',
    },
    {
        imgPath:
            'https://wallpaperaccess.com/full/695772.jpg',
    },
    {
        imgPath:
            'https://wallpaperaccess.com/full/318851.jpg',
    },
    {
        imgPath:
            'https://wallpaperaccess.com/full/695794.jpg',
    },
];

function Carousal () {
    const theme = useTheme();
    const [ activeStep, setActiveStep ] = React.useState( 0 );

    const handleStepChange = ( step ) => {
        setActiveStep( step );
    };

    return (
        <Box sx={ { maxWidth: "100%", flexGrow: 1 } }>
            <Box className="banner__text" sx={ { position: "absolute", zIndex: 1 } } >
                <h2>Show the world you</h2>
                <h1>#CHOOSELOVE</h1>
                <button>SHOP</button>
            </Box>
            <AutoPlaySwipeableViews
                axis={ theme.direction === 'rtl' ? 'x-reverse' : 'x' }
                index={ activeStep }
                onChangeIndex={ handleStepChange }
                enableMouseEvents
            >
                { images.map( ( step, index ) => (
                    <div key={ step.label }>
                        { Math.abs( activeStep - index ) <= 2 ? (
                            <Box
                                component="img"
                                sx={ {
                                    height: 681,
                                    display: 'block',
                                    maxWidth: "100%",
                                    overflow: 'hidden',
                                    width: '100%',
                                } }
                                src={ step.imgPath }
                                alt={ step.label }
                            />
                        ) : null }
                    </div>
                ) ) }
            </AutoPlaySwipeableViews>

        </Box >
    );
}

export default Carousal;
