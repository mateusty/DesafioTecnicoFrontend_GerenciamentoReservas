import type { ReactNode } from "react";

export interface ButtonProps {
    type: "button" | "submit" | "reset";
    size: number | string;
    $bgColor: string;
    $textColor: string;
    action: () => void;
    alternativeText: string;
    children: ReactNode;
}

export interface ButtonStyleProps {
    size: number | string;
    $bgColor: string;
    $textColor: string;
}

export interface TableComponentProps {
    columns: string[];
    children: ReactNode;
}

export interface PaginationComponentProps {
    selectedValue: number;
    setSelectedValue: (i: number) => void;
    totalItems: number;
    totalPages: number;
    currentPage: number;
    changePage: (i: number) => void; 
}