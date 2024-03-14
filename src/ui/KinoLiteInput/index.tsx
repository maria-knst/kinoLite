import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    title?: string;
    placeholder?: string;
}

export const KinoLiteInput = memo((props: InputProps) => {
    const {
        className,
        title,
        placeholder,
        value,
        onChange,
        type = 'text',
        autofocus,
        ...otherProps
    } = props;

    const textInput = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            textInput.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    return (
        <div className={`input-group ${className}`}>
            {title ? <span className="input-group-text" id={title}>{title}</span> : null}
            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                onBlur={onBlur}
                {...otherProps}
            />
        </div>
    );
});