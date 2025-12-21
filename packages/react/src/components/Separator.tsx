import * as React from 'react';
import clsx from 'clsx';

type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
    orientation?: 'horizontal' | 'vertical';
};

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
    ({ className, orientation = 'horizontal', ...props }, ref) => (
        <div
            ref={ref}
            role="separator"
            aria-orientation={orientation}
            className={clsx('pix-separator', `pix-separator--${orientation}`, className)}
            {...props}
        />
    )
);
Separator.displayName = 'Separator';
