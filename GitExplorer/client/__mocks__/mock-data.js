const getData = (url) => {
    switch (url) {
        case '/foo':
            return {
                foo: 'bar',
                file: 'notifications.js'
            };

        case '/gitapi/user':
            return {
                error: {},
                response: {},
                body: JSON.stringify({
                    login: 'Robin Dudette'
                })
            };
        case '/gitapi/gists/get-basic-list':
            return {
                result: [
                    {
                        html_url: 'https://gist.github.com/a023c7db77926ff58d35087821e12020',
                        id: 'a023c7db77926ff58d35087821e12020',
                        git_pull_url: 'https://gist.github.com/a023c7db77926ff58d35087821e12020.git',
                        description: 'Simple React Component'
                    },
                    {
                        html_url: 'https://gist.github.com/17f8ec886c1ae22f66501fc3cbe760ac',
                        id: '17f8ec886c1ae22f66501fc3cbe760ac',
                        git_pull_url: 'https://gist.github.com/17f8ec886c1ae22f66501fc3cbe760ac.git',
                        description: 'React Npm Install'
                    }
                ]
            };
        default:
            return {};
    }
};
export default getData;
