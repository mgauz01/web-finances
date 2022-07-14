import React from 'react'
import { shallow } from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test('should render ExpenseDashboardPage with all attributes', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseDashboardPage', () => {
   const wrapper = shallow(<ExpenseDashboardPage />)
   expect(wrapper).toMatchSnapshot() 
})
