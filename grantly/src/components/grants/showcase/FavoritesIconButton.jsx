import React, {useContext} from 'react';
import {Fade, IconButton, Tooltip} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {ActionsContext} from "../../../context/ActionsContext";

const useStyles = makeStyles(() => ({
    bookmark: {
        fill: '#696969'
    }
}));

function FavoritesIconButton({title, label, icon: Icon, button, id, removeFavorite}) {
    const classes = useStyles();
    const actions = useContext(ActionsContext);
    const {token, currentUser: {sub}} = useSelector(state => state.user);
    function handleClick(id) {
        if (removeFavorite) {
            console.log('Remove Favorite', id)
            actions.user.removeFavorite(token, id, sub);
        } else {
            console.log('Add to Favorite', id, sub);
            actions.user.addFavorite(token, id, sub);
            actions.user.getFavorites(token, sub);
        }
    }

    return (
        <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{timeout: 600}}
            title={title}
        >
            {button ? (
                <IconButton aria-label={label}>
                    <Icon
                        className={classes.bookmark}
                        onClick={()=>handleClick(id)}
                    />
                </IconButton>
            ) : (
                <Icon aria-label={label}/>
            )}
        </Tooltip>
    )
}

export default FavoritesIconButton
