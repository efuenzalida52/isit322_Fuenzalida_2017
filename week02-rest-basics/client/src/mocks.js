/*
/!**
 * Created by bcuser on 4/13/17.
 *!/
class mocks {
    fetch() {
        this.setState({foo: "bar"});
        return {
            then: function() {
                return {
                    then: function() {
                        return {
                            catch: function() {

                            }
                        }

                    }
                }

            }
        }
    }
}

module.export.fetch = fetch;*/
