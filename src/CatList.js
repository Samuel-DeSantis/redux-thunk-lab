import React, { Component } from 'react'

export default class CatList extends Component {
    
    listCats = () => {
        return this.props.catPics.map(pic => {
            /* return */ <img key={pic.id} src={pic.url} alt={pic.id} />
        })
    }

    render () {return<div>{this.listCats()}</div>}
}