// src/components/ui/select.tsx
// -----------------------------------------------------------------------------
// Minimal custom Select component set (Select, SelectTrigger, SelectContent, etc.)
// -----------------------------------------------------------------------------

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface SelectProps {
    value?: string;
    onValueChange?: (val: string) => void;
    children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ value, onValueChange, children }) => {
    const [open, setOpen] = useState(false);

    // Context-like behavior simplified for standalone use
    const trigger = React.Children.toArray(children).find(
        (child: any) => child.type.displayName === "SelectTrigger"
    );
    const content = React.Children.toArray(children).find(
        (child: any) => child.type.displayName === "SelectContent"
    );

    return (
        <div className="relative inline-block w-full">
            {React.isValidElement(trigger) &&
                React.cloneElement(trigger, { open, setOpen })}
            {open &&
                React.isValidElement(content) &&
                React.cloneElement(content, { open, setOpen, value, onValueChange })}
        </div>
    );
};

interface SelectTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    open?: boolean;
    setOpen?: (o: boolean) => void;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
                                                                children,
                                                                open,
                                                                setOpen,
                                                                className,
                                                            }) => (
    <button
        type="button"
        onClick={() => setOpen && setOpen(!open)}
        className={cn(
            "flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500",
            className
        )}
    >
        {children}
        <span className="ml-2 text-gray-400">{open ? "▲" : "▼"}</span>
    </button>
);
SelectTrigger.displayName = "SelectTrigger";

interface SelectContentProps {
    children?: React.ReactNode;
    open?: boolean;
    setOpen?: (o: boolean) => void;
    value?: string;
    onValueChange?: (v: string) => void;
}

export const SelectContent: React.FC<SelectContentProps> = ({
                                                                children,
                                                                open,
                                                                setOpen,
                                                                onValueChange,
                                                            }) => (
    <div className="absolute z-10 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-lg">
        {React.Children.map(children, (child: any) =>
            React.isValidElement(child)
                ? React.cloneElement(child, { setOpen, onValueChange })
                : child
        )}
    </div>
);
SelectContent.displayName = "SelectContent";

interface SelectItemProps {
    value: string;
    children: React.ReactNode;
    onValueChange?: (v: string) => void;
    setOpen?: (o: boolean) => void;
}

export const SelectItem: React.FC<SelectItemProps> = ({
                                                          value,
                                                          children,
                                                          onValueChange,
                                                          setOpen,
                                                      }) => (
    <div
        onClick={() => {
            onValueChange?.(value);
            setOpen?.(false);
        }}
        className="cursor-pointer px-3 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
        {children}
    </div>
);
SelectItem.displayName = "SelectItem";

export const SelectValue: React.FC<{ placeholder?: string; value?: string }> = ({
                                                                                    placeholder,
                                                                                    value,
                                                                                }) => (
    <span className={cn("text-gray-700")}>
    {value || placeholder || "Select..."}
  </span>
);
SelectValue.displayName = "SelectValue";
