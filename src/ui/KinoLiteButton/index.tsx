import { ButtonHTMLAttributes, ReactNode, memo } from "react";
import Button from 'react-bootstrap/Button';
import './styles.scss';

export enum ButtonTheme {
    LINK = 'link',
    DARK = 'dark',
    LIGHT= 'light',
    OUTLINE_DARK = 'outline-dark',
    OUTLINE_LIGHT= 'outline-light',
}

export enum ButtonSize {
    SM = 'sm',
    LG = 'lg',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    disabled?: boolean;
    children: ReactNode;
}

export const KinoLiteButton = memo((props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.DARK,
        size = ButtonSize.LG,
        disabled,
        children,
    } = props;

    return (
        <Button 
            className={`kino-lite-button ${className}`}
            variant={theme} 
            size={size} 
            disabled={disabled}
        >
            {children}
        </Button>
    );
});