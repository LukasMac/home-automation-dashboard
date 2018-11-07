import React from 'react';

const LightItem = (props) => (
  <div className='items'>
    <div className='item toggle'>
        <input
          name={props.name}
          type="checkbox"
          checked={props.isOn}
          onChange={() => props.onToggleLight(props.id,props.isOn)}
          disabled={!props.reachable}
          />

        {props.reachable ? '' : <div className='warning'>not reachable</div>}
      </div>
      {props.reachable ? 
      <div className='item slider'>
        <input
          type="text"
          name="name"
          value={props.bri}
          onChange={(event,newValue) => props.onBrightnessChanged(props.id,newValue)}/>
      </div> : '' }
  </div>
);

export default LightItem;
