import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface serviceProps {
  label: string
  serviceImgUrl: string
  serviceDetails: string
}

export interface projectProps {
  label: string
  portfolioImgUrl: string
  portfolioDetails: string
}