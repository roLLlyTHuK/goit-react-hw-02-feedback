import { List, ListItem, Button } from './FeedbackSelector.styled';
const { Component } = require('react');

export class FeedbackSelector extends Component {
  render() {
    const { choices, onLeaveFeedback } = this.props;
    let content = [];
    for (let i = 0; i < Math.min(choices.length, onLeaveFeedback.length); i++) {
      content.push(
        <ListItem key={i}>
          <Button onClick={onLeaveFeedback[i]}>{choices[i]}</Button>
        </ListItem>
      );
    }

    return <List>{content}</List>;
  }
}