import { ComponentPropsWithoutRef, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export type ModalHandle = {
    open: () => void;
};

type ModalProps = ComponentPropsWithoutRef<'dialog'>;

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
    {children, ...otherProps}: ModalProps,
    ref
){
    const modal = useRef<HTMLDialogElement>(null);
    
    useImperativeHandle(ref, () => {
        return {
            open(){
                modal.current?.showModal();
            }
        }
    })

    return createPortal(
        <>
            <div className="cart-backdrop" />
            <dialog ref={modal} className="modal" {...otherProps}>
                {children}
            </dialog>
        </>,
        document.getElementById('modal-root')!
    );
})

export default Modal;