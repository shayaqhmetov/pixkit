import * as React from 'react';
import clsx from 'clsx';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = 'default', ...props }, ref) => (
        <span
            ref={ref}
            className={clsx(
                'pix-badge',
                {
                    'pix-badge--secondary': variant === 'secondary',
                    'pix-badge--destructive': variant === 'destructive',
                    'pix-badge--outline': variant === 'outline',
                    'pix-badge--default': variant === 'default',
                },
                className
            )}
            {...props}
        />
    )
);
Badge.displayName = 'Badge';
