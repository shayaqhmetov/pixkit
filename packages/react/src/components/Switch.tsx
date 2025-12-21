import * as React from 'react';
import clsx from 'clsx';

type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    label?: React.ReactNode;
};

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ className, label, ...props }, ref) => (
        <label className={clsx('pix-switch', className)}>
            <input ref={ref} type="checkbox" className="pix-switch__input" {...props} />
            <span className="pix-switch__track">
                <span className="pix-switch__thumb" />
            </span>
            {label && <span className="pix-switch__label">{label}</span>}
        </label>
    )
);
Switch.displayName = 'Switch';
