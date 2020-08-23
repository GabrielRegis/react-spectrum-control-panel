import { inline } from 'app/utils/StylesUtils';
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import styles from './FragmentationExampleStyles';
import { Colors } from 'app/Theme';
import { SpectrumText } from 'app/Components/SpectrumText/SpectrumText';
interface IProps {
    // Props type definition
}

interface IState {
    // State type definition
}

export const FragmentationExample: FunctionComponent<IProps> = (props) => {
    const initialState: IState = {
    };


    // ComponentDidMount
    useEffect(() => {
        return () => {
            //ComponentDidUnmount
        }
    }, [])

    const slots = [
        {
            occupied: true
        },
        {
            occupied: true
        },
        {
            occupied: true
        },
        {
            occupied: false,
        },
        {
            occupied: true
        },
        {
            occupied: true
        },
        {
            occupied: false,
        },
        {
            occupied: true
        },
        {
            occupied: true
        }
    ]

    return (
        <div style={inline([styles.fullWidthContainer, styles.centeredColumn])}>
            <div style={inline([styles.centeredRow, styles.link])} >
                {slots.map((slot, index) => {
                    return <div style={inline([index !== slots.length - 1 && styles.xSmallMarginRight, styles.slot, slot.occupied === false && styles.freeSlot])}>

                    </div>
                })}
            </div>
            <div style={inline([styles.centeredRow, styles.leftAlignedRow, styles.xSmallMarginTop])}>
                <div style={inline([styles.slot,])} />
                <SpectrumText weight={'semibold'} color={Colors.colors.pink}>
                    {"\u00a0Slot Ocupado"}
                </SpectrumText>
                <div style={inline([styles.freeSlot, styles.xSmallMarginLeft])} />
                <SpectrumText weight={'semibold'} color={Colors.colors.darkGray}>
                    {"\u00a0Slot Livre"}
                </SpectrumText>
            </div>
            <p>
                <SpectrumText color={Colors.colors.primary}>
                    A figura acima representa um enlace e o estado de seus slots, note que o enlace se encontra fragmentado. Isso é, conexões que necessitam de muitos slots serão automaticamente bloqueadas devido à poucos slots consecutivos disponíveis.
                </SpectrumText>
            </p>

        </div>

    );
};
