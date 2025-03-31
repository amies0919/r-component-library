interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    renderFooter?: () => React.ReactNode;
    children: React.ReactNode;
}
export default function Modal({ title, isOpen, onClose, renderFooter, children, }: ModalProps): import("react/jsx-runtime").JSX.Element | null;
export {};
