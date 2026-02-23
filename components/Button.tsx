import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    href?: string;
    className?: string;
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
    download?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    href,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

    const primaryStyles = "bg-text-primary text-background hover:bg-white border border-transparent font-semibold";
    const secondaryStyles = "text-text-secondary hover:text-text-primary bg-transparent hover:bg-white/5";

    const combinedClassName = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`;

    if (href) {
        // If it looks like an internal link, use Next.js Link
        const isInternal = href.startsWith('/') && !href.includes('.');

        if (isInternal) {
            return (
                <Link href={href} className={combinedClassName} {...(props as any)}>
                    {children}
                </Link>
            );
        }

        return (
            <a href={href} className={combinedClassName} {...(props as any)}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};
