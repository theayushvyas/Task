import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Userlist from "./components/userlist";
import Edituser from "./components/edituser";
import Createuser from "./components/createuser";
import Logo from "./logo.svg"
import ResizePanel from "react-resize-panel";
import style from './index.css';
import classNames from 'classnames/bind';


let cx = classNames.bind(style);

function App() {
  return (

      <div className="container">
          <Router>
      <br/>
      <Route path="/edit/:id" component={Edituser} />
      </Router>

   <div className={cx('container')}>
    <ResizePanel direction="s">
      <div className={cx('header', 'panel')}>
        <span></span>
      </div>
    </ResizePanel>

      <div className={cx('body')}>
      <ResizePanel direction="e" style={{ flexGrow: '1' }} >
      <img src = {Logo}/>
      </ResizePanel>
      
       
      <div className={cx('content', 'panel')}><Createuser /></div>

       <ResizePanel direction="w" style={{ width: '400px' }} handleClass={style.customHandle} borderClass={style.customResizeBorder}>
       <Userlist />
       </ResizePanel>
      </div>

       <ResizePanel direction="n" style={{height: '200px'}}>
      <div className={cx('footer', 'panel')}>
        <div className={cx('footerArea')}>
          <div className={cx('footerAreaContent')}>
            <span><Userlist /></span>
          </div>
        </div>
      </div>
    </ResizePanel>
    

      </div>
      </div>
    
  );
}

export default App;

