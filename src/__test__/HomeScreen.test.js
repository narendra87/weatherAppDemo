import React from 'react'
import {shallow} from 'enzyme'
import HomeScreen from '../screens/HomeScreen';


describe('reander for home screen',()=>{
  let wrapper: any;
  beforeEach(()=>{
    wrapper = shallow(<HomeScreen/>)
  })

  it('validate reander',()=>{
expect(wrapper).toMatchSnapshot();
  })
})