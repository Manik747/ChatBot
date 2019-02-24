import React, { Component } from "react"
import "./App.css"
import { Sidebar } from "./redux/ContainerComponents/Sidebar"
import { MessagesList } from "./redux/ContainerComponents/MessageList"
import { AddMessage } from "./redux/ContainerComponents/AddMessage"

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    )
  }
}

export default App