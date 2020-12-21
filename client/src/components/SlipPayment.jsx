import CloseRoundedIcon from '@material-ui/icons/CloseRounded'; import { color } from '../masterdata'
const SlipPayment = ({ image, store, onDeletedImage }) => {
  return (
    <div style={{ paddingTop: 10, position: 'relative' }}>
      <CloseRoundedIcon style={{ position: 'absolute', left: 45, top: 1, color: color[store] }} size="small" onClick={onDeletedImage} />
      <img src={image} alt="slip" width={60} height={100} style={{ border: '3px solid white' }} />
    </div>
  )
}
export default SlipPayment