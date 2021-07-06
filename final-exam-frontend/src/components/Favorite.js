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

    showUpdateForm = async (strDrink, strDrinkThumb) => {
        this.setState ({
            strDrink:strDrink,
            strDrinkThumb:strDrinkThumb,
            showUpdateForm:true
        })
    }

    updatestrDrinkState = (e) => this.setState({strDrink: e.target.value})
    updatestrstrDrinkThumbState = (e) => this.setState({strDrinkThumb: e.target.value})

    





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
