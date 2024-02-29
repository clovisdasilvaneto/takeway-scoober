import { Box, styled } from "@mui/material";

export const MenuItemContainer = styled(Box)`
    background: ${({ theme }) => theme.palette.common.white};
    padding: 1.6rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .2s ease-out;
    box-shadow: inset 0 0 0 0 ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;

    p, path {
        transition: all .2s ease-out;
    }

    &:hover {
        box-shadow: inset 0 -80px 0 0 ${({ theme }) => theme.palette.primary.main};
        
        p {
            color:  ${({ theme }) => theme.palette.common.white};
        }
        
        path {
            fill:  ${({ theme }) => theme.palette.common.white};
        }
    }

`