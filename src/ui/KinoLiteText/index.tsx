import { memo } from "react";


export enum TextTheme {
    BLACK = 'text-black',
    DARK = 'text-dark',
    LIGHT= 'text-white',
    ERROR = 'text-danger',
    SUCCESS = 'text-success',
    WARNING = 'text-warning',
}

export enum TextSize {
    LG = 'fs-1',
    MD = 'fs-3',
    SM = 'fs-6',
}

interface TextProps {
    className?: string;
    text: string;
    theme?: TextTheme;
    size?: TextSize;
}

export const KinoLiteText = memo((props: TextProps) => {
    const {
        className,
        text,
        theme = TextTheme.BLACK,
        size,
    } = props;

    return (
        <div className={`d-flex align-items-center`}>
            <p className={`m-0 ${theme} ${size} ${className}`}>
                {text}
            </p>   
        </div>
    );
});