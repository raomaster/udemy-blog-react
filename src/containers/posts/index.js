import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../modules/actions';
import _ from 'lodash';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts, posts => {
      return (
        <li key={posts.id} className="list-group-item">
          {posts.title}
        </li>
      );
    });
  }

  render() {
    console.log(this.props.posts);

    if (this.props.posts == null) {
      return <p>Vacio</p>;
    }

    return (
      <div>
        <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.todos
});

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
