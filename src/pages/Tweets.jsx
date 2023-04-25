import { useEffect } from "react"
import { TweetsList } from "../componens/TweetsList/TweetsList";
import { fetchTweets } from "../redux/operations"
import { useDispatch } from "react-redux/es/exports";
import { Link } from 'react-router-dom';
import { Filter } from "../componens/Filter/Filter";
import { ButtonBack } from "../componens/Filter/Filter.styled";
import { selectIsLoading } from "../redux/selectors";
import { Loader } from "../componens/Loader/Loader";
import { useSelector } from "react-redux";


export default function Tweets() {
  
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

     useEffect(() => {
    dispatch(fetchTweets());
     }, [dispatch]);
    
    
    return (
        <>
           { isLoading && <Loader /> }
            <Link to="/"><ButtonBack type="button">Back</ButtonBack></Link>
            <Filter />
            <TweetsList />
            
        </>
    )
}