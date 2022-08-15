import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={
                    match && {
                        width: "100%",
                        border: "2px solid white",
                        padding: "5px 15px",
                        borderRadius: "15px 15px 0px 15px",
                    }
                }
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && " (active)"}
        </div>
    );
};

export default CustomLink;