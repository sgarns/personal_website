import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaLinkedin, FaRegStar, FaTwitter } from 'react-icons/fa';

class App extends React.Component {
  alphabet = ['ALL'].concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));

  unused_letters = ['I','O','Q','U','X','Z']

  favorites = {
  "The National Gallery, London": null,
  "Yad Vashem": null,
  "Van Gogh Museum": null,
  "Rijksmuseum": null,
  "Palais de Tokyo": null,
  "Palazzo Fortuny": null,
  "Glasstress": null,
  "Salvador Dali Museum": null,
  "Alcatraz Island": null,
  "Galleria Borghese": null,
  "Louisiana Museum of Modern Art": null,
  "Flannery O’Connor Childhood Home": null,
  "The Chinati Foundation": null,
  "Saatchi Gallery": null,
  "San Francisco Museum of Modern Art": null,
  "La Sagrada Familia": null,
  "The Neon Museum": null
}

museums = {
  "Louvre Museum": "Paris, France",
  "Metropolitan Museum of Art": "New York, New York",
  "Museo Nacional del Prado": "Madrid, Spain",
  "The National Gallery, London": "London, U.K.",
  "The Uffizi Galleries": "Florence, Italy",
  "Yad Vashem": "Jerusalem, Israel",
  "Museum of Fine Arts, Boston": "Boston, Massachusetts",
  "Museum of Modern Art": "New York, New York",
  "The Frick Collection": "New York, New York",
  "The Morgan Library & Museum": "New York, New York",
  "Kunsthistorisches Museum": "Vienna, Austria",
  "Vatican Museums": "Rome, Italy",
  "British Museum": "London, U.K.",
  "Saatchi Gallery": "London, U.K.",
  "Museu Picasso": "Barcelona, Spain",
  "Fundació Joan Miró": "Barcelona, Spain",
  "La Sagrada Familia": "Barcelona, Spain",
  "Park Güell": "Barcelona, Spain",
  "Van Gogh Museum": "Amsterdam, Netherlands",
  "Rijksmuseum": "Amsterdam, Netherlands",
  "Anne Frank House": "Amsterdam, Netherlands",
  "Stedeljik Museum": "Amsterdam, Netherlands",
  "Museum Het Rembrandthuis": "Amsterdam, Netherlands",
  "musée du quai Branly": "Paris, France",
  "Palace of Versailles": "Versailles, France",
  "Whitney Museum of American Art": "New York, New York",
  "Asian Art Museum": "San Francisco, California",
  "San Francisco Museum of Modern Art": "San Francisco, California",
  "de Young Museum": "San Francisco, California",
  "The Walt Disney Family Museum": "San Francisco, California",
  "Legion of Honor": "San Francisco, California",
  "Palais de Tokyo": "Paris, France",
  "Los Angeles County Museum of Art": "Los Angeles, California",
  "The Broad": "Los Angeles, California",
  "Ca' Pesaro": "Venice, Italy",
  "Palazzo Fortuny": "Venice, Italy",
  "Colosseum": "Rome, Italy",
  "Fondazione Prada": "Rome, Italy",
  "La biennale di Venezia": "Venice, Italy",
  "Palazzo Grassi": "Venice, Italy",
  "Glasstress": "Venice, Italy",
  "Solomon R. Guggenheim Museum": "New York, New York",
  "Galleria Borghese": "Rome, Italy",
  "J. Paul Getty Museum": "Los Angeles, California",
  "Louisiana Museum of Modern Art": "Humlebaek, Denmark",
  "ARKEN Museum of Modern Art": "Ishøj, Denmark",
  "Tate Modern": "London, U.K.",
  "Tate": "London, U.K.",
  "Schönbrunn Palace": "Vienna, Austria",
  "The Little Museum of Dublin": "Dublin, Ireland",
  "Flannery O’Connor Childhood Home": "Savannah, Georgia",
  "The Chinati Foundation": "Marfa, Texas",
  "Judd Foundation": "Marfa, Texas",
  "American Museum of Natural History": "New York, New York",
  "Alcatraz Island": "San Francisco, California",
  "Griffith Observatory": "Los Angeles, California",
  "Brooklyn Museum": "New York, New York",
  "New York Historical Society": "New York, New York",
  "Museum of Arts and Design": "New York, New York",
  "Rubin Museum of Art": "New York, New York",
  "MoMA PS1": "New York, New York",
  "Neue Galerie": "New York, New York",
  "National Museum of Mathematics": "New York, New York",
  "Cooper Hewitt, Smithsonian Design Museum": "New York, New York",
  "New Museum": "New York, New York",
  "Rubell Family Collection": "Miami, Florida",
  "Georgia O'Keefe Museum": "Santa Fe, New Mexico",
  "Totem Heritage Center": "Ketchikan, Alaska",
  "Salvador Dali Museum": "St. Petersburg, Florida",
  "Exploratorium": "San Francisco, California",
  "California Academy of Sciences": "San Francisco, California",
  "Georgia Aquarium": "Atlanta, Georgia",
  "Musée d'Art Moderne de la Ville de Paris": "Paris, France",
  "Deutsches Technikmuseum Berlin": "Berlin, Germany",
  "Denver Art Museum": "Denver, Colorado",
  "LBJ Presidential Library": "Austin, Texas",
  "The Jewish Museum": "New York, New York",
  "Contemporary Jewish Museum": "San Francisco, California",
  "Hearst Castle": "San Simeon, California",
  "The Neon Museum": "Las Vegas, Nevada",
  "New Orleans Pharmacy Museum": "New Orleans, Louisiana",
  "Arthur Roger Gallery" : "New Orleans, Louisiana",
  "The National WWII Museum": "New Orleans, Louisiana"
}

