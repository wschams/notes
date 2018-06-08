import React, {
    Component
} from 'react';

export default class Student extends Component {
    constructor(props) {
        super(props);
        /* this.state = {
            name: "Bob",
            marks: [95, 98]
        }; */
    }
    const grades = {
        name: "Bob",
        marks: [95, 98]
    };

    function NumberList(props) {
        const s = props.grades;
        const listItems = grades.map((number) =>
            <
            li > {
                number
            } < /li>
        );
        return ( <
            ul > {
                listItems
            } < /ul>
        );
    }

    render() {
        return ( <
            div >
            <
            h1 > Im a component.Hello {
                this.props.name
            } < /h1> <
            h2 > The temperature in here is approximately {
                this.state.temperature
            } < /h2> < /
            div >
        );
    }
}