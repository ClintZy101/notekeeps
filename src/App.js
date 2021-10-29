// import Button from '@material-tailwind/react/Button';
import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from './components/Header';
import { NoteInput } from './components/NoteInput';
import { Sidebar } from './components/Sidebar';


function App() {
  const [showSideBarText, setShowSideBarText] = useState(false)
    
  const handleSideBarText = useCallback(() => {
      setShowSideBarText(!showSideBarText);
  }, [showSideBarText]);
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Header  handleSideBarText={handleSideBarText}/>
            <Sidebar showSideBarText={showSideBarText} />
            <NoteInput />
          </Route>


        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
