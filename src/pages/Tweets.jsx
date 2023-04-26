import { useEffect } from "react";
import { TweetsList } from "../componens/TweetsList/TweetsList";
import { fetchTweets } from "../redux/operations";
import { useDispatch } from "react-redux/es/exports";

import { Filter } from "../componens/Filter/Filter";

import { selectIsLoading } from "../redux/selectors";
import { Loader } from "../componens/Loader/Loader";
import { useSelector } from "react-redux";
import { BackLink } from "../componens/BackLink/BackLink";
import { WrapBackLink } from "../componens/BackLink/BackLink.styled";

export default function Tweets() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <WrapBackLink>
        <BackLink to="/">Go Back</BackLink>
      </WrapBackLink>
      <Filter />
      <TweetsList />
    </>
  );
}
