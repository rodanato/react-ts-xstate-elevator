import React from 'react';

export default function ExternalView() {
  return(
    <section className="elevator__external-view">
      <div className='elevator__box'></div>

      <div className="floor">
        1
        <div className="floor__buttons">
          <button>up</button>
          <button>down</button>
        </div>
      </div>
      <div className="floor">
        2
        <div className="floor__buttons">
          <button>up</button>
          <button>down</button>
        </div>
      </div>
    </section>
  );
}