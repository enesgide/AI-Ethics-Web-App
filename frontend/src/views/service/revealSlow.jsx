import React, { useEffect } from "react";

const RevealSlow = ({ children }) => {
    useEffect(() => {
        const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll-slow');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        animateOnScrollElements.forEach(element => {
            observer.observe(element);
        });
    }, []);

    return (
        <div className="animate-on-scroll-slow">
            {children}
        </div>
    );
}

export default RevealSlow;
