import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import I18n from '../../I18n/I18n';
import styles from './{{pascalCase name}}ScreenStyles';


interface IProps {
    // Props type definition
    navigation?: NavigationScreenProp<any, any>;
}

interface IState {
    // State type definition
}

export default class {{ pascalCase name }}Screen extends Component < IProps, IState > {
    constructor(props) {
        super(props);
    }

    public render() {
        return (<View style={[styles.centeredColumn, styles.fullContainer]} >

        </View>)
    }
}