import { TweetsItem } from "../TweetsItem/TweetsItem"
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import { selectTweets } from "../../redux/selectors";
import { List } from "./TweetsList.styled";

export const TweetsList = () => {
const users = useSelector(selectTweets);
  const [page, setPage] = useState(1);

  const usersGroup = users.slice(0, page * 3);

  const isHidden = page * 3 >= users.length;

  const handleClick = () => {
    setPage(prevState => prevState + 1);
  };

    return (
        <div>
            <List>
                {usersGroup.map(({ id, ...restProps }) => 
                    <TweetsItem key={id} {...restProps} />
                )}
        </List>
        {isHidden ? null : (<button type="button" onClick={handleClick} >Load More</button>)}
        </div>
    )
}