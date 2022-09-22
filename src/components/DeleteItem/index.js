import './index.css'

const DeleteItem = props => {
  const {historyDetails, deleteTitle} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDeleteHistory = () => {
    deleteTitle(id)
  }

  return (
    <li className="list-container">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
        <div className="icons-container">
          <img src={logoUrl} alt="domain logo" className="logos" />
          <div className="title-domain-container">
            <p className="title-style">{title}</p>
            <p className="domain-name">{domainUrl}</p>
          </div>
        </div>
      </div>

      <div className="button-container">
        <button type="button" testid="delete" className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            onClick={onDeleteHistory}
          />
        </button>
      </div>
    </li>
  )
}

export default DeleteItem
