import { Card, CardContent } from "./ui/card";

// type CourseData = {
// 	courseName:String,
// 	courseLesson: courseLesson[],
// }
// type courseLesson = {
// 	lessonName: String,
// 	status: Number,
// 	content: String,
// 	quizes: quiz[],
// }
// type quiz = {
// 	question: String,
// 	choices: String[],
// 	answer: String,
// 	status: Number,
// }

function Lesson({ lessonName }: { lessonName:String }) {
	return (
		<div className="bg-white flex items-center p-3 mb-2 rounded-lg">
			<p className="text-justify text-lg">{lessonName}</p>
		</div>
	);
}

function LessonPage({ lessonName, context }: { lessonName: String, context: String })
{
	return (
		<div className="bg-white p-5 rounded-lg">
			<h1 className="text-2xl font-bold mb-5">{lessonName}</h1>
			<p className="text-justify">{context}</p>
		</div>
	);
}
function LessonQuiz()
{
	return (
		<div className="bg-white mt-5 p-5 rounded-lg">
			<p className="font-bold text-lg mb-3">What is IDE?</p>
			{/* <ul className="flex mb-6 mr-3">
				<li className="ml-3">A. HI</li>
				<li className="ml-3">B. Hello</li>
				<li className="ml-3">C. ok</li>
			</ul> */}
			<div className="flex flex-col">
				<div className="flex">
					<input type="radio" id="option1" name="options" />
					<label htmlFor="option1" className="ml-2 text-justify max-w-[320px] break-words">
					HI
					</label>
				</div>
				<div className="flex">
					<input type="radio" id="option2" name="options" />
					<label htmlFor="option2" className="ml-2 max-w-[320px] break-words">HI</label>
				</div>
				<div className="flex">
					<input type="radio" id="option3" name="options" />
					<label htmlFor="option3" className="ml-2 max-w-[320px] break-words">HI</label>
				</div>
				<div className="flex">
					<input type="radio" id="option4" name="options" />
					<label htmlFor="option4" className="ml-2 max-w-[320px]
					] break-words">HI</label>
				</div>
			</div>

			{/* <ul className="grid grid-cols-3 gap-5 items-center">
				<li className="bg-secondary text-center p-1 rounded-lg">A</li>
				<li className="bg-secondary text-center p-1 rounded-lg">B</li>
				<li className="bg-secondary text-center p-1 rounded-lg">C</li>
			</ul> */}
		</div>
	);
}

export {Lesson, LessonPage, LessonQuiz};

