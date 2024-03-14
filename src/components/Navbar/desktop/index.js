import React from 'react';
import { StyledNavbar } from './styles';

function Navbar({ onClick, data, fill, darkTheme }) {
    return (
        <StyledNavbar>
            {data({ fill, darkTheme }).map((el) => (
                <button onClick={() => onClick(el.title)} title={el.title}>
                    {el.icon}
                    <span>{el.title}</span>
                </button>
            ))}
        </StyledNavbar>
    );
}

export default Navbar;
