export const CodeView: React.FC<React.HTMLAttributes<HTMLPreElement>> = ({ className = '', ...props }) => (
    <pre className={`pix-code-view ${className}`} {...props} />
);