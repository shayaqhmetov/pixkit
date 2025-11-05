import * as React from 'react';
import clsx from 'clsx';

// Card Root
type CardProps = React.HTMLAttributes<HTMLDivElement>;
const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={clsx('pix-card', className)}
            {...props}
        />
    )
);
CardRoot.displayName = 'Card';

// Card Header
type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={clsx('pix-card__header', className)}
            {...props}
        />
    )
);
CardHeader.displayName = 'CardHeader';

// Card Title
type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={clsx('pix-card__title', className)}
            {...props}
        />
    )
);
CardTitle.displayName = 'CardTitle';

// Card Description
type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={clsx('pix-card__description', className)}
            {...props}
        />
    )
);
CardDescription.displayName = 'CardDescription';

// Card Content
type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={clsx('pix-card__content', className)}
            {...props}
        />
    )
);
CardContent.displayName = 'CardContent';

// Card Footer
type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={clsx('pix-card__footer', className)}
            {...props}
        />
    )
);
CardFooter.displayName = 'CardFooter';

// Export as compound component
export const Card = Object.assign(CardRoot, {
    Header: CardHeader,
    Title: CardTitle,
    Description: CardDescription,
    Content: CardContent,
    Footer: CardFooter,
});
