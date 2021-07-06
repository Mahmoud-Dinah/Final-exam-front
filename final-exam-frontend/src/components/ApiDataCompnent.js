import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class ApiDataCompnent extends Component {
    render() {
        return (
            this.props.apiAllDataArr.slice(0,10).map((obj, idx)=> {
                return (
                    <div key={idx}> 
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={obj.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{obj.strDrink}</Card.Title>
    <Card.Text>
    {obj.idDrink}
    </Card.Text>
    <Button variant="primary" onClick={e => this.props.addToFavorite(obj)}>Add me to your favorite</Button>
  </Card.Body>
</Card>
                </div>
                )
            }
            ) 
            
        )
    }
}




export default ApiDataCompnent
