import React from "react"
import styled from '@emotion/styled';

const Table  = styled.table`
border: 1px solid #ccc;
border-collapse: collapse;
margin: 10px auto;
width: 100%;
table-layout: fixed;
`
const Tr  = styled.tr`
&:nth-of-type(odd) {
   background: #eee;
} 
`

const Th  = styled.th`
background: #3498db; 
color: white; 
font-weight: bold; 
padding: 10px; 
border: 1px solid #ccc; 
text-align: left; 
font-size: 18px;
`
const Td  = styled.td`
padding: 10px; 
border: 1px solid #ccc; 
text-align: left; 
font-size: 18px;
`

const DataTable =() =>{

    return (
        <Table>
            <thead>
                <Tr>
                <Th> Anene</Th>
                <Th> Anene</Th>
                <Th> Anene</Th>

                </Tr>
            </thead>
            <tbody>
                <Tr>
                    <Td> anenemnme md,mfd,m</Td>
                    <Td> anenemnme md,mfd,m</Td>
                    <Td> anenemnme md,mfd,m</Td>
                </Tr>


            </tbody>
        
        
        </Table>
    )
}
export default  DataTable

