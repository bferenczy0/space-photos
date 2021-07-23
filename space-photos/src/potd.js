import React, {Component} from 'react'
import $ from 'jquery'

class Potd extends Component {
    constructor(props) {
        super(props)
        this.state = { apiKey: 'J6ylGkg25aVocfNAXFT34KsqgE5QrSFlAwp3dwKf', photo: {}}
    }

    handleClick = () => {
            $.get(`https://api.nasa.gov/planetary/apod?api_key=${this.state.apiKey}`, (response) => {
            this.setState({photo : response})
        })
    }

    return = () => {
        this.setState({photo : {}})
    }

    render () {
        return (
            <div>
                <button type='submit' id='potdButton' onClick={this.handleClick}>Photo of the Day</button>
                <button type='submit' id='clearPotd' onClick={this.return}>Clear</button><br></br><br></br>
                <span id='title' style={{fontSize:'larger'}}>{this.state.photo.title}</span><br></br>
                <img id='potdImg' alt='' src={this.state.photo.hdurl} style={{width:'1000px'}}/><br></br>
                <span id='explanation'>{this.state.photo.explanation}</span>
            </div>
        )
    }
}

export default Potd
