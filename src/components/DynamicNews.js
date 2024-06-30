import React, { Component } from 'react'

export class DynamicNews extends React.Component {
    //class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            data: null,
            error: null,
          };
        }
      
        componentDidMount() {
          const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b8ec66c2ed014cc3848a4d0882a98963";
          console.log("url"+url)
                fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    data: result
                });
                console.log(result);    
            },
                (error) => {
                this.setState({
                    error
                });
                }
            )
        }
      
        render() {
          const { data, error } = this.state;
      
          if (error) {
            return <div>Error: {error.message}</div>;
          }
      return (
            <div>

              <h1>Posts
                <p>{data}</p>
              </h1>
             {/* console.log({this.props});*/}
              <ul>
               hello
              </ul>
            </div>
          );
        }
      }
 

export default DynamicNews
