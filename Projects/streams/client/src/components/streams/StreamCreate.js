import React from 'react';
import {Field,reduxForm} from 'redux-form';


class StreamCreate extends React.Component{

renderInput(formProps)
{ 
    // console.log(formProps);
    const {input} = formProps;
  return (
      <div>
      <input {...input}/>
      </div>
  );
}


    render(){
        console.log(this.props);
        return (
            <form>
                <Field name="title" component={this.renderInput}/>
                <Field name="description" component={this.renderInput}/>
            </form>
        );
    }
};



export default reduxForm({
    form:'streamCreate'
}) (StreamCreate);