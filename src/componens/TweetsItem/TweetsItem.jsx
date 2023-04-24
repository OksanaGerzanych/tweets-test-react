import { useDispatch } from "react-redux/es/exports";
import { editTweets } from "../../redux/operations";
import {
  Avatar,
  ButtonFollow,
  ButtonText,
  Followers,
  Item,
  Tweets,
} from "./TweetsItem.styled";

export const TweetsItem = ({
  id,
  user,
  tweets,
  followers,
  avatar,
  isFollowing,
}) => {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(editTweets({ id, isFollowing, followers }));
  };

  return (
    <Item>
      
      <Avatar src={avatar} alt={user} />
      <Tweets>{tweets} tweets</Tweets>
      <Followers>{followers.toLocaleString('en-US')} followers</Followers>

      {isFollowing ? (
        <ButtonFollow type="button" onClick={handleUpdate}>
          <ButtonText>following</ButtonText>
        </ButtonFollow>
      ) : (
       <ButtonFollow type="button" onClick={handleUpdate}>
          <ButtonText>follow</ButtonText>
        </ButtonFollow>
      )}
    </Item>
  );
};
