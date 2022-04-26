import { StorageKeys } from '@/commons/constant';
import { UserInfoModel } from '@/models/user-model';
import StorageUtils from '@/utils/StorageUtils';

class SessionManager {
    userInfo: UserInfoModel | undefined;

    accessToken: string | null | undefined;

    refreshToken: string | null | undefined;

    savePhone: string | null | undefined;

    savePwd: string | null | undefined;

    async initData(callback: any) {

        const keys = [
            StorageKeys.KEY_ACCESS_TOKEN,
            StorageKeys.KEY_USER_INFO,
            StorageKeys.KEY_SAVE_LOGIN_PHONE,
            StorageKeys.KEY_SAVE_LOGIN_PWD
        ];
        try {
            // localStorage.multiGet(keys, (err, stores = []) => {
            //     for (let i = 0; i < stores.length; i++) {
            //         const store = stores[i];

            //         if (store[0] === StorageKeys.KEY_ACCESS_TOKEN) {
            //             this.accessToken = store[1];
            //         } else if (store[0] === StorageKeys.KEY_SAVE_LOGIN_PHONE) {
            //             try {
            //                 this.savePhone = store[1] ? JSON.parse(store[1]) : undefined;
            //             } catch (e) { }
            //         } else if (store[0] === StorageKeys.KEY_SAVE_LOGIN_PWD) {
            //             try {
            //                 this.savePwd = store[1] ? JSON.parse(store[1]) : undefined;
            //             } catch (e) { }
            //         }
            //         else if (store[0] === StorageKeys.KEY_USER_INFO) {
            //             try {
            //                 this.userInfo = store[1] ? JSON.parse(store[1]) : undefined;
            //             } catch (e) { }
            //         }
            //     }

            // });
            callback();
        } catch (error) {
            console.log(error);
        }

    }

    async setAccessToken(token?: string) {
        this.accessToken = token;
        if (token) {
            StorageUtils.saveDataToKey(StorageKeys.KEY_ACCESS_TOKEN, token);
        } else {
            StorageUtils.clearDataOfKey(StorageKeys.KEY_ACCESS_TOKEN);
        }
    }

    setUserInfo(userInfo?: UserInfoModel) {
        this.userInfo = userInfo;
        if (userInfo) {
            StorageUtils.saveDataToKey(StorageKeys.KEY_USER_INFO, JSON.stringify(this.userInfo));
        } else {
            StorageUtils.clearDataOfKey(StorageKeys.KEY_USER_INFO);
        }
    }

    setSavePhoneLogin(phone?: string) {
        this.savePhone = phone;
        if (phone) {
            StorageUtils.saveDataToKey(StorageKeys.KEY_SAVE_LOGIN_PHONE, JSON.stringify(this.savePhone));
        } else {
            StorageUtils.clearDataOfKey(StorageKeys.KEY_SAVE_LOGIN_PHONE);
        }
    }

    setSavePwdLogin(pwd?: string) {
        this.savePwd = pwd;
        if (pwd) {
            StorageUtils.saveDataToKey(StorageKeys.KEY_SAVE_LOGIN_PWD, JSON.stringify(this.savePwd));
        } else {
            StorageUtils.clearDataOfKey(StorageKeys.KEY_SAVE_LOGIN_PWD);
        }
    }

    getPhoneLogin() {
        return this.savePhone;
    }

    getPwdLogin() {
        return this.savePwd;
    }

    getUserInfo() {
        return this.userInfo;
    }

    logout() {
        this.setUserInfo();
        this.setAccessToken();
    }
}

export default new SessionManager();
