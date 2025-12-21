import * as React from 'react';
import clsx from 'clsx';

type DialogProps = React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};

const DialogContext = React.createContext<{
    open: boolean;
    setOpen: (open: boolean) => void;
} | null>(null);

const DialogRoot: React.FC<DialogProps> = ({ open = false, onOpenChange, children, className, ...props }) => {
    const [isOpen, setIsOpen] = React.useState(open);
    React.useEffect(() => setIsOpen(open), [open]);
    const setOpen = (value: boolean) => {
        setIsOpen(value);
        onOpenChange?.(value);
    };

    return (
        <DialogContext.Provider value={{ open: isOpen, setOpen }}>
            <div className={clsx('pix-dialog', className)} {...props}>
                {children}
            </div>
        </DialogContext.Provider>
    );
};

type DialogTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>(({ className, ...props }, ref) => {
    const ctx = React.useContext(DialogContext);
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        ctx?.setOpen(true);
        props.onClick?.(e);
    };
    return (
        <button ref={ref} className={clsx('pix-dialog__trigger', className)} {...props} onClick={onClick} />
    );
});
DialogTrigger.displayName = 'DialogTrigger';

type DialogOverlayProps = React.HTMLAttributes<HTMLDivElement>;
const DialogOverlay = React.forwardRef<HTMLDivElement, DialogOverlayProps>(({ className, ...props }, ref) => {
    const ctx = React.useContext(DialogContext);
    if (!ctx?.open) return null;
    const onClick = () => ctx?.setOpen(false);
    return <div ref={ref} className={clsx('pix-dialog__overlay', className)} {...props} onClick={onClick} />;
});
DialogOverlay.displayName = 'DialogOverlay';

type DialogContentProps = React.HTMLAttributes<HTMLDivElement>;
const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(({ className, ...props }, ref) => {
    const ctx = React.useContext(DialogContext);
    if (!ctx?.open) return null;
    return (
        <div ref={ref} className={clsx('pix-dialog__content', className)} {...props} />
    );
});
DialogContent.displayName = 'DialogContent';

type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;
const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(({ className, ...props }, ref) => (
    <div ref={ref} className={clsx('pix-dialog__header', className)} {...props} />
));
DialogHeader.displayName = 'DialogHeader';

type DialogTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(({ className, ...props }, ref) => (
    <h3 ref={ref} className={clsx('pix-dialog__title', className)} {...props} />
));
DialogTitle.displayName = 'DialogTitle';

type DialogDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
const DialogDescription = React.forwardRef<HTMLParagraphElement, DialogDescriptionProps>(({ className, ...props }, ref) => (
    <p ref={ref} className={clsx('pix-dialog__description', className)} {...props} />
));
DialogDescription.displayName = 'DialogDescription';

type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;
const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(({ className, ...props }, ref) => (
    <div ref={ref} className={clsx('pix-dialog__footer', className)} {...props} />
));
DialogFooter.displayName = 'DialogFooter';

export const Dialog = Object.assign(DialogRoot, {
    Trigger: DialogTrigger,
    Overlay: DialogOverlay,
    Content: DialogContent,
    Header: DialogHeader,
    Title: DialogTitle,
    Description: DialogDescription,
    Footer: DialogFooter,
});
