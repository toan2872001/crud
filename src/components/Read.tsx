import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Button, Confirm, Table } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
interface IApiData{
    id:number;
    firstName:string;
    lastName:string;
}
export const Read = () => {
    const [open, setOpen] = useState(false)
    const [apiData,setapiData] = useState<IApiData[] | null>(null)
    useEffect(()=>{
        getData()
    },[]) 
    const setID =(id:number,firstName:string,lastName:string)=>{
        console.log(id);
        localStorage.setItem('ID',id.toString())
        localStorage.setItem('firstName',firstName)
        localStorage.setItem('lastName',lastName)
    }
    const getData =()=>{
      axios.get('https://63a277bbba35b96522f72054.mockapi.io/crud')
      .then(response=>{setapiData(response.data);
      })
    }
    const onDelete=(id:number)=>{
      axios.delete(`https://63a277bbba35b96522f72054.mockapi.io/crud/${id}`)
      .then(()=>{getData()})
    }
  return (
    
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Họ đệm</Table.HeaderCell>
        <Table.HeaderCell>Tên</Table.HeaderCell>
        <Table.HeaderCell>Tên</Table.HeaderCell>
        <Table.HeaderCell>Tên</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apiData?.map(item=>{
            return(
                <Table.Row key={item.id}>
        <Table.Cell>{item.id}</Table.Cell>
        <Table.Cell>{item.firstName}</Table.Cell>
        <Table.Cell>{item.lastName}</Table.Cell>
        
        <Table.Cell>
          <Link to = '/update'>
            <Button color='green' onClick={()=>setID(item.id,item.firstName,item.lastName)}>Update</Button>
          </Link>
        </Table.Cell>
        
        
            <Table.Cell><Button color='red' onClick={()=>{setOpen(true)}}>Delete</Button>
            <Confirm
              open={open}
              onCancel={()=>{setOpen(false)}}
              onConfirm={()=>{onDelete(item.id); setOpen(false)}}
            />
            </Table.Cell>
        
      </Table.Row>
            )
        })}
      
      
    </Table.Body>
  </Table>
  
  )


}
