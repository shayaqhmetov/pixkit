import * as React from 'react';
import '@pixkit/styles/src/index.css';

type Props = React.HTMLAttributes<HTMLDivElement>;
export const Panel: React.FC<Props> = ({ className = '', ...props }) => (
    <div className={`pix-panel p-4 ${className}`} {...props} />
);