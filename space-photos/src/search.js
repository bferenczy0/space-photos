import React, {Component} from 'react'
import $ from 'jquery'

class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {search: '', output: {}, image: {}, description: '',x: 0}
    }

    handleChange = (event) => {
        this.setState({search: event.target.value})
    }

    enter = (event) => {
        if (event.key === 'Enter') {
            this.searchItem(this.state.search)
        }
    }

    randNumber = (val) => {
        return Math.floor(Math.random()*val)
    }

    searchItem = (item) => {
        $.get(`https://images-api.nasa.gov/search?q=${item}`, (response) => {
            this.setState({output: response.collection})
        })
        setTimeout(() => {this.setState({x: this.randNumber(this.state.output.items.length)})}, 1000)
        setTimeout(() => {this.setState({image : this.state.output.items[this.state.x].links[0].href})}, 1000)
        setTimeout(() => {this.setState({description : this.state.output.items[this.state.x].data[0].description})}, 1000)
    }

    return = () => {
        this.setState({image: {}})
        this.setState({description: ''})
    }

    render () {
        return (
            <div>
                <input type='text' id='input' onChange={this.handleChange} onKeyDown={this.enter}/>
                <button type='clear' id='clear' onClick={this.return}>Clear</button><br></br>
                <img id='search image' alt='' src={this.state.image} style={{width:'small',height:'small'}}/><br></br>
                <span id='description'>{this.state.description}</span>
            </div>
        )
    }
}

export default Search