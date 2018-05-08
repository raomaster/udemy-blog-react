import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link}  from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from './../../modules/actions';

class PostNew extends Component {
    renderField(field){
        const { meta: { touched, error } } = field;
        const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
        return (
            <div className="form-group has-danger">
            <label>{field.label}</label>
                <input 
                    className={className}
                    type="text" 
                    {...field.input}
                />
                <div className="text-danger">
                    {field.meta.touched ? field.meta.error: ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>
                    Nuevo Post

                </h3>
                <Field
                    label="Título"
                    name="title"
                    component={this.renderField}
                    />
                <Field 
                    label="Categorias"
                    name="categories"
                    component={this.renderField}
                    />
                <Field
                    label="Contenido del Post"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Enviar</button>
                <Link to="/" className="btn btn-danger">Cancelar</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title || values.title.length < 3){
        errors.title = 'Ingrese un titulo de almenos 3 cartacteres';
    }
    if (!values.categories) {
        errors.categories = 'Ingrese un titulo';
    }
    if (!values.content) {
        errors.content = 'Ingrese un titulo';
    }
    // si errors esta vacio, entonces se envia el formulario
    // si errors tiene alguna propiedad asume que existen errores y no lo envia
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
}) (
    connect(null, { createPost })(PostNew)
);