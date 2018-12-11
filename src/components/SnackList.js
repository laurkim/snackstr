import React from 'react';
import SnackDetail from './SnackDetail';
import { List } from 'semantic-ui-react';

const SnackList = props => {
    const snackies = props.snacks.map(snack => {
        return <SnackDetail key={snack.name} snack={snack} />
    })

    return (
        <List size="massive">
            {snackies}
        </List>
    )
}

export default SnackList