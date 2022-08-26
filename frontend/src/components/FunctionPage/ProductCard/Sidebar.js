import React from 'react'
import './Sidebar.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

const Sidebar = () => {
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

                                    <Button>Skin care products</Button>
                                    <Button>Hair care products</Button>
                                    <Button>Color Cosmetics</Button>
                                    <Button>Fragrances</Button>

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
                                    <Button>Urban Decay</Button>
                                    <Button>Makeup Forever</Button>
                                    <Button>Nars</Button>
                                    <Button>Tarte</Button>
                                    <Button>Clinique</Button>
                                    <Button>Estee Lauder</Button>
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
                                    <input type="color" />
                                </AccordionDetails>
                            </Accordion>
                        </ul>
                    </nav>
                </div>
                <main class="s-layout__content">
                    <h1>Full View, Please!</h1>
                </main>
            </div>
        </div >
    )
}

export default Sidebar