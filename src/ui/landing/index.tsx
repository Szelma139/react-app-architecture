import React, { ReactElement } from 'react';
import importer from '@utils/importer';

const testImage = importer('./assets/test-image.png');

export default function Landing(): ReactElement {
    // const classes = useStyles();
    return (
        <div>
            <h1>TESTING</h1>
            <img src={testImage} />
        </div>
    );
}
