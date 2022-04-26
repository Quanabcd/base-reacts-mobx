import { makeObservable, observable } from 'mobx';

import { UserManager } from '@/managers/UserManager';
import { ApiServices } from '@/api';

class AppStore {

    @observable userManager = new UserManager();

    apiServices = new ApiServices();

    constructor() {
        makeObservable(this);
    }

}

export type AppStoreType = AppStore;
export default AppStore;
