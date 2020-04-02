import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Avatar from './Avatar';
import FollowButton from '../Components/FollowButton';
import FatText from './FatText';
import { Link } from 'react-router-dom';

const Card = styled.div`
    ${props => props.theme.whiteBox}
    display: flex;
    flex-direction : column;
    align-items : center;
    padding : 20px;
`;

const EAvatar = styled(Avatar)`
    margin-bottom:15px;
`
const ELink = styled(Link)`
    color : inherit;
    margin-bottom:10px;
`

const UserCard = ({id, username, isFollowing, url, isSelf}) => (
    <Card>
        <EAvatar url={url} size={'md'}/>
        <ELink to={`/${username}`}>
            <FatText text={username}/>
        </ELink>
        {!isSelf && <FollowButton isFollowing={isFollowing} id={id} />}
    </Card>
);

// UserCard.Proptypes = {
//     id : PropTypes.string.isRequired,
//     username : Proptypes.string.isRequired,
//     isFollowing : Proptypes.bool.isRequired,
//     url : Proptypes.string.isRequired,
//     isSelf : Proptypes.bool.isRequired
// };
//제대로 props가 전달되었을때 주석풀기

export default UserCard;