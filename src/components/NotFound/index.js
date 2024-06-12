import './index.css'

const NotFound = () => (
  <div className="NotFoundContainer">
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
      className="NotFoundImg"
    />
    <h1 className="NotFoundHeading">Page Not Found</h1>
    <p className="NotFoundPara">
      We are sorry,the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
