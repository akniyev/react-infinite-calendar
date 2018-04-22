import React from 'react';
import {render} from 'react-dom';
import InfiniteCalendar from '../../src';
import '../../styles.css';
import './demo.css';

render(
    <div>
        <InfiniteCalendar
          events={[
              { date: new Date(2018, 3, 26), count: 3},
              { date: new Date(2018, 3, 24), count: 4},
          ]}
          width={Math.min(window.innerWidth, 600)}
        />
    </div>
, document.querySelector('#demo'));
