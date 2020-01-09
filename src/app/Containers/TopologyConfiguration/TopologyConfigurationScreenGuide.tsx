import { faBook } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { SpectrumGuideStep } from '../../Components/SpectrumGuideStep/SpectrumGuideStep';
import { getGuideContainerStyle } from '../../utils/GuideUtils';
import ReactPlayer from 'react-player'
import { inline } from 'app/utils/StylesUtils';
import styles from './TopologyConfigurationScreenGuideStyles'

export const steps = [
    {
        selector: ".videoTutorial",
        content: () => (<SpectrumGuideStep
            icon={faBook}
            title={'Tutorial - Editor de Topologia'}
            renderExtraComponent={() =>
                <iframe allowFullScreen={true}
                    frameBorder={0}
                    id="ytplayer" width="330" height="360"
                    src="http://www.youtube.com/embed/yhfxpOY4E8Q?autoplay=1&origin=http://example.com"
                />
            }
            content={[
            ]}
        />
        ),
        style: getGuideContainerStyle()
    },

];
