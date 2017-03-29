import Component, {tracked} from "@glimmer/component";

export default class GithubApp extends Component {
    @tracked username: ''

    updateUsername(event) {
        this.username = event.target.value;
    }
}
