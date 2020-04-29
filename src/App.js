import React, { useEffect, useState } from 'react';
import { SemipolarLoading } from 'react-loadingg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// Body components
import Body from './components/Body';
import Home from './components/Home';
import Breath from './components/Breath';
import Gratitude from './components/Gratitude';
import Meditate from './components/Meditate';
import Yoga from './components/Yoga';
import Nature from './components/Nature';
import Joy from './components/Joy';
// Mind components
import Mind from './components/Mind';
import Move from './components/Move';
import Eat from './components/Eat';
import Hydrate from './components/Hydrate';
import Tune from './components/Tune';
import Sleep from './components/Sleep';
import Veggies from './components/Veggies';

function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="App">
      {visible ? (
        <SemipolarLoading />
      ) : (
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/body" component={Body} />
              <Route path="/mind" component={Mind} />
              <Route path="/breath" component={Breath} />
              <Route path="/gratitude" component={Gratitude} />
              <Route path="/meditate" component={Meditate} />
              <Route path="/yoga" component={Yoga} />
              <Route path="/nature" component={Nature} />
              <Route path="/joy" component={Joy} />

              <Route path="/move" component={Move} />
              <Route path="/eat" component={Eat} />
              <Route path="/hydrate" component={Hydrate} />
              <Route path="/tune" component={Tune} />
              <Route path="/sleep" component={Sleep} />
              <Route path="/veggies" component={Veggies} />
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
