import React, {Component, useState} from "react";
import '../styles/App.css';

const projArr = [
  {name: 'project-1', des: 'project-description-1'},
  {name: 'project-2', des: 'project-description-2'},
  {name: 'project-3', des: 'project-description-3'},
  {name: 'project-4', des: 'project-description-4'},
  {name: 'project-5', des: 'project-description-5'},
]

const App = () => {
  return (
    <div id="ns-wrapper">
      {
        projArr.map((item, index) => {
          return <div key={`${item.name}-${index}`}>
            <h1 data-ns-test="project-name">{item.name}</h1>
            <h6 data-ns-test="project-description">{item.des}</h6>
          </div>
        })
      }
    </div>
  )
}


export default App;
