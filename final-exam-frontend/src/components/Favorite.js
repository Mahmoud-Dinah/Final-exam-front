import axios from 'axios';
import React, { Component } from 'react';
import CrudDataPage from './CrudDataPage';

export class Favorite extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: process.env.REACT_APP_SERVER_URL,
            apiCrudDataArr: [],
            showCrudApiCompnonet: false,
            message: '',
            showMessage: false,
            showUpdateForm: false,
            strDrink: '',
            idDrink: '',
            strDrinkThumb: '',
        };
    }
    componentDidMount = async () => {
        const request = await axios.get(`${this.state.url}/alldata/fav`);
        this.setState({
            apiCrudDataArr: request.data,
            showCrudApiCompnonet: true
        })
        console.log(this.state.apiCrudDataArr);
    }

    deleteItem = async (idDrink) =>{
        const request = await axios.get(`${this.state.url}/alldata/fav/${idDrink}`);    
        this.setState({
            apiCrudDataArr: request.data
        })
    
    }





    render() {
        return (
           <>
           {this.showCrudApiCompnonet &&
           <CrudDataPage
           apiCrudDataArr={this.state.apiCrudDataArr}
           deleteItem={this.deleteItem}
           />
            
           }
           </>
        )
    }
}

export default Favorite
