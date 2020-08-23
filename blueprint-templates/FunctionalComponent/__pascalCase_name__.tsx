import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './{{pascalCase name}}Styles';
interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const {{ pascalCase name }}: FunctionComponent < IProps > = (props) => {
    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (
        <div style={inline([styles.centeredColumn, styles.fullContainer])} >

        </div>
    );
};
