import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { Message } from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'

export const Create = () => {
    let navigate = useNavigate()
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    console.log(firstName);
    console.log(lastName);
    const sendDatatoAPI =() =>{
        axios.post('https://63a277bbba35b96522f72054.mockapi.io/crud',{firstName,lastName})
            .then(response=>{navigate('/read');
            })
    }
    
    
  return (
    <Form>
    <Form.Field>
      <label>Họ đệm</label>
      <input placeholder='First Name' value={firstName} onChange={
        (e:React.ChangeEvent<HTMLInputElement>)=> {setFirstName(e.target.value)}
        } />
    </Form.Field>
    <Form.Field>
      <label>Tên</label>
      <input placeholder='Last Name' value={lastName} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> {setLastName(e.target.value)}} />
    </Form.Field>
    <Form.Field>
      <label>Địa chỉ</label>
      <input placeholder='First Name' value={firstName} onChange={
        (e:React.ChangeEvent<HTMLInputElement>)=> {setFirstName(e.target.value)}
        } />
    </Form.Field>
    <Form.Field>
      <label>Số điện thoại</label>
      <input placeholder='First Name' value={firstName} onChange={
        (e:React.ChangeEvent<HTMLInputElement>)=> {setFirstName(e.target.value)}
        } />
    </Form.Field>
    
    <Button type='submit' onClick={sendDatatoAPI} >Submit</Button>
    
  </Form>
  )
}
