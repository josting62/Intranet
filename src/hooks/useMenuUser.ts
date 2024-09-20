import { useState } from "react";

const useMenuUser = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    return { 
        isOpen,
        toggleMenu,
        closeMenu,
    };
};

export default useMenuUser;