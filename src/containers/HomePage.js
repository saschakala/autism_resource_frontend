import React, { Component } from 'react';

import JumboTron from '../components/JumboTron'
import SourceThumbnails from '../components/SourceThumbnails'
import TestComponent from '../components/TestComponent'




class HomePage extends Component {
    render() {
        return (
          <div>
            <JumboTron />
            <SourceThumbnails />
          </div>
        );
      }
    }
 

export default HomePage

