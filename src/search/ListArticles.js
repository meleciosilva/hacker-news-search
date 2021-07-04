function ListArticles({ articles }) {

  if (!articles.length) return <h1>No articles found</h1>;
  return (
    <div className="d-flex flex-column align-items-center">
      { articles.map((article) => (
        <div key={article.objectID} className="col-12 col-md-8">
          <div className="background-color card m-2 row">
            <div className="card-body">
              <h5 className="card-title">{ article.title }</h5>
              <p className="card-text"><strong>Author:</strong> { article.author }</p>
              <p className="card-text"><strong>Date Posted:</strong> { article.created_at.substr(0, 10) }</p>
              { article.url && <a href={article.url} target="_blank" rel="noreferrer" className="btn btn-dark">See Article</a> }
            </div>
          </div>
        </div>
      )) }
    </div>
  )

}

export default ListArticles;