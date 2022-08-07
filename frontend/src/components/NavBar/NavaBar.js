import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from './img.jpg';
import './NavBar.css';
import { Link } from '@mui/material';


const Search = styled( 'div' )( ( { theme } ) => ( {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha( theme.palette.common.white, 0.15 ),
    '&:hover': {
        backgroundColor: alpha( theme.palette.common.white, 0.25 ),
    },
    marginRight: theme.spacing( 2 ),
    marginLeft: 0,
    width: '100%',
    [ theme.breakpoints.up( 'sm' ) ]: {
        marginLeft: theme.spacing( 3 ),
        width: 'auto',
    },
} ) );

const SearchIconWrapper = styled( 'div' )( ( { theme } ) => ( {
    padding: theme.spacing( 0, 2 ),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
} ) );

const StyledInputBase = styled( InputBase )( ( { theme } ) => ( {
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing( 1, 1, 1, 0 ),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing( 4 )})`,
        transition: theme.transitions.create( 'width' ),
        width: '100%',
        [ theme.breakpoints.up( 'md' ) ]: {
            width: '20ch',
        },
    },
} ) );

export default function PrimarySearchAppBar () {

    return (
        <Box className="container" sx={ { flexGrow: 1 } }>
            <AppBar position="static">
                <Toolbar className="tool">
                    <img src={ logo } alt="logo" className='logo' />

                    <Typography className="category" style={ { color: 'white', margin: '10px' } }><Link to='/'>Category</Link></Typography>
                    <Typography className="category" style={ { color: 'white', margin: '10px' } }><Link to='/'>Features</Link></Typography>
                    <Typography className="category" style={ { color: 'white', margin: '10px' } }><Link to='/'>Contact</Link></Typography>
                    <Search style={ { marginLeft: "300px" } }>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={ { 'aria-label': 'search' } }
                        />
                    </Search>
                    <Box sx={ { flexGrow: 1 } } />
                    <Typography style={ { margin: "20px" } } className="login" >Login</Typography>
                    <Typography className="login" >SignUp</Typography>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
