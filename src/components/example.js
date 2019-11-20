import React, { Component } from 'react'

class Examp extends Component {
    constructor (props) {
        super(props)
    this.state = {
       items: []
    }
   /*  axios.get('http://localhost:3002/dataRooms.json')
    .then(res => {
        this.setState({items: res.data})
    }) */
    }
    render () {
        //console.log('life is good', this.state.items)
        return (
            <div>
             
            </div>
        )
    }
}

export default Examp;