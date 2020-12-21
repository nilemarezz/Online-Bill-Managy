import React from 'react'
import { useState, useRef } from 'react'
import { TextField, InputAdornment, InputLabel, FormControl, OutlinedInput, Button, Divider, RadioGroup, FormControlLabel, Radio, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BackupIcon from '@material-ui/icons/Backup';
import { color, payment } from '../masterdata'
import SlipPayment from './SlipPayment'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(2),
    },
    top: {
      marginTop: theme.spacing(2),
    }
  },
}));
const FormInput = (props) => {
  const inputEl = useRef(null);
  const [product, setProduct] = useState([{ id: 1, productName: "", productPrice: "", productAmount: "" }])
  const [address, setAddress] = useState("")
  const [twitter, setTwitter] = useState("")
  const [note, setNote] = useState("")
  const [logist, setLogist] = useState('type1')
  const [rawImage, setRawImage] = useState(null)
  const [showImage, setShowImage] = useState(null)



  const onAddProduct = () => {
    setProduct([...product, { id: product.length + 1, productName: "", productPrice: "", productAmount: "" }])
  }
  const onDeleteProduct = () => {
    let data = [...product]
    data.pop()
    setProduct(data)
  }
  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log({ product: product, address, twitter, note, logist })
  }
  const onChangeProductName = (value, id) => {
    const index = product.findIndex(item => item.id == id)
    const newProduct = [...product]
    newProduct[index].productName = value
    setProduct(newProduct)
  }
  const onChangeProductPrice = (value, id) => {
    const index = product.findIndex(item => item.id == id)
    const newProduct = [...product]
    newProduct[index].productPrice = value
    setProduct(newProduct)
  }
  const onChangeProductAmount = (value, id) => {
    const index = product.findIndex(item => item.id == id)
    const newProduct = [...product]
    newProduct[index].productAmount = value
    setProduct(newProduct)
  }
  const onSelectImage = (event) => {
    setRawImage(event.target.files[0])
    setShowImage(URL.createObjectURL(event.target.files[0]))

  }
  const onDeletedImage = () => {
    inputEl.current.value = ""
    setRawImage(null)
    setShowImage(null)
  }
  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={(e) => onSubmitForm(e)}>
      {product.map(item => {
        return (
          <React.Fragment key={item.id}>
            <TextField
              required
              id="outlined-required"
              label="ชื่อสินค้า"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={item.productName}
              onChange={e => onChangeProductName(e.target.value, item.id)}
            />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <TextField
                required
                id="standard-number"
                label="จำนวน"
                type="number"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                value={item.productAmount}
                onChange={e => onChangeProductAmount(e.target.value, item.id)}
              />
              <FormControl fullWidth variant="outlined" size="small" style={{ marginTop: 16, marginLeft: 10 }} required>
                <InputLabel htmlFor="outlined-adornment-amount">ราคา</InputLabel>
                <OutlinedInput
                  required
                  size="small"
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">฿</InputAdornment>}
                  labelWidth={60}
                  value={item.productPrice}
                  onChange={e => onChangeProductPrice(e.target.value, item.id)}
                />
              </FormControl>

            </div>
            <Divider style={{
              marginTop: 15, backgroundColor: color[props.store]
            }} />
          </React.Fragment>
        )
      })}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button fullWidth
          style={{
            backgroundColor: color[props.store], color: "white", marginTop: 10
          }}
          size="small"
          onClick={onAddProduct}
        >+ เพิ่มสินค้า
        </Button>
        <Button fullWidth style={{
          backgroundColor: product.length === 1 ? "grey" : "#d32f2f", color: "white", marginTop: 10, marginLeft: 20
        }}
          disabled={product.length === 1 ? true : false}
          size="small"
          onClick={onDeleteProduct}>- ลบสินค้า</Button>
      </div>

      <TextField
        id="outlined-required"
        label="@twitter"
        required
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
      />
      <TextField
        required
        id="outlined-multiline-static"
        label="ชื่อ-ที่อยู่-เบอร์โทร"
        multiline
        rows={3}
        variant="outlined"
        fullWidth
        address={address}
        onChange={(e) => setAddress(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="outlined-required"
        label="Note"
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        address={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <RadioGroup row style={{ marginTop: 10 }} required value={logist} onChange={(e) => setLogist(e.target.value)}>
        <FormControlLabel
          value="type1"
          control={<Radio size="small" />}
          label="ลงทะเบียน"
          size="small"
          style={{ color: 'grey' }}
        />
        <FormControlLabel
          value="type2"
          control={<Radio size="small" />}
          label="EMS"
          size="small"
          style={{ color: 'grey' }}
        />
      </RadioGroup>
      {showImage ? <SlipPayment image={showImage} store={props.store} onDeletedImage={onDeletedImage} /> : null}

      <Button style={{ backgroundColor: '#03a9f4', color: 'white', marginTop: 5 }} onClick={() => inputEl.current.click()} size="small" > <BackupIcon style={{ marginRight: 10 }} />อัพโหลดสลิปการโอน</Button>
      <input type="file" accept="image/*" style={{ display: 'none' }} ref={inputEl} onChange={onSelectImage} />
      <div style={{ paddingTop: 5 }}>
        <span style={{ color: 'grey' }}>* {payment[props.store]}</span>
        <br></br>
        <span style={{ color: 'grey' }}>* สริตา สงวนศักดิ์ศรี 089-718-4375 True Wallet ค่าธรรมเนียม 15 บาท</span>
      </div>

      <Button type="submit" style={{ backgroundColor: '#4caf50', color: "white", marginTop: 10 }} fullWidth size="small">
        Submit
      </Button>

    </form >
  )
}

export default FormInput