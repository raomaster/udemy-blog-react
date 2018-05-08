import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from './../../modules/actions';


class MostrarPost extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const id  = this.props.match.params.id;
        console.log(this.props.match.params.id);
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {

        if (this.props.post == null) {
            return (
                <div>
                    Cargando...
                </div>
            );
        }
        console.log(this.props.post);
        return (
            <div>
                <div className="pull-right">
                <button
                    className="btn btn-danger float-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Eliminar post
                </button>
                </div>
                <h3>{this.props.post.title}</h3>
                <h6>Categorias: {this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
            </div>
        );
    }
}
//this.props ==== ownProps
// function mapStateToProps(state , ownProps) {
//     console.log(state);
//     //return { post: state.posts.todos[ownProps.match.params.id] != null ? state.posts.todos[ownProps.match.params.id] : null};
// }


const mapStateToProps = state => ({
    post: state.posts.post
});


export default connect(mapStateToProps, { fetchPost, deletePost })(MostrarPost);