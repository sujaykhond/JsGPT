import React, { useState, useEffect } from 'react';
import { StyledPopupContainer } from './styles';
import SetupKeyPopup from './SetupKeyPopup';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSetupKeyPopup } from '../../redux/popupReducer';

function PopupContainer() {
    const dispatch = useDispatch();
    const [popupState, setPopupState] = useState(false);
    const { setupKeyPopup } = useSelector((state) => state.popupReducer);

    const handleCheckPopupsState = () => {
        if (setupKeyPopup) {
            setPopupState(true);
        } else {
            setPopupState(false);
        }
    };

    useEffect(() => {
        handleCheckPopupsState();
    }, [setupKeyPopup]);

    useEffect(() => {
        const api_key = localStorage.getItem('api_key');
        if (!api_key) {
            dispatch(toggleSetupKeyPopup(true));
            setPopupState(true);
        }
    }, []);

    return (
        popupState && (
            <StyledPopupContainer>
                <div className="container">
                    <>
                        {setupKeyPopup && (
                            <SetupKeyPopup
                                dispatch={dispatch}
                                toggleSetupKeyPopup={toggleSetupKeyPopup}
                            />
                        )}
                    </>
                </div>
            </StyledPopupContainer>
        )
    );
}

export default PopupContainer;
