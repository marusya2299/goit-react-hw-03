export default function Feedback({good, neutral, bad}){
    return(
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {good + neutral + bad}</li>
            <li>Positive: {Math.round((good / (good + neutral + bad)) * 100)}%</li>
        </ul>
    )
}