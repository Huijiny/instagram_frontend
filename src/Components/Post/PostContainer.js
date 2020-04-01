import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from "react-apollo-hooks"
import useInput from '../../Hooks/useInput'
import PostPresenter from './PostPresenter.js'
import {TOGGLE_LIKE, ADD_COMMENT} from './PostQueries'
import { toast } from 'react-toastify'

const PostContainer = ({
    id,
    user,
    files,
    likeCount,
    isLiked,
    comments,
    createdAt,
    caption,
    location
}) => {
    const [isLikedS, setIsLiked] = useState(isLiked);
    const [likeCountS, setLikeCount] = useState(likeCount);
    const [currentItem, setCurrentItem] = useState(0);
    const comment = useInput("");
    const toggleLikeMutation = useMutation(TOGGLE_LIKE, {variables: {postId: id}});
    const addCommentMutation = useMutation(ADD_COMMENT,{variables: {postId: id, text: comment.value }});
    const [selfComments, setSelfComments] = useState([]);

    const slide = () => {
        const totalFiles = files.length;
        if(currentItem === totalFiles -1){
            setTimeout(() => setCurrentItem(0), 3000);
        }else{
            setTimeout(() => setCurrentItem(currentItem+1), 3000);
        }

    }
    
    useEffect(() => {
        slide();
    },[currentItem]);

    const toggleLike = () => {
        if(isLikedS === true){
            setIsLiked(false);
            setLikeCount(likeCountS - 1);
        }else{
            setIsLiked(true);
            setLikeCount(likeCountS + 1);
        }
        
        //toggleLikeMutation();
    }
    
    const onKeyPress = async e => {
        const { which } = e;
        console.log(e);
        if (which === 13) {
            e.preventDefault();
            alert(e.target.value);
            console.log("df");
            const temp = {
                id:"123",
                text:e.target.value
            };
            setSelfComments([...selfComments, temp]);
            comment.setValue("");
        // try{
        //     const { data : addComment } = await addCommentMutation();
        //     setSelfComments([...selfComments, addComment])
        // }catch{
        //     toast.error("Cant send comment");
        // }   
        }
    };
    
    return (
        <PostPresenter
            user={user}
            files={files}
            likeCount={likeCountS}
            isLiked={isLikedS}
            location={location}
            caption={caption}
            createdAt={createdAt}
            comments={comments}
            newComment={comment}
            setIsLiked={setIsLiked}
            setLikeCount={setLikeCount}
            currentItem={currentItem}
            toggleLike={toggleLike}
            onKeyPress={onKeyPress}
            selfComments={selfComments}
        />
    );
};

PostContainer.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar : PropTypes.string,
        username: PropTypes.string.isRequired
    }).isRequired,
    files: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    likeCount:PropTypes.number.isRequired, 
    isLiked: PropTypes.bool.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            user:PropTypes.shape({
                id: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired
            }).isRequired,
        })
    ).isRequired,
    caption:PropTypes.string.isRequired,
    location:PropTypes.string,
    createdAt: PropTypes.string.isRequired
};

export default PostContainer;