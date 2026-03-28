import * as React from 'react';
import clsx from 'clsx';

type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
    value: number;
    max?: number;
    variant?: 'default' | 'success' | 'danger' | 'warning';
    showLabel?: boolean;
    label?: string;
};

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({ className, value, max = 100, variant = 'default', showLabel = false, label, ...props }, ref) => {
        const pct = Math.min(100, Math.max(0, (value / max) * 100));
        return (
            <div ref={ref} className={clsx('pix-progress', className)} {...props}>
                {(showLabel || label) && (
                    <div className="pix-progress__header">
                        {label && <span className="pix-progress__label">{label}</span>}
                        {showLabel && <span className="pix-progress__value">{Math.round(pct)}%</span>}
                    </div>
                )}
                <div
                    className="pix-progress__track"
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={max}
                >
                    <div
                        className={clsx('pix-progress__bar', `pix-progress__bar--${variant}`)}
                        style={{ width: `${pct}%` }}
                    />
                </div>
            </div>
        );
    }
);
Progress.displayName = 'Progress';
