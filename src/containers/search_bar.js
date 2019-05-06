import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    //sumbit 이동을 막는다.
    event.preventDefault();

    // We need to go and fetch weather data
    // http://openweathermap.org/forecast5 or search : open weather map forecast api
    // 특정한 도시의 향후 5일간 기후, 날씨 데이터를 사용하는 API, 사이트에 가입해서 api키를 발급받는걸 추천하지만, 기본으로 제공하는 key가있음.
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forecast in your favorite cities."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
