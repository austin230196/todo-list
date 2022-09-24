import React, {ReactElement, ReactNode} from "react";
import styled from "styled-components";




const BaseButton = styled.button<{}>`
    padding: 5px 10px;
    border-radius; 8px;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${(props: any) => props.theme.text};
    background-color: ${(props: any) => props.theme.secondary};

    & svg {
        font-size: 1.8rem;
    }
`;


interface IButton {
    children: ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}



const Button: React.FC<IButton> = ({children, ...props}): ReactElement => {
    return (
        <BaseButton {...props}>
            {children}
        </BaseButton>
    )
}



export default Button;