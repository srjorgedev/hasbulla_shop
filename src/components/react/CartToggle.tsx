import { isCartOpen } from "./CartState";
import { useStore } from "@nanostores/react";

export default function CartToggle({ children }: { children?: React.ReactNode }) {
    const isOpen = useStore(isCartOpen);

    return (
        <button
            className="nav-button cart-toggle"
            onClick={() => isCartOpen.set(!isOpen)}
        >
            {children}
        </button>
    );
}