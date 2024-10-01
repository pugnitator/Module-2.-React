import logo from './logo.svg';
import './App.css';
import { createContext, createElement } from 'react';

export function App() {
//императивный
 return createElement(
  'div',
  {className: 'App'},
  createElement(
    'header',
    {className: 'App-header'},
    createElement(
      'img',
      {
        className: 'App-logo',
        src: `${logo}`,
        alt: 'logo',
      }
    ),
    createElement(
      'p',
      null,
      'Edit ',
      createElement('code', null, 'src/App.js'),
      ' and save to reload.',
    ),
    createElement(
      'a', 
      {
        className: 'App-link',
        href: 'https://reactjs.org',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      'Learn React'
     ),
     createElement(
      'p',
      {className: 'currentYear'},
      //декларативный
      getCurrentYear(),
     )
  )
 )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //       {/* декларативный */}
  //       <p className = 'currentYear'>{getCurrentYear()}</p>
  //     </header>
  //   </div>
  // );
}

//императивный
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear()
}