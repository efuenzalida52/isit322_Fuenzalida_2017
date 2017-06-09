import React from 'react';
import ReactDOM from 'react-dom';
import GistLister from '../components/GistLister';
import GetFoo from '../components/GetFoo';
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'GistLister.test.js');

describe('GistLister Suite', function() {

    it('renders the GistLister component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GistLister />, div);
    });

});

it('renders and reads GistLister H2 text', () => {
    const wrapper = shallow(<GistLister />);
    elfDebugEnzyme.getAll(wrapper);
    const welcome = <h2>Gist Lister</h2>;
    expect(wrapper.contains(welcome)).toEqual(true);
});

it('renders GistLister UL Element', () => {
    const wrapper = shallow(<GistLister />);
    elfDebugEnzyme.getElement(wrapper, 'ul');
    expect(wrapper.find('ul').length).toEqual(1);
});

it('renders button click message', () => {
    const wrapper = shallow(<GetFoo />);
    const nineSign = <p>state.foo bar</p>;
    wrapper.find('Button#getFoo').simulate('click');
    expect(wrapper.contains(nineSign)).toEqual(true);
});

