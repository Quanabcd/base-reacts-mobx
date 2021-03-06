
import Validate from '@/utils/Validate';
import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from 'react';

import { TextFieldActions, TextFieldProps } from './types';
import styles from './Input.module.css';

import Ic_error from '@/assets/images/ic_error.png';
import Ic_success from '@/assets/images/ic_success.png';

// eslint-disable-next-line react/display-name
export const MyTextInput = forwardRef<TextFieldActions, TextFieldProps>(
    (
        {
            label,
            value,
            placeHolder,
            onChangeText,
            type,
            maxLength,
            disabled = true,
            containerInput,
            inputStyle,
            styleDisable,
            styleGroup,
            onKeyPress,
            isIcon = false
        }: TextFieldProps,
        ref?: any
    ) => {
        useImperativeHandle(ref, () => ({
            setValue,
            fillValue,
            getValue,
            focus,
            blur,
            setErrorMsg
        }));

        const [textfieldVal, setTextfieldVal] = useState<any>(`${value}`);
        const [errMsg, setErrMsg] = useState<string>('');
        const [isFocus, setIsFocus] = useState<boolean>(false);

        const orgTextInput = useRef<HTMLInputElement>(null);

        const getValue = useCallback(() => {
            return textfieldVal.trim();
        }, [textfieldVal]);

        const setValue = useCallback(
            (text: any) => {
                if (text) {
                    setTextfieldVal?.(text);
                }
                setErrMsg('');
            },
            []
        );

        const fillValue = useCallback(
            (text: any) => {
                setValue(text);
            },
            [setValue]
        );

        useEffect(() => {
            if (!Validate.isEmpty(value)) {
                setValue(value);
            }
        }, [setValue, value]);

        useEffect(() => {
            if (Validate.isEmpty(value)) {
                setIsFocus(false);
            }
        }, [setValue, value]);

        const focus = useCallback(() => {
            if (orgTextInput.current) {
                orgTextInput.current?.focus();
            }
            setIsFocus(true);
        }, []);

        const blur = useCallback(() => {
            if (orgTextInput.current) {
                orgTextInput.current?.blur();
            }
        }, []);

        const setErrorMsg = useCallback((msg: string) => {
            if (Validate.isStringEmpty(msg)) {
                return;
            }
            setIsFocus(false);
            setErrMsg(msg);
        }, []);

        const errorMessage = useMemo(() => {
            if (!Validate.isStringEmpty(errMsg)) {
                return <div className={styles.messageError}>
                    <p>{errMsg}</p>
                </div>;
            }
            return null;
        }, [errMsg]);

        const containerStyle = useMemo(() => {

            let style = ' ';

            if (containerInput) {
                style += containerInput + ' ';
            }

            if (errMsg !== '') {
                style += styles.errMsg;
            }

            return style;

        }, [containerInput, errMsg]);

        return (
            <div className={`${styles.boxGroupInput} ${styleGroup}`}>
                {label ? <label className={styles.label}>{label}</label> : ''}
                <div className={`${styles.formGroup}${containerStyle}`}>

                    <input
                        ref={orgTextInput}
                        type={type}
                        onChange={onChangeText}
                        placeholder={placeHolder}
                        value={value}
                        maxLength={maxLength}
                        disabled={!disabled}
                        readOnly={!disabled}
                        autoCapitalize="none"
                        onFocus={focus}
                        onKeyUp={onKeyPress}
                        className={`${'form-control '} ${inputStyle ? inputStyle : ''} ${!disabled ? styleDisable : ''}`}
                    />
                    {
                        errMsg && <div className={styles.ic_error}><img src={Ic_error} alt="ic_error" /></div>
                    }
                    {
                        isIcon ? isFocus && <div className={styles.ic_error}><img src={Ic_success} alt="ic_success" /></div> : ''
                    }

                </div>
                {errorMessage}
            </div>
        );
    }
);
