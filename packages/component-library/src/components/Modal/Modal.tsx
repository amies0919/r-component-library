import './Modal.css';

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    renderFooter?: () => React.ReactNode;
    children: React.ReactNode;
}

export default function Modal({ title, isOpen, onClose, renderFooter, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2 className="modal-title">{title}</h2>
                <div className="modal-content">{children}</div>
                {renderFooter && <div className='modal-footer'>{renderFooter()}</div>}
                <button className='modal-close' onClick={onClose}>X</button>
            </div>
        </div>
    );
}