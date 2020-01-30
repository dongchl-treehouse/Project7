import React from 'react';

const Nav = () =>
     {
        return (
          <nav className="main-nav">
              <ul>
                  <li><a href='/cat'>Cats</a></li>
                  <li><a href='/dog'>Dogs</a></li>
                  <li><a href='/computer'>Computers</a></li>
              </ul>
          </nav> 
        );
      }
      

export default Nav;