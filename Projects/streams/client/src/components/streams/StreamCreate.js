import React from 'react';
import {Field,reduxForm} from 'redux-form';


class StreamCreate extends React.Component{

renderInput(formProps)
{ 
    // console.log(formProps);
    const {input,label} = formProps;
  return (
      <div>
      <label>{label}</label>
      <input {...input}/>
      </div>
  );
}

onSubmit(formValues)
{
    console.log(formValues);
}


    render(){
        // console.log(this.props);
        return (
            <div className="ui container">
                <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Title" />
                    <Field name="description" component={this.renderInput} label="Description" />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }
};



export default reduxForm({
    form:'streamCreate'
}) (StreamCreate);