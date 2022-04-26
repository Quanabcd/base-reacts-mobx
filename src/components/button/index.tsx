import React, { useCallback, useMemo } from 'react';
import { ButtonProps, BUTTON_STYLES } from './types';
import styles from './Button.module.css';

export const Button = ({
    label,
    isLoading,
    onPress,
    disabled,
    textColor,
    isLowerCase,
    leftIcon,
    tag,
    buttonStyle,
    width
}: ButtonProps) => {

    const _onPress = useCallback(() => {
        onPress?.(tag || label);
    }, [label, onPress, tag]);

    const getContainerStyle = useMemo<any>(() => {

        let containerStyle = styles.pinkButton;

        switch (buttonStyle) {

            case BUTTON_STYLES.RED:
                containerStyle = styles.redButton;
                break;
            case BUTTON_STYLES.PINK:
                containerStyle = styles.pinkButton;
                break;
            case BUTTON_STYLES.GRAY:
                containerStyle = styles.grayButton;
            default:
                containerStyle = styles.grayButton;
                break;
        }

        return `${styles.container} ${containerStyle} ${styles.buttonHover}`;
    }, [buttonStyle]);

    const getTextColor = useMemo(() => {

        let color;

        switch (buttonStyle) {

            case BUTTON_STYLES.RED:
                color = styles.white;
                break;
            case BUTTON_STYLES.PINK:
                color = styles.red;
                break;
            case BUTTON_STYLES.WHITE:
                color = styles.black;
                break;
            default:
                color = styles.light_gray;
                break;
        }
        return textColor || color;
    }, [buttonStyle, textColor]);

    const getTextStyle = useMemo<any>(() => {

        const color = getTextColor;

        return `${styles.text} ${color}`;

    }, [getTextColor]);

    return (
        <button
            disabled={isLoading || disabled}
            className={getContainerStyle}
            style={{ width: width + '%' }}
            onClick={_onPress}>
            {leftIcon}
            <span className={getTextStyle}>
                {isLowerCase ? label : `${label} `.toUpperCase()}
            </span>
        </button>
    );
};


