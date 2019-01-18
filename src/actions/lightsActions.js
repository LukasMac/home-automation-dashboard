import philipsHueWebAPI from '../lib/web-apis/philipsHueWebAPI';
export const types = {
  LIGHTS_ON: 'LIGHTS_ON',
  LIGHTS_OFF: 'LIGHTS_OFF',
}

export const lightsOn = () => {
  for(let i = 0; i < 10; i++){
    philipsHueWebAPI.lightOn(i);
  }
  return {
    type: types.LIGHTS_ON,
  }
}

export const lightsOff = () => {
  for(let i = 0; i < 10; i++){
    philipsHueWebAPI.lightOff(i);
  }
  return {
    type: types.LIGHTS_OFF,
  }
}
