import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { FaLinkedin, FaMedium, FaRegStar, FaTwitterSquare } from 'react-icons/fa';

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
 "Alcatraz Island": "San Francisco, California",
 "American Museum of Natural History": "New York, New York",
 "Anne Frank House": "Amsterdam, Netherlands",
 "ARKEN Museum of Modern Art": "Ishøj, Denmark",
 "Arthur Roger Gallery" : "New Orleans, Louisiana",
 "Asian Art Museum": "San Francisco, California",
 "British Museum": "London, U.K.",
 "Brooklyn Museum": "New York, New York",
 "Ca' Pesaro": "Venice, Italy",
 "California Academy of Sciences": "San Francisco, California",
 "Colosseum": "Rome, Italy",
 "Contemporary Jewish Museum": "San Francisco, California",
 "Cooper Hewitt, Smithsonian Design Museum": "New York, New York",
 "de Young Museum": "San Francisco, California",
 "Denver Art Museum": "Denver, Colorado",
 "Deutsches Technikmuseum Berlin": "Berlin, Germany",
 "Exploratorium": "San Francisco, California",
 "Flannery O’Connor Childhood Home": "Savannah, Georgia",
 "Fondazione Prada": "Rome, Italy",
 "Fundació Joan Miró": "Barcelona, Spain",
 "Galleria Borghese": "Rome, Italy",
 "Georgia Aquarium": "Atlanta, Georgia",
 "Georgia O'Keefe Museum": "Santa Fe, New Mexico",
 "Glasstress": "Venice, Italy",
 "Griffith Observatory": "Los Angeles, California",
 "Hearst Castle": "San Simeon, California",
 "J. Paul Getty Museum": "Los Angeles, California",
 "Judd Foundation": "Marfa, Texas",
 "Kunsthistorisches Museum": "Vienna, Austria",
 "La biennale di Venezia": "Venice, Italy",
 "La Sagrada Familia": "Barcelona, Spain",
 "LBJ Presidential Library": "Austin, Texas",
 "Legion of Honor": "San Francisco, California",
 "Los Angeles County Museum of Art": "Los Angeles, California",
 "Louisiana Museum of Modern Art": "Humlebaek, Denmark",
 "Metropolitan Museum of Art": "New York, New York",
 "MoMA PS1": "New York, New York",
 "Museo Nacional del Prado": "Madrid, Spain",
 "Museu Picasso": "Barcelona, Spain",
 "Museum Het Rembrandthuis": "Amsterdam, Netherlands",
 "Museum of Arts and Design": "New York, New York",
 "Museum of Fine Arts, Boston": "Boston, Massachusetts",
 "Museum of Modern Art": "New York, New York",
 "Musée d'Art Moderne de la Ville de Paris": "Paris, France",
 "musée du quai Branly": "Paris, France",
 "National Museum of Mathematics": "New York, New York",
 "Neue Galerie": "New York, New York",
 "New Museum": "New York, New York",
 "New Orleans Pharmacy Museum": "New Orleans, Louisiana",
 "New York Historical Society": "New York, New York",
 "Palace of Versailles": "Versailles, France",
 "Palais de Tokyo": "Paris, France",
 "Palazzo Fortuny": "Venice, Italy",
 "Palazzo Grassi": "Venice, Italy",
 "Park Güell": "Barcelona, Spain",
 "Rijksmuseum": "Amsterdam, Netherlands",
 "Rubell Family Collection": "Miami, Florida",
 "Rubin Museum of Art": "New York, New York",
 "Saatchi Gallery": "London, U.K.",
 "Salvador Dali Museum": "St. Petersburg, Florida",
 "San Francisco Museum of Modern Art": "San Francisco, California",
 "Schönbrunn Palace": "Vienna, Austria",
 "Solomon R. Guggenheim Museum": "New York, New York",
 "Stedeljik Museum": "Amsterdam, Netherlands",
 "Tate Modern": "London, U.K.",
 "Tate": "London, U.K.",
 "The Broad": "Los Angeles, California",
 "The Chinati Foundation": "Marfa, Texas",
 "The Frick Collection": "New York, New York",
 "The Jewish Museum": "New York, New York",
 "The Little Museum of Dublin": "Dublin, Ireland",
 "The Morgan Library & Museum": "New York, New York",
 "The National Gallery, London": "London, U.K.",
 "The National WWII Museum": "New Orleans, Louisiana",
 "The Neon Museum": "Las Vegas, Nevada",
 "The Uffizi Galleries": "Florence, Italy",
 "The Walt Disney Family Museum": "San Francisco, California",
 "Totem Heritage Center": "Ketchikan, Alaska",
 "Van Gogh Museum": "Amsterdam, Netherlands",
 "Vatican Museums": "Rome, Italy",
 "Whitney Museum of American Art": "New York, New York",
 "Yad Vashem": "Jerusalem, Israel",
 "Louvre Museum": "Paris, France",
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
        <div key={museum}>
          <p className="Museum-name"><FaRegStar size="15" /> {museum}</p>
          <p className="Museum-city">{this.state.museumList[museum]}</p>
        </div>
      )
    } else {
      return (
        <div key={museum}>
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
        <Button variant="light" key={letter} onClick={() => this.letterSelection(letter)}>
            <b>{letter}</b>
        </Button>
      )
    } else if (this.unused_letters.includes(letter)) {
      return (
        <Button variant="light" key={letter} disabled onClick={() => this.letterSelection(letter)}>
            {letter}
        </Button>
      )
    } else {
      return (
        <Button variant="light" key={letter} onClick={() => this.letterSelection(letter)}>
            {letter}
        </Button>
      )
    }
  });

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Sara Garner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="justify-content-end" style={{ width: "100%"}}>
            <a href="https://www.linkedin.com/in/garnersara/"><FaLinkedin className="icon" size="25" /></a>
            <a href="https://www.twitter.com/sgarns"><FaTwitterSquare className="icon" size="25" /></a>
            <a href="https://medium.com/@saragarner"><FaMedium className="icon" size="25" /></a>
          </Nav>
      </Navbar>
      <div className="App-body">
        <header>
          <div className = "About-me">
            <img alt="Headshot" className="headshot" src="https://saragarner-website-images.s3.amazonaws.com/headshot.png" />
            <h3> Hello! Thanks for visiting.</h3>
            <p> I'm Sara. I'm a Software Engineer, and I enjoy side projects,
             crosswords,
            <a href="https://www.goodreads.com/review/list/5560633?shelf=read"> reading</a>,
            and <a href="https://www.instagram.com/sgarns/">planning trips around museums.</a></p>
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
    </div>
  );
}

}

export default App;
