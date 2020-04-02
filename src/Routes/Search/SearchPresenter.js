import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FatText from '../../Components/FatText';
import UserCard from '../../Components/UserCard';
import Loader from '../../Components/Loader';
import Data from '../../Dummy/searchData';

const Wrapper = styled.div`
    height: 50vh;
    text-align: center;
`
const Section = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 160px;
  grid-auto-rows: 160px;
`;

const SearchPresenter =  ({
    loading,
    data,
    searchTerm
}) => {
    data=Data;
    if (searchTerm === undefined){
        return (
            <Wrapper>
                <FatText text = "Searcrh for something"></FatText>
            </Wrapper>
        );
    }else if ( loading === true ){
        return (
            <Wrapper>
                <Loader/>
            </Wrapper>
        );
    }else if ( data && data.searchUser ) {
        return (
            <Wrapper>
                <Section>
                    {data.searchUser.length === 0 ? (
                        <FatText text="No users"/>
                    ) : (
                        data.searchUser.map(user => (
                            <UserCard  
                                key={user.id}
                                username={user.username} 
                                isFollowing={user.isFollowing} 
                                url={user.avatar} 
                                isSelf={user.isSelf}
                            />
                        ))
                    )}
                </Section>
                <Section>
                    {data.searchPosts.length === 0 ? (
                        <FatText text="No Posts found"/>
                    ) : (
                        data.searchPost.map(post => null)
                    )}
                </Section>
            </Wrapper>
        );
    }    
};


SearchPresenter.propTypes = {
    loading : PropTypes.bool,
    searchTerm : PropTypes.string
};

export default SearchPresenter;