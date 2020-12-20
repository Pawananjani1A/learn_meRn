import React from 'react';
import {Field,reduxForm} from 'redux-form';


class StreamCreate extends React.Component{

 renderInput=(formProps)=>{ 
    // console.log(formProps);
    const {input,label,meta} = formProps;
    // console.log(meta);
    const className = `field ${meta.touched && meta.error?'error':''}`
  return (
      <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete="off"/>
      {this.renderError(meta)}
      </div>
  );
}

renderError(meta)
{
    const {error,touched} = meta;
    if(touched && error)
    {
        return (
            <div className="ui error message">
                <div className="header">
                    {error}
                </div>
            </div>
        );
    }
}

onSubmit(formValues)
{
    // console.log(formValues);
}


    render(){
        // console.log(this.props);
        return (
              
             <div className="ui container">
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Title" />
                    <Field name="description" component={this.renderInput} label="Description" />
                    <button className="ui button primary">Submit</button>
                </form>

             </div>
                
        );
    }
};

const validate = (formValues)=>{
  
    const errors = {};
    const {title,description} = formValues;
    if(!title)
    {
        errors.title = 'You must enter a title';
    }

    if(!description)
    {
        errors.description = 'You must enter a description';
    }
    
    return errors;
};

export default reduxForm({
    form:'streamCreate',
    validate:validate
}) (StreamCreate);