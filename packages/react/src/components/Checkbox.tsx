import * as React from 'react';
import clsx from 'clsx';

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    label?: React.ReactNode;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, ...props }, ref) => (
        <label className={clsx('pix-checkbox', className)}>
            <input ref={ref} type="checkbox" className="pix-checkbox__input" {...props} />
            <span className="pix-checkbox__box" />
            {label && <span className="pix-checkbox__label">{label}</span>}
        </label>
    )
);
Checkbox.displayName = 'Checkbox';
