import { List, ListItem, Text } from './Statistics.styled';
const { Component } = require('react');

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <List>
        <ListItem>
          <Text>Good: {good}</Text>
        </ListItem>
        <ListItem>
          <Text>Neutral: {neutral}</Text>
        </ListItem>
        <ListItem>
          <Text>Bad: {bad}</Text>
        </ListItem>
        <ListItem>
          <Text>Total: {total}</Text>
        </ListItem>
        <ListItem>
          <Text>Positive feedback: {positivePercentage}%</Text>
        </ListItem>
      </List>
    );
  }
}