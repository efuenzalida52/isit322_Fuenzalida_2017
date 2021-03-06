const ElfLogger = class {

    constructor(initQuiet) {
        this.display = initQuiet;
    }

    log = (message1, message2 = '', message3 = '') => {
        if (this.display) {
            console.log(message1, message2, message3);
        }
    };

    setQuiet = (newValue) => {
        this.display = newValue;
    }
};

export default ElfLogger;