import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INITIAL_DATA_STATE, nav_items } from '../../components/constants';
import LogoBtn from '../../components/LogoBtn';
import Navbar from '../../components/Navbar/desktop';
import { darkThemeColors, lightThemeColors } from '../../components/Tools/theme';
import { handleInputQuery, setThinking } from '../../redux/queryReducer';
import { handleToggleTheme } from '../../redux/themeReducer';
import Bookmark from '../Bookmark';
import { toggleSetupKeyPopup } from '../../redux/popupReducer';

function LeftBar() {
    const dispatch = useDispatch();
    const { darkTheme } = useSelector((store) => store.themeReducer);

    const handleOnClick = (title) => {
        switch (title) {
            case 'Setup API key':
                dispatch(toggleSetupKeyPopup(true));
                break;
            case 'Clear Conversation':
                dispatch(setThinking(true));
                dispatch(handleInputQuery([]));
                setTimeout(() => {
                    dispatch(handleInputQuery([INITIAL_DATA_STATE]));
                    dispatch(setThinking(false));
                }, 500);
                break;
            case 'Dark Mode':
                dispatch(handleToggleTheme());
                break;
            case 'Light Mode':
                dispatch(handleToggleTheme());
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Bookmark />
            <Navbar
                onClick={handleOnClick}
                data={nav_items}
                fill={darkTheme ? darkThemeColors.primary : lightThemeColors.primary}
                darkTheme={darkTheme}
            />
            <LogoBtn />
        </>
    );
}

export default LeftBar;
