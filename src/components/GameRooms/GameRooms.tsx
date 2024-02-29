import React from 'react'
import { GameRoomsContainer } from './styled'
import MenuItem from '../MenuItem'
import { users } from './constant'
import { Typography } from '@mui/material'

function GameRooms() {
    return (
        <>
            <Typography fontSize={14} paragraph fontWeight={700} color="primary.dark">Choose your game room</Typography>

            <GameRoomsContainer>
                {users.map((user, index) => (
                    <MenuItem key={`${user}-${index}`} label={user.name} onClick={() => null} />
                ))}
            </GameRoomsContainer>
        </>
    )
}

export default GameRooms