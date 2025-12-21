import * as React from 'react';
import clsx from 'clsx';

type AvatarRootProps = React.HTMLAttributes<HTMLDivElement>;
const AvatarRoot = React.forwardRef<HTMLDivElement, AvatarRootProps>(({ className, ...props }, ref) => (
    <div ref={ref} className={clsx('pix-avatar', className)} {...props} />
));
AvatarRoot.displayName = 'Avatar';

type AvatarImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(({ className, ...props }, ref) => (
    <img ref={ref} className={clsx('pix-avatar__image', className)} {...props} />
));
AvatarImage.displayName = 'AvatarImage';

type AvatarFallbackProps = React.HTMLAttributes<HTMLSpanElement>;
const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(({ className, ...props }, ref) => (
    <span ref={ref} className={clsx('pix-avatar__fallback', className)} {...props} />
));
AvatarFallback.displayName = 'AvatarFallback';

export const Avatar = Object.assign(AvatarRoot, {
    Image: AvatarImage,
    Fallback: AvatarFallback,
});
