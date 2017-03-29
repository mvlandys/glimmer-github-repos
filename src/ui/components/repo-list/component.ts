import Component, {tracked} from '@glimmer/component';

export default class RepoList extends Component {
    @tracked repos = [];
    @tracked error = false;
    @tracked isLoading = false;

    searchRepo() {
        this.isLoading = true;
        this.repos = [];
        this.error = false;
        
        fetch('https://api.github.com/users/' + this.args.username + '/repos')
            .then(response => {
                if (!response.ok)
                    throw Error(response.statusText);
                
                return response;
            })
            .then(response => {
                response.json().then(json => {
                    this.repos = json
                    this.error = false;
                    this.isLoading = false;
                });
            })
            .catch(error => {
                this.repos = [];
                this.error = error;
                this.isLoading = false;
            });
    }
};
