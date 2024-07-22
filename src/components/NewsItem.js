import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https:www.hindustantimes.com/ht-img/img/2024/04/16/1600x900/Cricket_1713260878026_1713260990583.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target= "_blank" className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem