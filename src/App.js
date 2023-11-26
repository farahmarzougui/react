
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'lionel messi',
        bio: 'Lionel Messi, parfois surnommé Leo Messi, né le 24 juin 1987 à Rosario en Argentine, ',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrVD4lr8KfS4OML1Tz5CIutCfN6KoI0gUmg&usqp=CAU',
        profession: 'joueur',
      },
      show: false,
      mountedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ mountedTime: prevState.mountedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleToggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Profil</h1>
        <button onClick={this.handleToggleShow}>Basculer l'affichage</button>

        {show && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p> le montage : {mountedTime} secondes</p>
      </div>
    );
  }
}

export default App;
