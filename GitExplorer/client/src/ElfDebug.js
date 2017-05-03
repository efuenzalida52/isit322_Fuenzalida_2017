export default class ElfDebug {
    constructor(showInit = false) {
        this.showData = showInit;
    }

    getFirst(wrapper, element) {
        if (this.showData) {
            const paragraphData = wrapper.fond(element).first()
            console.log(paragraphData);
        }

        getLast(wrapper, element)
        {
            if (this.showData) {
                const paragraphData = wrapper.fond(element).Last()
                console.log(paragraphData);
            }
        }
    }
}

