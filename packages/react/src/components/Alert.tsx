import * as React from 'react';
import clsx from 'clsx';

type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'info' | 'success' | 'warning' | 'danger';
    title?: string;
    icon?: React.ReactNode;
    onDismiss?: () => void;
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className, variant = 'info', title, icon, onDismiss, children, ...props }, ref) => (
        <div
            ref={ref}
            className={clsx('pix-alert', `pix-alert--${variant}`, className)}
            role="alert"
            {...props}
        >
            {icon && <span className="pix-alert__icon">{icon}</span>}
            <div className="pix-alert__body">
                {title && <strong className="pix-alert__title">{title}</strong>}
                {children && <p className="pix-alert__message">{children}</p>}
            </div>
            {onDismiss && (
                <button
                    className="pix-alert__dismiss"
                    onClick={onDismiss}
                    aria-label="Dismiss"
                    type="button"
                >
                    ✕
                </button>
            )}
        </div>
    )
);
Alert.displayName = 'Alert';
