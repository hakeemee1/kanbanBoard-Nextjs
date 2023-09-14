import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { ArrowDownCircleIcon , CalendarIcon, PencilSquareIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

function Board() {
  return (
    <div>
      <div className=" flex space-x-3 m-5">
        <h1 className=" font-bold text-3xl xl:pl-16  ">Task Board</h1>
        <ArrowDownCircleIcon className=" h-10 w-10 text-white " />
      </div>
      {/* Board Section */}
      <div className=" flex space-x-5 p-5 md:flex xl:p-20  ">
        <div className=" relative bg-white shadow-lg w-full h-96 rounded-xl ">
            <div className=" flex absolute w-full h-2 rounded-xl bg-gradient-to-r from-orange-500  ">
                <h1 className=" font-medium p-3">TO-DO</h1>
                <CalendarIcon className=" h-6 w-6 mt-3" />
                
            </div>

        </div>
        <div className=" relative bg-white shadow-lg w-full h-96 rounded-xl"> 
        <div className=" flex absolute w-full h-2 rounded-xl bg-gradient-to-r from-blue-500  ">
        <h1 className=" font-medium p-3">In Progess</h1>
        < PencilSquareIcon className=" h-6 w-6 mt-3" />
        </div>
        </div>
        <div className=" relative bg-white shadow-lg w-full h-96 rounded-xl"> 
        <div className=" flex absolute w-full h-2 rounded-xl bg-gradient-to-r from-green-500  ">
        <h1 className=" font-medium p-3">Complete</h1>
        <CheckBadgeIcon className=" h-6 w-6 mt-3" />

        </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
