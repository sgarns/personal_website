import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
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
        </div>
      </div>
    );
  }
}

export default App;
