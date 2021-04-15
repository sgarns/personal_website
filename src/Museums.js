import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { FaRegStar } from 'react-icons/fa';
import { useHistory } from "react-router-dom";

class Museums extends React.Component {

  favorites = [
    {"The National Gallery, London": "London, U.K."},
    {"Yad Vashem": "Jerusalem, Israel"},
    {"Van Gogh Museum": "Amsterdam, Netherlands"},
    {"Rijksmuseum": "Amsterdam, Netherlands"},
    {"Palais de Tokyo": "Paris, France"},
    {"Palazzo Fortuny": "Venice, Italy"},
    {"Glasstress": "Venice, Italy"},
    {"Salvador Dali Museum": "St. Petersburg, Florida"},
    {"Alcatraz Island": "San Francisco, California"},
    {"Galleria Borghese": "Rome, Italy"},
    {"Louisiana Museum of Modern Art": "Humlebaek, Denmark"},
    {"Flannery O’Connor Childhood Home": "Savannah, Georgia"},
    {"The Chinati Foundation": "Marfa, Texas"},
    {"Saatchi Gallery": "London, U.K."},
    {"San Francisco Museum of Modern Art": "San Francisco, California"},
    {"La Sagrada Familia": "Barcelona, Spain"},
    {"The Neon Museum": "Las Vegas, Nevada"},
    {"Squamish Lil'wat Cultural Centre": "Whistler, British Columbia"},
    {"Mendocino Coast Botanical Gardens": "Mendocino, California"},
    {"Studio Be": "New Orleans, Louisiana"}
  ]

  locations = {
    "United States": ["Alaska", "California", "Colorado", "Florida", "Georgia", "Louisiana", "Massachusetts", "Nevada", "New Mexico", "New York", "Texas", "Washington"],
    "Canada": ["British Columbia"],
    "Europe": ["Austria", "Denmark", "France", "Germany", "Ireland", "Italy", "Netherlands", "Spain", "U.K."],
    "Asia": ["India", "Israel"]
  }

  museums = {
    "Alaska": [
      {"Totem Heritage Center": "Ketchikan, Alaska"}
    ],
    "California": [
      {"Alcatraz Island": "San Francisco, California"},
      {"Asian Art Museum": "San Francisco, California"},
      {"California Academy of Sciences": "San Francisco, California"},
      {"Contemporary Jewish Museum": "San Francisco, California"},
      {"de Young Museum": "San Francisco, California"},
      {"Exploratorium": "San Francisco, California"},
      {"Griffith Observatory": "Los Angeles, California"},
      {"Hearst Castle": "San Simeon, California"},
      {"J. Paul Getty Museum": "Los Angeles, California"},
      {"Legion of Honor": "San Francisco, California"},
      {"Los Angeles County Museum of Art": "Los Angeles, California"},
      {"San Francisco Museum of Modern Art": "San Francisco, California"},
      {"The Broad": "Los Angeles, California"},
      {"The Walt Disney Family Museum": "San Francisco, California"},
      {"Sensorio": "Paso Robles, California"},
      {"Conservatory of Flowers": "San Francisco, California"},
      {"Mendocino Coast Botanical Gardens": "Mendocino, California"}
    ],
    "Colorado": [
      {"Denver Art Museum": "Denver, Colorado"}
    ],
    "Florida": [
      {"Rubell Family Collection": "Miami, Florida"},
      {"Salvador Dali Museum": "St. Petersburg, Florida"},
      {"The Charles Hosmer Morse Museum of American Art": "Winter Park, Florida"},
      {"Norton Museum of Art": "West Palm Beach, Florida"},
      {"The Ernest Hemingway Home and Museum": "Key West, Florida"},
      {"ICE!": "Gaylord Palms, Florida"}
    ],
    "Georgia": [
      {"Flannery O’Connor Childhood Home": "Savannah, Georgia"},
      {"Georgia Aquarium": "Atlanta, Georgia"}
    ],
    "Louisiana": [
      {"Arthur Roger Gallery": "New Orleans, Louisiana"},
      {"New Orleans Pharmacy Museum": "New Orleans, Louisiana"},
      {"The National WWII Museum": "New Orleans, Louisiana"},
      {"Studio Be": "New Orleans, Louisiana"}
    ],
    "Massachusetts": [
      {"Museum of Fine Arts, Boston": "Boston, Massachusetts"},
    ],
    "Nevada": [
      {"The Neon Museum": "Las Vegas, Nevada"}
    ],
    "New Mexico": [
      {"Georgia O'Keefe Museum": "Santa Fe, New Mexico"}
    ],
    "New York": [
      {"American Museum of Natural History": "New York, New York"},
      {"Brooklyn Museum": "Brooklyn, New York"},
      {"Cooper Hewitt, Smithsonian Design Museum": "New York, New York"},
      {"Metropolitan Museum of Art": "New York, New York"},
      {"MoMA PS1": "New York, New York"},
      {"Museum of Arts and Design": "New York, New York"},
      {"Museum of Modern Art": "New York, New York"},
      {"National Museum of Mathematics": "New York, New York"},
      {"Neue Galerie": "New York, New York"},
      {"New Museum": "New York, New York"},
      {"New York Historical Society": "New York, New York"},
      {"Rubin Museum of Art": "New York, New York"},
      {"Solomon R. Guggenheim Museum": "New York, New York"},
      {"The Frick Collection": "New York, New York"},
      {"The Jewish Museum": "New York, New York"},
      {"The Morgan Library & Museum": "New York, New York"},
      {"Whitney Museum of American Art": "New York, New York"}
    ],
    "Texas": [
      {"Judd Foundation": "Marfa, Texas"},
      {"LBJ Presidential Library": "Austin, Texas"},
      {"The Chinati Foundation": "Marfa, Texas"}
    ],
    "Washington": [
      {"Chihuly Garden and Glass": "Seattle, Washington"}
    ],
    "British Columbia": [
      {"Squamish Lil'wat Cultural Centre": "Whistler, British Columbia"}
    ],
    "Austria": [
      {"Kunsthistorisches Museum": "Vienna, Austria"},
      {"Schönbrunn Palace": "Vienna, Austria"}
    ],
    "Denmark": [
      {"ARKEN Museum of Modern Art": "Ishøj, Denmark"},
      {"Louisiana Museum of Modern Art": "Humlebaek, Denmark"}
    ],
    "France": [
      {"Louvre Museum": "Paris, France"},
      {"Musée d'Art Moderne de la Ville de Paris": "Paris, France"},
      {"musée du quai Branly": "Paris, France"},
      {"Palace of Versailles": "Versailles, France"},
      {"Palais de Tokyo": "Paris, France"}
    ],
    "Germany": [
      {"Deutsches Technikmuseum Berlin": "Berlin, Germany"},
    ],
    "India": [
      {"Taj Mahal": "Agra, India"},
      {"Humayun's Tomb": "New Delhi, India"}
    ],
    "Ireland": [
      {"The Little Museum of Dublin": "Dublin, Ireland"}
    ],
    "Israel": [
      {"Yad Vashem": "Jerusalem, Israel"}
    ],
    "Italy": [
      {"Ca' Pesaro": "Venice, Italy"},
      {"Colosseum": "Rome, Italy"},
      {"Fondazione Prada": "Milan, Italy"},
      {"Galleria Borghese": "Rome, Italy"},
      {"Glasstress": "Venice, Italy"},
      {"La biennale di Venezia": "Venice, Italy"},
      {"Palazzo Fortuny": "Venice, Italy"},
      {"Palazzo Grassi": "Venice, Italy"},
      {"The Uffizi Galleries": "Florence, Italy"},
      {"Vatican Museums": "Rome, Italy"}
    ],
    "Netherlands": [
      {"Anne Frank House": "Amsterdam, Netherlands"},
      {"Museum Het Rembrandthuis": "Amsterdam, Netherlands"},
      {"Rijksmuseum": "Amsterdam, Netherlands"},
      {"Stedeljik Museum": "Amsterdam, Netherlands"},
      {"Van Gogh Museum": "Amsterdam, Netherlands"}
    ],
    "Spain": [
      {"Fundació Joan Miró": "Barcelona, Spain"},
      {"La Sagrada Familia": "Barcelona, Spain"},
      {"Museo Nacional del Prado": "Madrid, Spain"},
      {"Museu Picasso": "Barcelona, Spain"},
      {"Park Güell": "Barcelona, Spain"}
    ],
    "U.K.": [
      {"British Museum": "London, U.K."},
      {"Saatchi Gallery": "London, U.K."},
      {"Tate Modern": "London, U.K."},
      {"Tate": "London, U.K."},
      {"The National Gallery, London": "London, U.K."}
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      museumList: this.favorites,
      selectedPlace: 'favorite',
    };
  }

