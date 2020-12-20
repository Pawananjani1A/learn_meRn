import React from 'react';
import {Field,reduxForm} from 'redux-form';


class StreamCreate extends React.Component{

renderInput(formProps)
{ 
    // console.log(formProps);
    const {input,label} = formProps;
  return (
      <div className="ui container">
      <label>{label}</label>
      <input {...input}/>
      </div>
  );
}


    render(){
        console.log(this.props);
        return (
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Title"/>
                <Field name="description" component={this.renderInput} label="Description"/>
            </form>
        );
    }
};



export default reduxForm({
    form:'streamCreate'
}) (StreamCreate);