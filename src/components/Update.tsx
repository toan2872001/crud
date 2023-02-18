import React, {useEffect, useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { Message } from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'

export const Update = () => {
    let navigate = useNavigate()
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    console.log(firstName);
    console.log(lastName);
    const [ID, setID] = useState('')
    const updateDatatoAPI =() =>{
        axios.put(`https://63a277bbba35b96522f72054.mockapi.io/crud/${ID}`,{firstName,lastName})
            .then(response=>{navigate('/read')
            })
    }
    
    useEffect(()=>{
        setID(localStorage.getItem('ID')||'')
        setFirstName(localStorage.getItem('firstName')||''); 
        setLastName(localStorage.getItem('lastName')||'');
    
    },[])
    
  return (
    <Form>
    <Form.Field>
      <label>Họ Đệm</label>
      <input placeholder='First Name' value={firstName} onChange={
        (e:React.ChangeEvent<HTMLInputElement>)=> {setFirstName(e.target.value)}
        } />
    </Form.Field>
    <Form.Field>
      <label>Tên</label>
      <input placeholder='Last Name' value={lastName} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> {setLastName(e.target.value)}} />
    </Form.Field>
    <Button type='submit' onClick={updateDatatoAPI} >Update</Button>
  </Form>
  )
}
