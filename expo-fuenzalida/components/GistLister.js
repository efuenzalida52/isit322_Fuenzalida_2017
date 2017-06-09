import React, {Component} from 'react';
import '../css/App.css';
import ElfLogger from '../Debug/elf-logger';
const logger = new ElfLogger('gist-lister');
import { Button } from 'react-bootstrap';

class GistLister extends Component {
    constructor(props) {
        super(props);
        this.state = {listIndex: 0};
        logger.log('GistLister Constructor');
    }

    generateDisplay = () => {

        console.log('Generate');

        if (this.props.gistList) {
            console.log(this.props.gistList);
            return (
                <div>
                    <ul>
                        <li>Index: {this.state.listIndex} / {this.props.gistList.length - 1}</li>
                        <li>{this.props.gistList[this.state.listIndex].createdAt}</li>
                        <li>{this.props.gistList[this.state.listIndex].description}</li>
                        <li>{this.props.gistList[this.state.listIndex].gitPullUrl}</li>
                        <li>{this.props.gistList[this.state.listIndex].htmlUrl}</li>
                        <li>{this.props.gistList[this.state.listIndex].id}</li>
                        <li>{this.props.gistList[this.state.listIndex].ownerLogin}</li>
                        <li>{this.props.gistList[this.state.listIndex].updatedAt}</li>
                        <li>{this.props.gistList[this.state.listIndex].url}</li>
                    </ul>
                    <img src={this.props.gistList[this.state.listIndex].avatarUrl} alt='Avatar'/>
                </div>
            );
        } else {
            return <h2>No Data</h2>
        }

    };

    gistIterator = (event) => {
        logger.log(event.target.id);
        if (event.target.id === 'nextGist') {
            logger.log('nextGist Called');
            this.setState((prevState, props) => {
                if (prevState.listIndex < props.gistList.length - 1) {
                    return {listIndex: prevState.listIndex + 1};
                }
            });
        } else {
            logger.log('prevGist Called');
            this.setState((prevState, props) => {
                if (prevState.listIndex > 0) {
                    return {listIndex: prevState.listIndex - 1};
                }
            });
        }
    };

    render() {
        return (
            <div>
                <h2>Gist Lister</h2>
                <Button
                    bsStyle='primary'
                    id='gistLister'
                    onClick={this.props.onChange}
                    disabled={this.props.gistIterate}>Get Gists
                </Button>
                <Button
                    bsStyle='primary'
                    id='prevGist'
                    onClick={this.gistIterator}
                    disabled={!this.props.gistIterate}>Previous Gist
                </Button>
                <Button
                    bsStyle='primary'
                    id='nextGist'
                    onClick={this.gistIterator}
                    disabled={!this.props.gistIterate}>Next Gist
                </Button>
                <div>{this.generateDisplay()}</div>
            </div>
        );
    }

}

export default GistLister;
