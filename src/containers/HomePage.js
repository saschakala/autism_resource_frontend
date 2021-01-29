import React, { Component } from 'react';

import JumboTron from '../components/JumboTron'
import SourceThumbnails from '../components/SourceThumbnails'
import TestComponent from '../components/TestComponent'
import TestTabs from './TestTabs';




class HomePage extends Component {
    render() {
        return (
          <div>
            {/* <JumboTron />
            <SourceThumbnails /> */}
            <TestTabs/>
          </div>
        );
      }
    }
 

export default HomePage

