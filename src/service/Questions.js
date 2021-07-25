const getQuestions = async () => {
    const fetchQuestions = await fetch("https://opentdb.com/api.php?amount=10");
    const questionArray = await fetchQuestions.json();
    return questionArray;
}

export default getQuestions;