import React, { Component } from "react";
import axios from "axios";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      bookList: []
    };
  }

  componentDidMount() {
    let baseUrl = "https://fakerestapi.azurewebsites.net/";
    let tmp = [];
    axios.get(baseUrl + "api/books").then(async res => {
      tmp = res.data.slice();
      for (var i = 0; i < tmp.length; i++) {
        tmp[i].authors = [];
      }

      await this.setState({
        bookList: tmp,
        loaded: true
      });
      this.getAuth();
    });
  }

  getAuth() {
    let baseUrl = "https://fakerestapi.azurewebsites.net/";
    let tmp = this.state.bookList.slice();
    tmp.map((book, k) => {
      axios.get(baseUrl + "authors/books/" + book.ID).then(res => {
        let t = this.state.bookList;
        t[k].authors = res.data;
        this.setState({
          bookList: t
        });
      });
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          {this.state.bookList.map((book, key) => {
            // console.log(book);
            return (
              <div key={key}>
                <h3>{book.ID}</h3>
                <h3>{book.Title}</h3>
                <div className="authors">
                  {book.authors.map((auth, key) => {
                    return (
                      <li key={key}>
                        {auth.FirstName} {auth.LastName}
                      </li>
                    );
                  })}
                </div>
                <p>{book.Description}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return "loading ...";
    }
  }
}

export default Books;
