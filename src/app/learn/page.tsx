'use client'

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
  

export default function LearnPage(){
    return (
        <>
        <div id="main-container" className="bg-secondary h-screen font-serif">
        <div id="page-content" className="grid justify-center bg-primary round-xl p-4 font-mono drop-shadow-lg">
                <h2>Python 101</h2>
            </div>
            <div id="page-content" className="grid justify-center bg-primary round-xl pb-4 font-mono drop-shadow-lg">
                <p>Variables</p>
            </div>
            <div id="content-container" className="bg-white p-4 m-5 rounded-xl drop-shadow-lg">
                <div id="content">
                In Python, a variable is a container for storing data values. Variables are dynamically typed, so you don’t need to declare their type explicitly; Python determines it based on the assigned value. You can assign values using the = operator, and variable names must follow specific rules, such as starting with a letter or underscore and avoiding reserved keywords. Here's an example:
                </div>
                <div id="content" className="mt-6 mb-6">
                    <img src="python.svg" alt="" />
                </div>
            </div>
            <Pagination>
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
            </Pagination>
        </div>
        </>
    );
}