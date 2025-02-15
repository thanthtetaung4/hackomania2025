'use client'

import { Lesson, LessonPage, LessonQuiz } from "@/components/coursePage";
// import 'useEffect' from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import Quiz from "../quiz/page";
  

export default function LearnPage(){
    return (
        <>
            <Lesson lessonName="Introduction to Python" />
            <Lesson lessonName="Algorithm" />
            <LessonPage lessonName="Introduction to Python" context='"
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."'/>
            <LessonQuiz />
            {/* <LessonQuiz /> */}
        </>
        
        // <>
        // <div id="main-container" className="bg-secondary h-screen font-serif">
        // <div id="page-content" className="grid justify-center bg-primary round-xl p-4 font-mono drop-shadow-lg">
        //         <h2>Python 101</h2>
        //     </div>
        //     <div id="page-content" className="grid justify-center bg-primary round-xl pb-4 font-mono drop-shadow-lg">
        //         <p>Variables</p>
        //     </div>
        //     <div id="content-container" className="bg-white p-4 m-5 rounded-xl drop-shadow-lg">
        //         <div id="content">
        //         In Python, a variable is a container for storing data values. Variables are dynamically typed, so you don’t need to declare their type explicitly; Python determines it based on the assigned value. You can assign values using the = operator, and variable names must follow specific rules, such as starting with a letter or underscore and avoiding reserved keywords. Here's an example:
        //         </div>
        //         <div id="content" className="mt-6 mb-6">
        //             <img src="python.svg" alt="" />
        //         </div>
        //     </div>
        //     <Pagination>
        //     <PaginationContent>
        //         <PaginationItem>
        //         <PaginationPrevious href="#" />
        //         </PaginationItem>
        //         <PaginationItem>
        //         <PaginationLink href="#">1</PaginationLink>
        //         </PaginationItem>
        //         <PaginationItem>
        //         <PaginationEllipsis />
        //         </PaginationItem>
        //         <PaginationItem>
        //         <PaginationNext href="#" />
        //         </PaginationItem>
        //     </PaginationContent>
        //     </Pagination>
        // </div>
        // </>
    );
}
