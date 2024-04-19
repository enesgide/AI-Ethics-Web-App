import React, { useEffect } from "react";

const Reveal = ({ children }) => {
    useEffect(() => {
        const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

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
        <div className="animate-on-scroll">
            {children}
        </div>
    );
}

export default Reveal;
