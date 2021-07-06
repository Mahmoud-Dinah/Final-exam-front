import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class CrudDataPage extends Component {
    render() {
        return (
            this.props.apiCrudDataArr.map((obj, idx)=> {
                return (
                    <div key={idx}> 
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={obj.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{obj.strDrink}</Card.Title>
    <Card.Text>
    {obj.idDrink}
    </Card.Text>
    <Button variant="primary" onClick={e => this.props.deleteItem(obj.idDrink)}>delete drink</Button>
    <Button variant="primary" onClick={e => this.props.updateItem(obj.strDrinkThumb, obj.strDrink)}>Update this drink</Button>
  </Card.Body>
</Card>
                </div>
                )
            }
            ) 
            
        )
    }
}

export default CrudDataPage;
