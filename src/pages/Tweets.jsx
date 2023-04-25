import { useEffect } from "react"
import { TweetsList } from "../componens/TweetsList/TweetsList";
import { fetchTweets } from "../redux/operations"
import { useDispatch } from "react-redux/es/exports";
import { Link } from 'react-router-dom';
import { Filter } from "../componens/Filter/Filter";
import { ButtonBack } from "../componens/Filter/Filter.styled";


export default function Tweets() {
  
    const dispatch = useDispatch()

     useEffect(() => {
    dispatch(fetchTweets());
     }, [dispatch]);
    
    
    return (
        <>
            <Link to="/"><ButtonBack type="button">Back</ButtonBack></Link>
            <Filter />
            <TweetsList />
            
        </>
    )
}