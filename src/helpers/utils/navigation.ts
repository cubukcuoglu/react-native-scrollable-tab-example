import { createRef } from 'react';
import { CommonActions, DrawerActions } from '@react-navigation/native';

const navigationRef: any = createRef();

export interface Navigate {
    page: string;
    params?: any;
    index?: number,
    timeout?: boolean
}

const navigate = ({ page, params, index, timeout = true }: Navigate) => {
    if (!index) {
        if (timeout)
            setTimeout(() => {
                navigationRef.current?.navigate(page, params);
            }, 20);
        else
            navigationRef.current?.navigate(page, params);
    } else {
        navigationRef.current?.dispatch(CommonActions.reset({
            index,
            routes: [
                { name: page },
            ],
        }));
    }
};

const back = () => navigationRef.current?.dispatch(CommonActions.goBack());

const openDrawer = () => navigationRef.current?.dispatch(DrawerActions.openDrawer());

const closeDrawer = () => navigationRef.current?.dispatch(DrawerActions.closeDrawer());

export {
    navigate,
    back,
    openDrawer,
    closeDrawer,
    navigationRef,
}