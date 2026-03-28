import * as React from 'react';
import clsx from 'clsx';

type EmptyStateProps = React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
};

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
    (
        {
            className,
            title = 'No data found',
            description,
            icon,
            action,
            ...props
        },
        ref
    ) => (
        <div ref={ref} className={clsx('pix-empty-state', className)} {...props}>
            {icon && <div className="pix-empty-state__icon">{icon}</div>}
            <h3 className="pix-empty-state__title">{title}</h3>
            {description && (
                <p className="pix-empty-state__desc">{description}</p>
            )}
            {action && <div className="pix-empty-state__action">{action}</div>}
        </div>
    )
);
EmptyState.displayName = 'EmptyState';
