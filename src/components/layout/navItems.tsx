import React from "react";
import {
    TableCellsIcon,
    HomeIcon,
    ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";


type NavItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

export const navItems: NavItem[] = [
    {
        label: "Dashboard",
        href: "/",
        icon: <HomeIcon className="w-6 h-6" />,
    },
    {
        label: "Form",
        href: "/form",
        icon: <ClipboardDocumentListIcon className="w-6 h-6" />,
    },
    {
        label: "Table",
        href: "/table",
        icon: <TableCellsIcon className="w-6 h-6" />,
    },
    {
        label: "Grid",
        href: "/grid",
        icon: <TableCellsIcon className="w-6 h-6" />,
    },
];