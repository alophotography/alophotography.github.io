import React, { Component } from 'react';

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.navBarOptions = [
      {title: 'collections', link: ''}, // expose or look
      {title: 'cameras', link: ''}, // click
      {title: 'about', link: ''}, // read
      {title: 'contact', link: ''} // contact
    ];
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {
              this.navBarOptions.map(function(option) {
                return (
                  <li className="nav-item" key={option.title}>
                    <a className="nav-link" href={option.link}>{option.title}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>

      </nav>
    );
  }

}

export default NavigationBar;
