import './Button.css';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    children?: React.ReactNode;
}
export default function Button({ variant, onClick, children }: ButtonProps) {
    return (
        <button className={`btn btn-${variant}`} onClick={onClick}>
            {children}
        </button>
    );
}