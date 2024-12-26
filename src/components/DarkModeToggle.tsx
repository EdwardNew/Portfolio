"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Initialize theme based on localStorage or system preference
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            className="relative inline-flex h-[1.625rem] w-11 items-center rounded-full border-[1px] border-gray-400 bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        >
            <div
                className={`flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 transform ${
                    isDarkMode ? "translate-x-5" : "translate-x-0.5"
                } dark:bg-gray-700`}
            >
                {isDarkMode ? (
                    <Moon className="h-3 text-white" />
                ) : (
                    <Sun className="h-3 text-gray-600" />
                )}
            </div>
            <span className="sr-only">
                {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            </span>
        </button>
    );
}
