import { Typography, TextField } from '@material-ui/core';
import styled from 'styled-components'
import { withRouter, Redirect } from 'react-router-dom'
const AddressArea = styled(TextField)`
 font-size : 10px;
  textarea{
    font-size : 12px;
    color : black
  }
`

const calculate = (logist, data) => {
  let price = 0
  for (let i = 0; i < data.length; i++) {
    price = price + (parseInt(data[i].productAmount) * parseInt(data[i].productPrice))
  }
  return price + parseInt(logist)
}
const Summary = ({ formData }) => {
  if (formData) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Typography variant="body2" style={{ width: 65 }}>@Twitter</Typography>
          <Typography variant="body2"> &nbsp;:&nbsp;{formData.twitter}</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 6 }}>
          <Typography variant="body2" style={{ width: 65 }}>การจัดส่ง</Typography>
          <Typography variant="body2"> &nbsp;:&nbsp;{formData.logist === "type1" ? "ลทบ." : "EMS"} {formData.logistPrice}฿</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 6 }}>
          <Typography variant="body2" style={{ width: 65 }}>Note</Typography>
          <Typography variant="body2"> &nbsp;:&nbsp;{formData.note === "" ? "-" : formData.note}</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', marginTop: 6 }}>
          <Typography variant="body2" style={{ width: 85 }}>ที่อยู่</Typography>
          <AddressArea
            id="filled-multiline-flexible"
            multiline
            rowsMax={4}
            size="small"
            value={formData.address}
            disabled
            fullWidth
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', marginTop: 10 }}>
          <Typography variant="body2" style={{ width: 85 }}>รายการ &nbsp;:&nbsp;</Typography>
          {formData.product.map(item => {
            return (
              <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ width: 200, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  <Typography variant="caption" style={{ width: 85 }}>{item.productName}</Typography>
                </div>
                <div>
                  <Typography variant="caption" style={{ width: 85 }}>X {item.productAmount}</Typography>
                </div>
                <div>
                  <Typography variant="caption" style={{ width: 85 }}>฿ {item.productPrice}</Typography>
                </div>
              </div>
            )
          })}
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
            <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              <Typography variant="caption" >รวม&nbsp;&nbsp;</Typography>
            </div>
            <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              <Typography variant="caption" style={{
                width: 85, textDecorationLine: 'underline',
                textDecorationStyle: 'double'
              }}>฿ {calculate(formData.logistPrice, formData.product)}</Typography>
            </div>

          </div>
        </div>
      </div >
    )
  } else {
    return <Redirect to="/error" />
  }

}
export default Summary