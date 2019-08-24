import { Grid, Typography } from '@material-ui/core';
import { SpectrumTextInput } from 'app/Components/SpectrumTextInput/SpectrumTextInput';
import { topologyConfigurationStoreContext } from 'app/Store/TopologyConfigurationStore';
import { inline } from 'app/utils/StylesUtils';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './LinksAndNodesConfigurationStyles';

interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
    isHidden: boolean;
}

export const LinksAndNodesConfiguration: FunctionComponent<IProps> = observer((props) => {

    const topologyConfigurationStore = React.useContext(topologyConfigurationStoreContext)

    const initialState: IState = {
        isHidden: false
    };

    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    return (

        <div style={inline([styles.linksAndNodesConfigContainer, topologyConfigurationStore.selectedLink ? { right: 0 } : {}])}>
            <div style={inline([styles.topCenteredColumn, styles.leftAlignedColumn, styles.padding])}>
                <Typography variant={'h5'} style={inline([styles.primaryText])}>
                    Configurações de Enlace
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <div style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                Slots
                            </Typography>
                            <SpectrumTextInput
                                type={'number'}
                                style={inline([styles.xSmallMarginLeft])}
                                value={'a'}
                                onChange={null} />
                        </div>
                        <div style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.primaryText])} variant={'subtitle1'}>
                                Capacidade
                            </Typography>
                            <SpectrumTextInput
                                type={'number'}
                                style={inline([styles.xSmallMarginLeft])}
                                value={'a'}
                                onChange={null} />
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft, styles.primaryText])} variant={'subtitle1'}>
                                Ghz
                            </Typography>
                            <Typography paragraph style={inline([styles.xSmallMarginTop, styles.xSmallMarginLeft])} variant={'body1'}>
                                por slot.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
});
