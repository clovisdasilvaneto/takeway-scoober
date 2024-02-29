import React from 'react'
import { MenuItemContainer } from './styled'
import { Typography } from '@mui/material'

import { ArrowLeftIcon } from '../Icons'

interface MenuItemProps {
    label: string
    onClick: () => void
}

function MenuItem({ label, onClick }: MenuItemProps) {
    return (
        <MenuItemContainer onClick={onClick}>
            <Typography fontSize={14} fontWeight={700} color="primary.dark">{label}</Typography>

            <ArrowLeftIcon />
        </MenuItemContainer>
    )
}

export default MenuItem