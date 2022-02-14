// import Button from '@material-tailwind/react/Button';
import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from './components/Header';
import { NoteInput } from './components/NoteInput';
import { Notes } from './components/Notes';
import { Sidebar } from './components/Sidebar';

import { useMediaQuery } from 'react-responsive'
import { ButtonSample } from './components/ButtonSample';
import { IconToolTips } from './components/IconToolTips';
import { NoteModal } from './components/NoteModal';
import { FlowbiteModal } from './components/FlowbiteModal';
import { ModalSample } from './components/ModalSample';


function App() {
  const [showSideBarText, setShowSideBarText] = useState(false)

  const handleSideBarText = useCallback(() => {
    setShowSideBarText(!showSideBarText);
  }, [showSideBarText]);

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

                <div className="grid gap-5">
                  <NoteInput />
                  <Notes />
                  <NoteModal />
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
