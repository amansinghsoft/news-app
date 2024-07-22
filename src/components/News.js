import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    console.log("ram");
    super();
    this.state = {
      articles : this.articles,
      loading : false
    }
  }

  async componentDidMount(){
    console.log("cmd");
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=b8ec66c2ed014cc3848a4d0882a98963";
      let data= await fetch(url);
      let parsedData= await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
  }

  render() {
    console.log("hiiiii");
    return (
      <div className="container my-3" >
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key ={element.url} >
        <NewsItem title={element.title?element.title:""} description ={element.description?element.description:""} imageUrl= {element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
        </div>
      </div>
    )
  }
}

export default News