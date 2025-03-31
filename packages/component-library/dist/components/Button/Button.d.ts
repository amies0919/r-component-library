interface ButtonProps {
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    children?: React.ReactNode;
}
export default function Button({ variant, onClick, children }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
