import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge classes
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Format number format
export function formatPrice(price: any) {
    // Format price
    const formattedPrice = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);

    // Return formatted price
    return formattedPrice
}