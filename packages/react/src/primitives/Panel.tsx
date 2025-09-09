import * as React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;
export const Panel: React.FC<Props> = ({ className = '', ...props }) => (
    <div className={`pix-panel p-4 ${className}`} {...props} />
);