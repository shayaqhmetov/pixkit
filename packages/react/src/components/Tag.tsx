import * as React from 'react';
import clsx from 'clsx';

type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
    variant?: 'success' | 'danger' | 'warning' | 'info' | 'primary' | 'muted';
    size?: 'sm' | 'md';
};

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
    ({ className, variant = 'muted', size = 'md', ...props }, ref) => (
        <span
            ref={ref}
            className={clsx(
                'pix-tag',
                `pix-tag--${variant}`,
                { 'pix-tag--sm': size === 'sm' },
                className
            )}
            {...props}
        />
    )
);
Tag.displayName = 'Tag';
