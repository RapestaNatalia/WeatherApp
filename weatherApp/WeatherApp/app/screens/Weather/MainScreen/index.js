import React from 'react';
import {Container} from './styled';
import Icon, { IconNames } from 'components/Icon';
import theme from 'config/theme';

const MainScreen= ({})=>{
    return <Container>
    <Icon name={IconNames.BrokenClouds} size={30} color={theme.colors.keppel} />
    </Container>

}
export default MainScreen;