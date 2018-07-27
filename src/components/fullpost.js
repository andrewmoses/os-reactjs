import React from 'react';
class fullpost extends React.Component {
  constructor(props) {
    super(props);
//    this.state = {
//      error: null,
//      isLoaded: false,
//      shortfeed: []
//    };
     this.state = {
       error: null,
       isLoaded: true,
       shortfeed:
         [{"model": "feeds.posts", "pk": 1, "fields": {"title": "Awesome life", "content": "life is awesome when you are part of a team and this going to be awesome and the content will be ready soon if i keep on typing like this, so the take away is everything is awesome when you start looking awesome", "author": "superman", "link": "", "fd_date": "2018-07-03T10:22:48.158Z"}}]
     };
  }
//  componentDidMount() {
//    fetch("/posts/"+this.props.match.params.postid+"/")
//      .then(res => res.json())
//      .then(
//        (result) => {
//          this.setState({
//            isLoaded: true,
//            shortfeed: result
//          });
//        },
//        // Note: it's important to handle errors here
//        // instead of a catch() block so that we don't swallow
//        // exceptions from actual bugs in components.
//        (error) => {
//          this.setState({
//            isLoaded: true,
//            error
//          });
//        }
//      )
//  }
  renderShort(k, shfeed) {
    return (
      <p key={k}>Title: {shfeed.fields.title}<br/>
      Author: {shfeed.fields.author}<br/>
      Date: {shfeed.fields.fd_date}<br/>
      Content: {shfeed.fields.content}</p>
    )
  }
  render() {
    // return(
    //   <p>the full post page will have the full post {this.props.match.params.postid}</p>
    // );
    const { error, isLoaded, shortfeed } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2>Post</h2>
          <div>
          {shortfeed.map((each, i) => {
            return (this.renderShort(i, each))
          })}
          </div>
        </div>
      );
    }

  }
}
export default fullpost;
