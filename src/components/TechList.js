import React, { Component } from 'react'

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'NodeJs',
      'ReactJs',
      'React Native',
    ]
  }

  handleInputChange = e => this.setState({ newTech: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ techs: [ ...this.state.techs, this.state.newTech ], newTech: '' })
  }

  handleDelete = (tech) => {
    console.log(tech)
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    const { techs, newTech } = this.state;

    return (
      <>
      <h1>{newTech}</h1>
        <ul>
          {techs.map(tech => <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)} />)}
        </ul>
        <input type="text" onChange={this.handleInputChange} value={newTech}/>
        <button onClick={this.handleSubmit}>Enviar</button>
      </>
    )
  }
}

export default TechList;