  isFavorite(museumName) {
    for (var favorite of this.favorites) {
      var curr = Object.keys(favorite)[0]
      if (curr == museumName) {
        return true;
      }
    }
    return false;
  }

  displayMuseums() {
    return this.state.museumList.map(museumInfo => {
      var museum_name = Object.keys(museumInfo);
        return (
          <div>
            <p className="Museum-name">{this.isFavorite(museum_name) && <FaRegStar size="15" />} {museum_name}</p>
            <p className="Museum-city">{museumInfo[museum_name]}</p>
          </div>
        )
    });
  }

  countrySelection = (country) => {
    var newMuseumList = []
    if (country === "favorite") {
      newMuseumList = this.favorites;
    } else if (country === "all") {
      // Merge all of the countries together
      var currList = [];
      Object.keys(this.museums).map((place) => {
        currList = currList.concat(this.museums[place]);
      });
      newMuseumList = currList;
    } else {
      newMuseumList = this.museums[country];
    }
    return this.setState({
      museumList: newMuseumList,
      selectedPlace: country,
    });
  }

  getLocationsHeader() {
    var location_display = Object.keys(this.locations).map((continent) => {
      return (
        <div key={continent}>
          <b>{continent}<br /></b>
          {
            this.locations[continent].map(country =>
              <Button variant="link" key={country} onClick={() => this.countrySelection(country)}>
                {country}
              </Button>
            )
          }
        <br /></div>
      );
    });

    return (
      <div>
        <b><a href="#" onClick={() => this.countrySelection("favorite")}>Favorites</a></b><br /><br />
        <b><a href="#" onClick={() => this.countrySelection("all")}>All</a></b>
        <br /><br />
        {location_display}
      </div>
    );
  }

  render() {
    return (
      <div className="MuseumPage">
            <h3> Museums I've visited </h3><br />
            <div>
              {this.getLocationsHeader()}
            </div>
            <hr></hr>

            <div className="Museums">
              {this.displayMuseums()}
            </div>
      </div>
    );
  }
}

export default Museums;
