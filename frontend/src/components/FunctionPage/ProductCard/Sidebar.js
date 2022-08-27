import React from 'react'
import './Sidebar.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

const Sidebar = () => {
    const Brand = [ "Urban Decay", "MakeUp Forever", "Nars", "Tarte", "Clinique", "Estee Lauder" ]
    const Color = [ "Red", "Pink", "Brown", "Maroon", "Orange", "Coral", "Purple", "Black" ]
    const Category = [ "Skin care products", "Hair care products", "Color Cosmetics", "Fragrances" ]
    return (
        <div>
            <div class="s-layout">
                <div class="s-layout__sidebar">
                    <nav class="s-sidebar__nav">
                        <ul>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={ <ExpandMoreIcon /> }
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Category</Typography>
                                </AccordionSummary>
                                <AccordionDetails>

                                    { Category.map( ( item ) => {
                                        return <Button>{ item }</Button>
                                    } ) }

                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={ <ExpandMoreIcon /> }
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Brand</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    { Brand.map( ( item ) => {
                                        return ( <><Button>{ item }</Button> <br /></> )
                                    } ) }
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={ <ExpandMoreIcon /> }
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Color</Typography>
                                </AccordionSummary>
                                <AccordionDetails>

                                    { Color.map( ( item ) => {
                                        return (
                                            <>
                                                <div className='circle' style={{backgroundColor: `${item}`}} >
                                                <Button className='btn'>{ item }</Button> <br />
                                                </div>
                                                
                                            </> )
                                    } ) }

                                </AccordionDetails>
                            </Accordion>
                        </ul>
                    </nav>
                </div>
            </div>
        </div >
    )
}

export default Sidebar