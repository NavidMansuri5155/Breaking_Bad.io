import React, { Component } from 'react';
import axios from "axios"
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get("https://www.breakingbadapi.com/api/characters?name")
      .then(response => {
        this.setState({ posts: response.data })
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { posts } = this.state
    return (
      <div className="data">
        {
          posts.map(post => <div key={post.id}>{post.body}
            <li className="cards_item">
              <div className="card">
                <div className="card_image"><img src={post.img} alt="cardpic" /></div>
                <div className="card_content">
                  <h2 className="card_title">
                    <u>{post.name}</u></h2>
                  <p className="card_text">BIRTHDAY :{post.birthday}</p><br />
                  <p className="card_text">OCCUPATION :{post.occupation}</p><br />
                  <p className="card_text">STATUS :{post.status}</p><br />
                  <p className="card_text">NICKNAME :{post.nickname}</p>
                  <button className="btn card_btn">{post.nickname}</button>
                </div>
              </div>
            </li>
          </div>
          )}
      </div>

    )
  }
}

export default App;