import React from 'react'
import './App.css'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

import Header from './components/Header'
import Post from './components/Post'

export default function () {
  const client = new ApolloClient({
    uri: "http://localhost:4000"
  })
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Header />
      <section className="App-main">
        <Post nickname="Chris" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
        <Post nickname="OG" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />

      </section>
    </div>
    </ApolloProvider>
  )
}


