import * as React from 'react';
import clsx from 'clsx';

type StatCardTrend = {
    value: number;
    label?: string;
};

type StatCardProps = React.HTMLAttributes<HTMLDivElement> & {
    label: string;
    value: React.ReactNode;
    icon?: React.ReactNode;
    trend?: StatCardTrend;
    variant?: 'default' | 'accent' | 'success' | 'danger' | 'warning';
};

export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
    ({ className, label, value, icon, trend, variant = 'default', ...props }, ref) => (
        <div
            ref={ref}
            className={clsx('pix-stat-card', `pix-stat-card--${variant}`, className)}
            {...props}
        >
            <div className="pix-stat-card__header">
                <span className="pix-stat-card__label">{label}</span>
                {icon && <span className="pix-stat-card__icon">{icon}</span>}
            </div>
            <div className="pix-stat-card__value">{value}</div>
            {trend && (
                <div
                    className={clsx(
                        'pix-stat-card__trend',
                        trend.value >= 0 ? 'pix-stat-card__trend--up' : 'pix-stat-card__trend--down'
                    )}
                >
                    <span>{trend.value >= 0 ? '▲' : '▼'} {Math.abs(trend.value)}%</span>
                    {trend.label && (
                        <span className="pix-stat-card__trend-label">{trend.label}</span>
                    )}
                </div>
            )}
        </div>
    )
);
StatCard.displayName = 'StatCard';
