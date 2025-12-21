import * as React from 'react';
import clsx from 'clsx';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    size?: 'sm' | 'md' | 'lg';
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, size = 'md', ...props }, ref) => (
        <textarea
            ref={ref}
            className={clsx('pix-textarea', `pix-textarea--${size}`, className)}
            {...props}
        />
    )
);
Textarea.displayName = 'Textarea';
