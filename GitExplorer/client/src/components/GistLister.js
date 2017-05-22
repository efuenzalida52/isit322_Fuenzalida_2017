import React, {Component} from 'react';
import '../css/App.css';
import ElfLogger from '../Debug/elf-logger';
const logger = new ElfLogger('gist-lister');

class GistLister extends Component {
    constructor(props) {
        super(props);
        logger.log('GistLister Constructor');
    }

    generateDisplay = () => {

        console.log('Generate');

        if (this.props.gistLister) {
            console.log(this.props.gistLister);
            return this.props.gistLister.map((element, index) => {
                return (
                    <ul>
                        <li>created_at: {element.created_at}</li>
                        <li>description: {element.description}</li>
                        <li>git_pull_url: {element.git_pull_url}</li>
                        <li>html_url: {element.html_url}</li>
                        <li>id: {element.id}</li>
                        <li>updated_at: {element.url}</li>
                        <li>url: 'URL'</li>
                    </ul>
                )
            });
        } else {
            return <h2>No Data</h2>
        }

    };

    render() {
        return (
            <div>
                <h2>Gist Lister</h2>
                <div>{this.generateDisplay()}</div>
                <button className='' onClick={this.props.onChange}>Get List</button>
            </div>
        );
    }
}

export default GistLister;
