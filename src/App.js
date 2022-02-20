// import Button from '@material-tailwind/react/Button';
import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from './components/Header';
import { NoteInput } from './components/NoteInput';
import { Notes } from './components/Notes';
import { Sidebar } from './components/Sidebar';

import { useMediaQuery } from 'react-responsive'

import { NoteModal } from './components/NoteModal';




function App() {
  const [showSideBarText, setShowSideBarText] = useState(false)
  const [noteModalIsOpen, setNoteModalIsOpen] = useState(false)
  const handleSideBarText = useCallback(() => {
    setShowSideBarText(!showSideBarText);
  }, [showSideBarText]);
  const handleNoteModal = useCallback(() => {
    setNoteModalIsOpen(!noteModalIsOpen);
  }, [noteModalIsOpen])

  const isMobile = useMediaQuery({
    query: '(min-width: 480px)'
  })

  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route path="/">

            <Header handleSideBarText={handleSideBarText} showSideBarText={showSideBarText} />

            <div className="flex">
              <Sidebar showSideBarText={showSideBarText} handleSideBarText={handleSideBarText} isMobile={isMobile}/>
              
              <div className="flex ">
                
                <div className="w-32">
                </div>

                <div className="grid gap-5 ">
                  <NoteInput />
                  <Notes handleNoteModal={handleNoteModal} noteModalIsOpen={noteModalIsOpen}/>
                  <NoteModal handleNoteModal={handleNoteModal} noteModalIsOpen={noteModalIsOpen}/>
                  {/* <ModalSample /> */}

                </div>

              </div>
            </div>

          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
