import * as React from 'react';
import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'primary' | 'danger';
};
export const Button = React.forwardRef<HTMLButtonElement, Props>(
    ({ className, variant = 'default', children, ...props }, ref) => {
        // Можно добавить логику для variant, если нужны разные стили
        return (
            <button
                ref={ref}
                className={clsx(
                    'pix-btn',
                    {
                        'pix-btn--primary': variant === 'primary',
                        'pix-btn--danger': variant === 'danger',
                        'pix-btn--default': variant === 'default',
                    },
                    className
                )}
                {...props}
            >
                <span className="pix-btn__bg" />
                <span className="pix-btn__content">{children}</span>
            </button>
        );
    }
);
Button.displayName = 'PixButton';