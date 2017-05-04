import React, {Component} from 'react';
import '../css/App.css';
//import 'whatwg-fetch';
import ElfLogger from './elf-logger';
import ElfElements from './ElfElements';
const logger = new ElfLogger(false);

class ShowUserInfo extends Component {
    constructor(props) {
        super(props);
        //this.shouldUpdate = true;
        logger.log('ShowUserInfo constructor called.');
        logger.log('ShowUserInfo props.' + JSON.stringify(this.props.userData, null, 4));
    }

    getForm = (field, index) => {
        return (
            <div className="ElfFormRow" key={field.id}>
                <label className="ElfFormLabel" htmlFor={field.id}>{field.label}:</label>
                <ElfElements {...field}
                             value={this.props.gitUser[field.id]}
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
                <button id="getUser" onClick={this.props.onChange}>Get User</button>
            </form>
        )
    }
}

export default ShowUserInfo;