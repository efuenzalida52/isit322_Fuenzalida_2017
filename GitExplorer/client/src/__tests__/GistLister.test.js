import React from 'react';
import ReactDOM from 'react-dom';
import GistLister from '../components/GistLister';
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
    //var a = wrapper.find('ul');
    //console.log(a.length);
    expect(wrapper.find('ul').length).toEqual(1);
});
