import { alias } from '@/commons/constant';
import Languages from '@/commons/Languages';
import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Router from './Router';
import Logo from '-!svg-react-loader!@/assets/images/logo.svg';
import IcBell from '@/assets/images/ic_bell.png';
import IcAvatar from '@/assets/images/ic_avatar.png';
import '@/assets/css/header.css';
import { MyTextInput } from '@/components/input';
import { makeStyles } from '@mui/styles';
import { TextFieldActions } from '@/components/input/types';
import FormValidate from '@/utils/FormValidate';
import { Button } from '@/components/button';
import { BUTTON_STYLES } from '@/components/button/types';
import Popup from '@/components/modal';
import { PopupActions } from '@/components/modal/types';
import { Otp } from '@/components/otp';
import { Image, StyleSheet, View, Text, SafeAreaView, FlatList, Platform } from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Header = () => {

    const [name, setName] = useState<string>('');

    const refName = useRef<TextFieldActions>(null);

    const popup = useRef<PopupActions>();

    const classes = useStyles();

    const onOpenModal = useCallback(() => {

        popup?.current?.showModal();

    }, []);

    console.log(Platform.OS);

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );


    const onclick = useCallback(() => {

        const errMsgPhone = FormValidate.passConFirmPhone(name);

        console.log(errMsgPhone);

        refName.current?.setErrorMsg(errMsgPhone);

        if (`${errMsgPhone}`.length === 0) {
            console.log('name:', name);
        }

    }, [name]);

    const renderPopup = useCallback(
        (
            ref: any,
            title?: string,
            description?: string,
            icon?: any,
            hasDisable?: boolean
        ) => {
            return (
                <Popup
                    ref={ref}
                    title={title}
                    description={description}
                />
            );
        },
        []
    );

    return (
        <>
            <div className='nav navmenu navmenu_mobile'>

                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://dev.univest.vn/images/univest/logo.svg',
                    }}
                    resizeMode={'contain'}
                />

                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='wrapLogo'>
                                <Logo />
                            </div>
                        </div>
                        <div className='col-lg-5 center'>
                            <ul className='topnav text-center'>
                                <li>
                                    <Link to='/'>
                                        {Languages.menu.invest}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={alias.assets}>
                                        {Languages.menu.asset}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={alias.products}>
                                        {Languages.menu.transaction}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={alias.products}>
                                        {Languages.menu.support}
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        <div className='col-lg-3'>
                            <div className='centerInfo'>
                                <img src={IcBell} />
                                <img className='avatar' src={IcAvatar} />
                                <div>
                                    <p className="txtHello">Welcome,</p>
                                    <p className="txtHello">Dinh Truong Giang</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <p>demo input component</p> */}
            <MyTextInput
                ref={refName}
                value={name}
                label={Languages.home.univest}
                type={'text'}
                placeHolder={Languages.home.univest}
                onChangeText={e => setName(e.target.value)}
                containerInput={classes.root}
                isIcon
            />

            <Button
                label={'on validate'}
                onPress={onclick}
                buttonStyle={BUTTON_STYLES.RED}
                width={50}
            />

            <Button
                label={'on Modal'}
                onPress={onOpenModal}
                buttonStyle={BUTTON_STYLES.RED}
                width={50}
            />

            {/* <p>demo popup</p> */}
            {renderPopup(popup, Languages.popup.title, Languages.popup.description)}

            <Otp />

            <Router />

        </>
    );
};
export default Header;

const useStyles = makeStyles({
    root: {
        display: 'block'
    },
});

const styles = StyleSheet.create({
    tinyLogo: {
        width: 200,
        height: 200
    }
});
