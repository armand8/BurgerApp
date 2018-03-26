import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {quantity: 0};
  }

  render() {
    return (
      <div>
        <Panier quantity={this.state.quantity}/>
        <BurgerList title={this.props.title} onClick={this.handleClick}/>
        <Footer/>
      </div>
    );
  }
  
  handleClick (event) {
  console.log(this.state.quantity);
  this.setState({quantity: this.state.quantity+1});
  }
  
}

class Footer extends React.Component {
  
  constructor() {
    super();
  }
  
  render() {
    return (
      <nav className="bar bar-tab">
  <a className="tab-item active" href="#">
    <span className="icon icon-home"></span>
    <span className="tab-label">Home</span>
  </a>
  <a className="tab-item" href="#">
    <span className="icon icon-person"></span>
    <span className="tab-label">Profile</span>
  </a>
  <a className="tab-item" href="#">
    <span className="icon icon-star-filled"></span>
    <span className="tab-label">Favorites</span>
  </a>
  <a className="tab-item" href="#">
    <span className="icon icon-search"></span>
    <span className="tab-label">Search</span>
  </a>
  <a className="tab-item" href="#">
    <span className="icon icon-gear"></span>
    <span className="tab-label">Settings</span>
  </a>
</nav>
      );
  }
}


class Panier extends React.Component {
  
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
      
        <header className="bar bar-nav">
          <div>
            <i className="icon fa fa-shopping-cart pointer" aria-hidden="true"> 
              <span className="badge">{this.props.quantity}</span>
            </i>                   
          </div>
        </header>

      </div>);
  }
}


class BurgerList extends React.Component {
  
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="marginTop">

        <h3>{this.props.title}</h3>

        <ul className="table-view">
          <BurgerPoulet onClick={this.props.onClick}/>
          <BurgerNewYorker onClick={this.props.onClick}/>
          <BurgerAmberger onClick={this.props.onClick}/>
        </ul>

      </div>
    );
  }
}


class BurgerPoulet extends React.Component {
    
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {quantity: 0};
  }
  

  render() {

    return (
  
      <li className="table-view-cell media pointer" onClick={this.handleClick}>
        <img className="fade media-object pull-left" src="https://lacapsule.academy/wks2/burger_3.png" />
        <div className="media-body">
          Le Poulet 11€
          <p>Burger de poulet, cheddar, avocat, tomate, oignons, sauce au citron vert</p>
        </div>
        <span className="badge">{this.state.quantity}</span>
      </li>
    );
  }
  
  handleClick (event) {
  console.log(event.button);
  this.props.onClick();
  this.setState({quantity: this.state.quantity+1});
  }
  
}

class BurgerNewYorker extends React.Component {
    
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {quantity: 0};
  }
  

  render() {

    return (
  
      <li className="table-view-cell media pointer" onClick={this.handleClick}>
      <img className="fade media-object pull-left" src="https://lacapsule.academy/wks2/burger_3.png" />
      <div className="media-body">
        Le New-Yorker 12€
        <p>Burger de boeuf limousin, cheddar, oignons rings, roquette, tomate, cornichon, sauce paprika</p>
      </div>
      <span className="badge">{this.state.quantity}</span>
      </li>
    );
  }
  
  handleClick (event) {
    this.props.onClick();
  this.setState({quantity: this.state.quantity+1});
  }
  
}

class BurgerAmberger extends React.Component {
    
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {quantity: 0};
  }
  

  render() {

    return (
  
      <li className="table-view-cell media pointer" onClick={this.handleClick}>
      <img className="fade media-object pull-left" src="https://lacapsule.academy/wks2/burger_3.png" />
      <div className="media-body">
        Le Amberger 10€
        <p>Burger de boeuf limousin, oignons confits, salade, tomate, fourme d’Ambert et noix</p>
      </div>
      <span className="badge">{this.state.quantity}</span>
      </li>
    );
  }
  
  handleClick (event) {
  console.log(this.props.onClick);
  this.props.onClick();
  this.setState({quantity: this.state.quantity+1});
  }
  
}


var titleApp = 'Choisissez nos burgers';

ReactDOM.render(
  <App title={titleApp}/>,
  document.getElementById('container')
);


