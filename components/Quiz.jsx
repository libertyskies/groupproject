import React, { useState } from 'react';
import '../Quiz.css'

export default function Quiz() {
	const questions = [
		{
			questionText: 'How long should a kitten stay with its mum?',
			answerOptions: [
				{ answerText: '2 weeks', isCorrect: false },
				{ answerText: '4 weeks', isCorrect: false },
				{ answerText: '6 weeks', isCorrect: true },
				{ answerText: '8 weeks', isCorrect: false },
			],
		},
		{
			questionText: 'How old should a cat be before you let it outside?',
			answerOptions: [
				{ answerText: '4 months', isCorrect: false },
				{ answerText: '5 months', isCorrect: false },
				{ answerText: '6 months', isCorrect: true },
				{ answerText: '7 months', isCorrect: false },
			],
		},
		{
			questionText: 'What should you feed a kitten when you first bring it home?',
			answerOptions: [
				{ answerText: 'Your leftover dinner', isCorrect: false },
				{ answerText: 'Any cat food', isCorrect: false },
				{ answerText: 'Dry food specifically designed for kittens', isCorrect: true },
			],
		},
		{
			questionText: 'What should you bring your kitten home in?',
			answerOptions: [
				{ answerText: 'A bag', isCorrect: false },
				{ answerText: 'A cardbox box', isCorrect: false },
				{ answerText: 'Carry it in my arms', isCorrect: false },
				{ answerText: 'A suitably sized cat box', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const handleResult = () => {
		if (score !== 4) {
			alert("You're almost ready. Read through our guide once more and then try the quiz again!")
		}
		else {
			alert("Top marks! You're ready for your new arrival")
		}
	};

	const runQuiz = () => {
		setShowScore(false)
		setCurrentQuestion(0);
		setScore(0);
	}


	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<div><button onClick={handleResult}>NEXT</button></div>
					<button onClick={runQuiz}>START AGAIN</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<p><strong>Question {currentQuestion + 1}/{questions.length}</strong></p>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}