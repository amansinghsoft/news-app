import React from 'react'

const NewsItem=(props)=>  {
  
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div className="my-3 mb-0">
        <div className="card " >
          <div className="card-header">
            {!author ? "Unknown" : author}
          </div>
          <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aYXGxWEpOqn0lvSO0S1ZEKPKrwAvCjfeUg&s" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary"> {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem