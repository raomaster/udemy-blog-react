import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../modules/actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts, posts => {
      return (
        <Link to={`/posts/${posts.id}`} key={posts.id} >
        <li className="list-group-item">
          {posts.title}
        </li>
        </Link>
      );
    });
  }

  render() {
    console.log(this.props.posts);

    if (this.props.posts == null) {
      return <p>Conectando...</p>;
    }

    return (
      <div>
          <div className="text-xs-right pull-right">
            <Link to="/posts/new" className="btn btn-primary">
                Agregar un post
            </Link>
          </div>
          <h3>Posts</h3>
        <ul className="list-group">
            {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.todos
});

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
