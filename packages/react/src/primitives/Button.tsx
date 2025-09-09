import * as React from 'react';
import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'primary' | 'danger';
};
export const Button = React.forwardRef<HTMLButtonElement, Props>(
    ({ className, variant = 'default', ...props }, ref) => {
        const variantCls =
            variant === 'primary' ? 'bg-[var(--accent)] text-black' :
                variant === 'danger' ? 'bg-[var(--danger)] text-black' :
                    'bg-[var(--panel)] text-[var(--fg)]';
        return (
            <button ref={ref} className={clsx('pix-btn', variantCls, className)}
                {...props} />
        );
    }
);
Button.displayName = 'PixButton';