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
                <p>File Manipulation</p>
            </div>
            <div id="content-container" className="bg-white p-4 m-5 rounded-xl drop-shadow-lg">
                <div id="content" className="grid justify-center">
                    <h1 >Time to Test Your Skills</h1>
                </div>
                <div id="content" className="mt-6 mb-6">
                    <p>Q1: What is the correct way to open a file in Python for reading?</p>
                  <ul>
                    <li>open('file.txt', 'r')</li>
                    <li>open('file.txt', 'w')</li>
                    <li>open('file.txt', 'a')</li>
                    <li>open('file.txt', 'x')</li>
                  </ul>
    
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