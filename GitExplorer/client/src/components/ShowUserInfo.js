import React, {Component} from 'react';
import '../css/App.css';
import ElfLogger from '../Debug/elf-logger';
import ElfElements from './ElfElements';
import { Button } from 'react-bootstrap';
const logger = new ElfLogger(false);


class ShowUserInfo extends Component {
    constructor(props) {
        super(props);
        logger.log('ShowUserInfo constructor called.');
        logger.log('ShowUserInfo props.' + JSON.stringify(this.props.userData, null, 4));
    }

    getForm = (field, index) => {
        return (
            <div className="ElfFormRow" key={field.id}>
                <label className="ElfFormLabel" htmlFor={field.id}>{field.label}:</label>
                <ElfElements {...field}
                             value={this.props.gitUser[field.id] || field.sample || ''}
                             onChange={this.props.onChange}
                />
            </div>
        )
    };

    render() {
        return (
            <form className="Form">{
                this.props.fields.map((field, index) => {
                    return this.getForm(field, index)
                })
            }
                <Button bsStyle='primary' id="getUser" onClick={this.props.onChange}>Get User</Button>
            </form>
        )
    }
}

export default ShowUserInfo;
