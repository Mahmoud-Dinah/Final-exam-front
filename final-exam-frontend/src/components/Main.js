import React, { Component } from 'react';
import axios from 'axios';
import ApiDataCompnent from './ApiDataCompnent';

export class Main extends Component {
        constructor(props){
            super(props);
            this.state = {
                url: process.env.REACT_APP_SERVER_URL,
                apiAllDataArr: [],
                showAllApiCompnonet: false,
                message: '',
                showMessage: false
            };
        }

        componentDidMount = async () => {
            await axios.get(`${this.state.url}/alldata`).then((response) => {
                this.setState({
                    apiAllDataArr: response.data.drinks,
                    showAllApiCompnonet: true
                
                });
                
            }).catch((error) => console.log(error));     
            console.log(this.state.apiAllDataArr);
        };
        

        addToFavorite = async (dataObj) => {
            const postRequest = await axios.post(`${this.state.url}/alldata/fav`, dataObj);
            this.setState({
                message: postRequest.data,
                showMessage:true
            });
        };

    render() {
        return (
            <>
             {this.state.showMessage && 
             <h3>{this.state.message}</h3>
             }

             {this.state.showAllApiCompnonet &&
                
                    <ApiDataCompnent 
                    apiAllDataArr= {this.state.apiAllDataArr}
                    addToFavorite={this.addToFavorite}
                        />
                }
            </>
        )}
    }

export default Main
