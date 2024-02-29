import React from 'react'
import { IconProps } from './types'
import theme from '@/theme'

function ArrowLeftIcon({ size = 10, color = theme.palette.primary.main }: IconProps) {
    return (
        <svg width={size} height="16" viewBox={`0 0 ${size} 16`} fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.715038 13.7687L6.50043 7.99956L0.715038 2.23037C0.45933 1.97592 0.333252 1.6402 0.333252 1.30447C0.333252 0.970514 0.45933 0.634787 0.715038 0.380342C1.22645 -0.126781 2.06106 -0.126781 2.57069 0.380342L9.28302 7.07366C9.53873 7.32987 9.66658 7.66383 9.66658 7.99956C9.66658 8.33528 9.53873 8.67101 9.28302 8.92369L2.57069 15.617C2.06106 16.1277 1.22645 16.1277 0.715038 15.617C0.45933 15.3643 0.333252 15.0286 0.333252 14.6929C0.333252 14.3589 0.45933 14.0232 0.715038 13.7687Z" fill={color} />
        </svg>

    )
}

export default ArrowLeftIcon