import React from 'react'
import { Note } from './Note'

export const Notes = ({noteModalIsOpen, handleNoteModal}) => {
    const notes = [
        {
            id: 1,
            title: 'title a very long title a veryyyyyy long  veryyyyyy long veryyyyyy long',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illum ipsa unde commodi ducimus voluptate consequuntur totam consequatur mollitia est minus doloremque suscipit fugit cupiditate repellat quam sapiente voluptatem. Enim!'
        },
       
        {
            id: 2,
            title: 'title num 2',
            content: 'some text paragraph'
        },
       
        {
            id: 3,
            title: 'Title Num 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illum ipsa unde commodi ducimus voluptate consequuntur totam consequatur mollitia est minus doloremque suscipit fugit cupiditate repellat quam sapiente voluptatem. Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illum ipsa unde commodi ducimus voluptate consequuntur totam consequatur mollitia est minus doloremque suscipit fugit cupiditate repellat quam sapiente voluptatem. Enim!'
        },
        {
            id: 4,
            title: 'Title Num 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illum ipsa unde commodi ducimus voluptate consequuntur totam consequatur mollitia est minus doloremque suscipit fugit cupiditate repellat quam sapiente voluptatem. Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illum ipsa unde commodi ducimus voluptate consequuntur totam consequatur mollitia est minus doloremque suscipit fugit cupiditate repellat quam sapiente voluptatem. Enim!'
        },
        {
            id: 5,
            title: 'Title Num 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illum ipsa unde commodi ducimus voluptate consequuntur totam consequatur mollitia est minus doloremque suscipit fugit cupiditate repellat quam sapiente voluptatem. Enim!Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illum ipsa unde commodi ducimus voluptate consequuntur totam consequatur mollitia est minus doloremque suscipit fugit cupiditate repellat quam sapiente voluptatem. Enim!'
        },
       
    ]
    return (
        <div className=" w-full  ">

            {/* Notes Gallery */}
            <div className=" mx-auto">
                <div className="">
                    <h3 className="text-xs">PINNED</h3>
                </div>
                <div className="gap-3 p-3 grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
                    {notes.map((note, index) => (
                        <Note 
                        handleNoteModal={handleNoteModal} noteModalIsOpen={noteModalIsOpen} 
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        content={note.content}
                        />
                    ))}
                    

                </div>
            
            </div>
            
        </div>
    )
}

