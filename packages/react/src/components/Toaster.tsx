import * as React from 'react';
import * as ReactDOM from 'react-dom';
import clsx from 'clsx';

// ── Types ─────────────────────────────────────────────────────────────────────

export type ToastVariant = 'info' | 'success' | 'warning' | 'danger';

export interface ToastOptions {
    title?: string;
    message: string;
    variant?: ToastVariant;
    /** ms — set to 0 to persist until dismissed. Default: 4000 */
    duration?: number;
}

interface ToastItem extends ToastOptions {
    id: string;
}

interface ToastContextValue {
    toast: (options: ToastOptions) => string;
    dismiss: (id: string) => void;
}

// ── Context ───────────────────────────────────────────────────────────────────

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
    const ctx = React.useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
    return ctx;
}

// ── Provider ──────────────────────────────────────────────────────────────────

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = React.useState<ToastItem[]>([]);

    const dismiss = React.useCallback((id: string) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    const toast = React.useCallback(
        (options: ToastOptions): string => {
            const id = Math.random().toString(36).slice(2, 9);
            const duration = options.duration ?? 4000;
            setToasts(prev => [...prev, { ...options, id, duration }]);
            if (duration > 0) {
                setTimeout(() => dismiss(id), duration);
            }
            return id;
        },
        [dismiss],
    );

    return (
        <ToastContext.Provider value={{ toast, dismiss }}>
            {children}
            <Toaster toasts={toasts} onDismiss={dismiss} />
        </ToastContext.Provider>
    );
}

// ── Toaster (portal) ──────────────────────────────────────────────────────────

const ICONS: Record<ToastVariant, string> = {
    info: 'ℹ',
    success: '✔',
    warning: '⚠',
    danger: '✕',
};

function ToastCard({
    item,
    onDismiss,
}: {
    item: ToastItem;
    onDismiss: (id: string) => void;
}) {
    const variant = item.variant ?? 'info';
    return (
        <div className={clsx('pix-toast', `pix-toast--${variant}`)}>
            <span className="pix-toast__icon">{ICONS[variant]}</span>
            <div className="pix-toast__body">
                {item.title && <span className="pix-toast__title">{item.title}</span>}
                <p className="pix-toast__message">{item.message}</p>
            </div>
            <button
                className="pix-toast__dismiss"
                onClick={() => onDismiss(item.id)}
                aria-label="Dismiss"
            >
                ✕
            </button>
        </div>
    );
}

function Toaster({
    toasts,
    onDismiss,
}: {
    toasts: ToastItem[];
    onDismiss: (id: string) => void;
}) {
    if (typeof document === 'undefined' || toasts.length === 0) return null;
    return ReactDOM.createPortal(
        <div className="pix-toaster" role="region" aria-label="Notifications" aria-live="polite">
            {toasts.map(t => (
                <ToastCard key={t.id} item={t} onDismiss={onDismiss} />
            ))}
        </div>,
        document.body,
    );
}
