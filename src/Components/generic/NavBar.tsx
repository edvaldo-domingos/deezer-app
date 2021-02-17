import React, { useState, KeyboardEventHandler } from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { Box, Container, IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },

        menuButton: {
            marginRight: theme.spacing(2),
        },

        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        }

    }),
);

export default function NavBar() {
    const [searchText, setSearchText] = useState("")
    const classes = useStyles();
    const history = useHistory();

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(e.target.value)
    }

    function onMovetoSearch() {
        history.replace("/search")
    }

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {

        if (e.key.toLocaleLowerCase() === 'enter') {
            console.log(e.key)
        }
    }

    return (
        <div className={classes.grow}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton onClick={onMovetoSearch}>
                        <MusicNoteIcon
                            className={classes.menuButton}
                            style={{ color: "white" }}
                        />

                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyDown(e)}
                        />
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}


{/* <input
className={`form-control form-control-sm font-awesome `}
onChange={onChange}
onKeyDown={onKeyDown}
placeholder="&#xF002; Search..."
role="searchbox"
style={{ fontFamily: "Arial, FontAwesome" }}
title={title}
type="text"
value={value}
/> */}