constructor(props) {
  super(props);
  this.state = {
    museumList: this.museums,
    selectedLetter: 'ALL',
  };
}

letterSelection = (letter) => {
  var newMuseumList = []
  if (letter === "ALL") {
    newMuseumList = this.museums;
  } else {
    var allMuseums = this.museums;
    newMuseumList = Object.keys(allMuseums).reduce(function(newMuseums, museum) {
      if (museum[0].toLowerCase() === letter.toLowerCase()) {
        newMuseums[museum] = allMuseums[museum];
      }
    return newMuseums;
    }, {});
  }
  return this.setState({
    museumList: newMuseumList,
    selectedLetter: letter,
  });
}

displayMuseums() {
  return Object.keys(this.state.museumList).map((museum) => {
    if (museum in this.favorites) {
      return (
        <div>
          <p className="Museum-name"><FaRegStar size="15" /> {museum}</p>
          <p className="Museum-city">{this.state.museumList[museum]}</p>
        </div>
      )
    } else {
      return (
        <div>
          <p className="Museum-name">{museum}</p>
          <p className="Museum-city">{this.state.museumList[museum]}</p>
        </div>
      )
    }
  });
}

render() {
  var alphabet_display = this.alphabet.map(letter => {
    if (letter === this.state.selectedLetter) {
      return (
        <div onClick={() => this.letterSelection(letter)}>
            // <b><a href="javascript:void();">{letter}</a></b>
            <b>{letter}</b>
        </div>
      )
    } else if (this.unused_letters.includes(letter)) {
      return (
        <div onClick={() => this.letterSelection(letter)}>
            <p style={{color: 'light gray'}}>{letter}</p>
        </div>
      )
    } else {
      return (
        <div onClick={() => this.letterSelection(letter)}>
            {letter}
            // <a href="javascript:void();">{letter}</a>
        </div>
      )
    }
  });

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Sara Garner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Talks</Nav.Link>
            <Nav.Link href="#link">Museums</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="App-body">
        <header>
          <div className = "About-me">
            <img alt="Headshot" className="headshot" src="https://saragarner-website-images.s3.amazonaws.com/headshot.png" />
            <h3> Hello! Thanks for visiting.</h3>
            <p> I'm Sara. I'm a Software Engineer, and I enjoy side projects, reading, and planning trips around museums.</p>
            <p> I'm currently at <a href="https://stripe.com/">Stripe</a>. Previously, I was a Software Engineer at <a href="https://houseparty.com/">Houseparty</a>, and a Data Scientist and Software Engineer at <a href="https://www.facebook.com">Facebook.</a></p>
          </div>
        </header>
        <p> Museums I've visited </p>
        <hr></hr>
        <div className="Alphabet">
          {alphabet_display}
        </div>
        <div className="Museums">
          {this.displayMuseums()}
        </div>
      </div>
      <div className="icons"><a href="https://www.linkedin.com/in/garnersara/"><FaLinkedin className="icon" size="25" /></a><a href="https://www.twitter.com/sgarns"><FaTwitter className="icon" size="25" /></a></div>
    </div>
  );
}

}

export default App;
