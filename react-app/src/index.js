// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';


const element = <h1> hello </h1>
console.log(element);
ReactDOM.render(element,document.getElementById('root'))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

class Person {
  constructor(name){
    this.name = name;
  }
  walk(){
    console.log(this.name);
    console.log('test');
  }
}

class Teacher extends Person{
  constructor(name){
    super(name);
  }
  
  teach(){
    console.log('text'); 
  }
}
const teacher = new Teacher('safia');
teacher.walk();
teacher.teach();