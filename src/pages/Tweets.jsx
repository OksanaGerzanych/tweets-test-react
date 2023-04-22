import { useEffect } from "react"
import { TweetsList } from "../componens/TweetsList/TweetsList";
import { fetchTweets } from "../redux/operations"
import { useDispatch } from "react-redux/es/exports";
import { Link } from 'react-router-dom';


export default function Tweets() {
    const dispatch = useDispatch()

     useEffect(() => {
    dispatch(fetchTweets());
     }, [dispatch]);
    
    
    return (
        <div>
            <Link to="/"><button type="click">Back</button></Link>
           
            <TweetsList />
        </div>
    )
}