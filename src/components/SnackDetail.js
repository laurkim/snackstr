import React from 'react';
import { List, Image } from 'semantic-ui-react';

const SnackDetail = props => {
    return (
        <List.Item>
            <Image avatar src={props.snack.img_src} />
            <List.Content>
                <List.Header>{props.snack.name}</List.Header>
            </List.Content>
        </List.Item>
    )
}

export default SnackDetail;