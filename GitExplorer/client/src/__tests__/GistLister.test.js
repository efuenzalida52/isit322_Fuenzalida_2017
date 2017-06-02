import React from 'react';
import ReactDOM from 'react-dom';
import GistLister from '../components/GistLister';
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../Debug/ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(false, 'GistLister.test.js');

describe('GistLister Suite', function() {
    let bodyData = [{
        avatarUrl: '/',
        createdAt: 'Created At',
        description: 'Description',
        gitPullUrl: 'Git Pull URL',
        htmlUrl: 'HTML URL',
        id: 'ID',
        ownerLogin: 'Owner Login',
        updatedAt: 'Updated At',
        url: 'URL'
    }];
    let iterationBool = false;

    it('renders the GistLister component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GistLister />, div);
    });
    it('renders and reads GistLister H2 text', () => {
        const wrapper = shallow(<GistLister />);
        elfDebugEnzyme.getAll(wrapper);
        const welcome = <h2>Gist Lister</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders GistLister UL Element', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        elfDebugEnzyme.getElement(wrapper, 'ul');
        expect(wrapper.find('ul').length).toEqual(1);
    });

    it('renders button click message for getting gist list', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        wrapper.find('Button#gistLister').simulate('click');
    });

    it('renders button click message for previous button', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        wrapper.find('Button#prevGist').simulate('click');
    });

    it('renders button click message for next button', () => {
        const wrapper = shallow(<GistLister
            gitGistCanIterate={iterationBool}
            gitGistList={bodyData}
            onChange={() => {
            }}
        />);
        wrapper.find('Button#nextGist').dive('button').simulate('click');
    });
});
