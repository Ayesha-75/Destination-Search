import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="img" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
