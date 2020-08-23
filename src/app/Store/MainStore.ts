import { action, computed, observable } from 'mobx';
import { create, persist } from 'mobx-persist';
import { createContext } from 'react';
import { CallClassConfiguration } from '../Models/CallClassConfiguration';
import { ClassesConfiguration } from '../Models/ClassesConfiguration';
import { GeneralConfigurations } from '../Models/GeneralConfigurations';
import SpectrumStore from './SpectrumStore';
import { Colors } from 'app/Theme';
export class MainStore extends SpectrumStore {

    @persist('object') @observable userProfile: 'EONAware' | 'ONAware' | 'Newbie'

    constructor() {
        super();
    }
}

const persistStore = create({
    storage: localStorage
});

const mainStore = new MainStore();
export const mainStoreContext = createContext(mainStore)
persistStore('mainStore', mainStore);
export default mainStore
