import React, { Component } from 'react'

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

  render() {
    const { techs, newTech } = this.state;

    return (
      <>
      <h1>{newTech}</h1>
        <ul>
          {techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input type="text" onChange={this.handleInputChange} value={newTech}/>
        <button onClick={this.handleSubmit}>Enviar</button>
      </>
    )
  }
}

export default TechList;