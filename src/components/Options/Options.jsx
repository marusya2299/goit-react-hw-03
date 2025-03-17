export default function Options({flag, updateFeedback, resetFeedback}){
    if(!flag){
        return(
            <>
                <button onClick={()=>{updateFeedback("good")}}>Good</button>
                <button onClick={()=>{updateFeedback("neutral")}}>Neutral</button>
                <button onClick={()=>{updateFeedback("bad")}}>Bad</button>
            </>
        )
    }
    else{
        return(
            <>
                <button onClick={()=>{updateFeedback("good")}}>Good</button>
                <button onClick={()=>{updateFeedback("neutral")}}>Neutral</button>
                <button onClick={()=>{updateFeedback("bad")}}>Bad</button>
                <button onClick={()=>{resetFeedback()}}>Reset</button>
            </>
        )
    }
    
}