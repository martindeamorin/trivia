import "../styles/Answer.css"

export default function Answer(props) {
    const { key, text, onClick } = props
    return (
        <button className="answerButton" onClick={() => onClick(text)} dangerouslySetInnerHTML={{ __html: text }}></button>
    )
}