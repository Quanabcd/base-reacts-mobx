import React, { useCallback, useEffect, useRef, useState } from 'react';
import Languages from '@/commons/Languages';
import '@/assets/css/otp.css';
import { MyTextInput } from './input';
import { OtpModel } from '@/models/otp';
import { TextFieldActions } from './input/types';
import { Button } from './button';
import { BUTTON_STYLES } from './button/types';
import { keyCode } from '@/commons/constant';

export const Otp = () => {

    const [valueOtp] = useState<OtpModel>({
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: '',
        otp5: '',
        otp6: '',
    });

    const refOtp1 = useRef<TextFieldActions>(null);
    const refOtp2 = useRef<TextFieldActions>(null);
    const refOtp3 = useRef<TextFieldActions>(null);
    const refOtp4 = useRef<TextFieldActions>(null);
    const refOtp5 = useRef<TextFieldActions>(null);
    const refOtp6 = useRef<TextFieldActions>(null);

    useEffect(() => {
        refOtp1.current?.focus();
    }, []);

    const getValueOtp1 = useCallback((e) => {

        valueOtp.otp1 = e.target.value;
        if (valueOtp.otp1 !== '') {
            refOtp2.current?.focus();
        }

    }, [valueOtp]);

    const getValueOtp2 = useCallback((e) => {

        valueOtp.otp2 = e.target.value;
        if (valueOtp.otp2 !== '') {
            refOtp3.current?.focus();
        }

    }, [valueOtp]);

    const getValueOtp3 = useCallback((e) => {

        valueOtp.otp3 = e.target.value;
        if (valueOtp.otp3 !== '') {
            refOtp4.current?.focus();
        }

    }, [valueOtp]);

    const getValueOtp4 = useCallback((e) => {

        valueOtp.otp4 = e.target.value;
        if (valueOtp.otp4 !== '') {
            refOtp5.current?.focus();
        }

    }, [valueOtp]);

    const getValueOtp5 = useCallback((e) => {

        valueOtp.otp5 = e.target.value;
        if (valueOtp.otp5 !== '') {
            refOtp6.current?.focus();
        }

    }, [valueOtp]);

    const getValueOtp6 = useCallback((e) => {

        valueOtp.otp6 = e.target.value;
        refOtp6.current?.blur();
        if (valueOtp.otp6 === '') {
            refOtp6.current?.focus();
        }

    }, [valueOtp]);

    const onEventKey2 = useCallback((e) => {
        if (e.code === keyCode.backSpace) {
            refOtp1.current?.focus();
        }
    }, []);

    const onEventKey3 = useCallback((e) => {
        if (e.code === keyCode.backSpace) {
            refOtp2.current?.focus();
        }
    }, []);

    const onEventKey4 = useCallback((e) => {
        if (e.code === keyCode.backSpace) {
            refOtp3.current?.focus();
        }
    }, []);

    const onEventKey5 = useCallback((e) => {
        if (e.code === keyCode.backSpace) {
            refOtp4.current?.focus();
        }
    }, []);

    const onEventKey6 = useCallback((e) => {

        if (e.code === keyCode.backSpace) {
            refOtp5.current?.focus();
        }

    }, []);

    const renderInput = useCallback((ref: any, onChangeText?: any, onKeyPress?: any) => {

        return <MyTextInput
            ref={ref}
            type={'text'}
            onChangeText={onChangeText}
            maxLength={1}
            inputStyle={'input_style'}
            styleGroup={'style_group'}
            containerInput={'container_input'}
            onKeyPress={onKeyPress}
            isIcon={false}
        />;

    }, []);

    const showOtp = useCallback(() => {
        const otp = valueOtp.otp1 + valueOtp.otp2 + valueOtp.otp3 + valueOtp.otp4 + valueOtp.otp5 + valueOtp.otp6;
        console.log(otp);
    }, [valueOtp.otp1, valueOtp.otp2, valueOtp.otp3, valueOtp.otp4, valueOtp.otp5, valueOtp.otp6]);

    return (
        <div className='group_otp'>
            <h2 className="title_otp">
                {Languages.otp.title}
            </h2>
            <p className='otp_warning'>
                {Languages.otp.warnning}
            </p>
            <div className='input_componet_otp'>
                <div className='group_input'>
                    {renderInput(refOtp1, getValueOtp1)}
                    {renderInput(refOtp2, getValueOtp2, onEventKey2)}
                    {renderInput(refOtp3, getValueOtp3, onEventKey3)}
                    {renderInput(refOtp4, getValueOtp4, onEventKey4)}
                    {renderInput(refOtp5, getValueOtp5, onEventKey5)}
                    {renderInput(refOtp6, getValueOtp6, onEventKey6)}
                </div>
                <Button
                    label={Languages.common.confirmOtp}
                    onPress={showOtp}
                    buttonStyle={BUTTON_STYLES.RED}
                    width={30}
                />
            </div>
        </div>
    );
};
