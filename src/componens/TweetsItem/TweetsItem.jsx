import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { editTweets } from '../../redux/operations';
import { Avatar, ButtonFollow, ButtonText, Followers, Item, Tweets } from './TweetsItem.styled';

export const TweetsItem = ({id, user, tweets, followers, avatar,  isFollowing,}) => {
    const dispatch = useDispatch();
const handleUpdate = () => {
    dispatch(
      editTweets(
        isFollowing
          ? { id, followers: followers - 1, isFollowing: false }
          : { id, followers: followers + 1, isFollowing: true }
      )
    );
  };


    return (
        <Item>
            {/* <Info> </Info> */}
            <Avatar src={avatar} alt={user}/>
            <Tweets>{tweets} tweets</Tweets>
                <Followers>{followers} followers</Followers>
           
            <ButtonFollow type='button' onClick={handleUpdate}> {isFollowing ? <ButtonText>following</ButtonText> : <ButtonText>follow</ButtonText>}</ButtonFollow>
        </Item>
    )
}