import * as React from 'react';
import clsx from 'clsx';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    size?: 'sm' | 'md' | 'lg';
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, size = 'md', ...props }, ref) => (
        <input
            ref={ref}
            className={clsx('pix-input', `pix-input--${size}`, className)}
            {...props}
        />
    )
);
Input.displayName = 'Input';
