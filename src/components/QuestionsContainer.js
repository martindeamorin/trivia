import Answer from "./Answer";
import "../styles/QuestionsContainer.css";

export default function QuestionsContainer(props) {

    const { category, type, difficulty, question, correct_answer, incorrect_answers } = props.question;


    let answers = [correct_answer, ...incorrect_answers].sort(() => {
        return 0.5 - Math.random()
    })

    let difficultColor = {};
    switch (difficulty) {
        case "easy":
            difficultColor.color = "green";
            break;
        case "medium":
            difficultColor.color = "yellow"
            break;
        case "hard":
            difficultColor.color = "red";
            break;
        default:
            break;
    }

    return (
        <div className="questionContainer">
            <div className="groupedSpan">
                <span>{props.questionNumber + 1}/10</span>
                <span>{type === "multiple" ? "Multiple choice" : "True or False"}</span>
            </div>
            <h3 dangerouslySetInnerHTML={{ __html: question }}></h3>
            <div className="answerContainer">
                {answers.map((index, key) => {
                    return (
                        <Answer
                            key={key}
                            text={index}
                            onClick={props.handleAnswers}
                        />
                    )
                })}
            </div>
            <div className="groupedSpan">
                <span>{category}</span>
                <span style={difficultColor}>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</span>
            </div>
        </div>

    )
}