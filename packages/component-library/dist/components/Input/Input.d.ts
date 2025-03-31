interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ type, placeholder, value, onChange, }: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
