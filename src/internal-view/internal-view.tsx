import React from 'react';

export default function InternalView() {
  return(
    <section className="elevator__internal-view">
      <div className="elevator__doors">
        <div className="elevator__door elevator__door--left"></div>
        <div className="elevator__door elevator__door--right"></div>
      </div>

      <div className='elevator__buttons'>
        <button>1</button>
        <button>2</button>
      </div>
    </section>
  );
}