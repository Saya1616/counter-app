import { shallow } from "enzyme"
import CounterApp from "../CounterApp"
import React from 'react';

describe('pruebas en CounterApp.test.js', () => {


    test('debe mostrar <CounterApp /> correctamente', () => {
        const wrapper = shallow(<CounterApp value = {0}/>)
        expect(wrapper).toMatchSnapshot();
    
    })

    test('debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>)

        const counterText = wrapper.find("h2").text().trim();

        expect(counterText).toBe('100')

    })

    test('debe incrementar el contador', () => {

       const wrapper = shallow(<CounterApp value = {0}/>)

       wrapper.find('button').at(0).simulate('click');

       const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('1')
    })

    test('debe decrementar el contador', () => {

    const wrapper = shallow(<CounterApp value = {0}/>)

    wrapper.find('button').at(1).simulate('click');

    const counterText = wrapper.find('h2').text().trim();

     expect(counterText).toBe('-1')
    })
    
    test('debe resetear el contador', () => {

    const value = 0

    const wrapper = shallow(<CounterApp value = {value}/>)

    wrapper.find('button').at(2).simulate('click');

    const counterText = wrapper.find('h2').text().trim();

     expect(counterText).toBe(value.toString())
    })
})
