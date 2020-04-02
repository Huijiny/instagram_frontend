import React, { useState } from 'react';
import FollowButtonPresenter from './FollowButtonPresenter';
import { FOLLOW, UNFOLLOW } from './FollowButtonQuries';
import PropTypes from 'prop-types';
import { useMutation } from 'react-apollo-hooks';

const FollowButtonContainer = ({isFollowing, id}) => {
    const [isFollowingS, setIsFollowing] = useState(isFollowing);
    const followMutation = useMutation(FOLLOW, { variables : { id }});
    const unfollowMutation = useMutation(UNFOLLOW, {variables : { id }});
    
    const onClick = () => {
        if(isFollowingS === true) { 
            setIsFollowing(false);
            //unfollowMutation();
        }else{
            setIsFollowing(true);
            //followMutation();
        }
    }

    return <FollowButtonPresenter onClick = {onClick} isFollowing = {isFollowingS}></FollowButtonPresenter>
};

FollowButtonContainer.propTypes = {
    isFollowing : PropTypes.bool.isRequired,
    id : PropTypes.string.isRequired
};

export default FollowButtonContainer;