// styles
import './calendar.scss';

// global imports
import React from 'react';

// components
import Button from './elements/Button';
// import Kalendar from './Kalendar';

const Calendar = () => (
  // const [activeTab, setActiveTab] = useState<'calendar' | 'list'>('calendar');

  <div className="calendar">
    <div className="calendar__header">
      <h3 className="calendar__title">Reservations</h3>
      <div className="calendar__button">
        <Button title=" + Add" handleClick={() => true} />
      </div>
      <div className="calendar__tabs">
        {/* <h4
            className={`calendar__tab-title ${
              activeTab === 'calendar' ? 'is-Active' : ''
            }`}
            onClick={() => setActiveTab('calendar')}
          >
            Calendar
          </h4>
          <h4
            className={`calendar__tab-title ${
              activeTab === 'list' ? 'is-Active' : ''
            }`}
            onClick={() => setActiveTab('list')}
          >
            List
          </h4> */}
      </div>
    </div>

    <div className="calendar__body">
      {/* {activeTab === 'calendar' ? <Kalendar /> : null}
        {activeTab === 'list' ? <div>list</div> : null} */}
    </div>
  </div>
);

export default Calendar;
