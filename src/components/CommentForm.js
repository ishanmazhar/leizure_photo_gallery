import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Formik } from 'formik'; 
import axios from 'axios';
import { connect } from 'react-redux'; 
import { addComment } from '../redux/actionCreators';

import Comments from './Comments';

const mapDispatchToProps = dispatch => {
    return {
        addComment: (author, comment, dbPath) => dispatch(addComment(author, comment, dbPath)), 
    }
}

class CommentForm extends Component {

    state = {
        comments:{
            comment: "",
            author: "",
        },
    }

    inputChangeHandler = (e) => {
        this.setState({
            comments: {
                ...this.state.comments,
                [e.target.name] : e.target.value,
            }
        })
    }

    submitHandler = () => {

        this.props.addComment(this.state.comments.author, this.state.comments.comment, this.props.dbPath); 

        // const comments = {
        //     comments: this.state.comments, 
        //     commentTime: new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date()),
        // }
        // axios.post('https://leizure-gallery-default-rtdb.firebaseio.com/comments.json', comments)
        //     .then(response => this.props.commentConcat(response.data))
        //     .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <Card body className="display-card">
                    <CardTitle tag="h4" style={{paddingLeft:"10px"}}>Comments</CardTitle>
                    <Comments dbPath={this.props.dbPath}/>
                </Card>
                <br />
                <Card body className="display-card">
                    <CardTitle tag="h5">Add a comment</CardTitle>
                    <form>
                        <input 
                            type="text"
                            name="author" 
                            id="author"
                            value={this.state.comments.author}
                            placeholder="Youre Name Here"
                            className="form-control"
                            onChange={(e) => this.inputChangeHandler(e)}
                            required />
                        <br />
                        <textarea
                            name="comment" 
                            id="comment"
                            value={this.state.comments.comment}
                            placeholder="Youre Comment Here"
                            className="form-control"
                            onChange={(e) => this.inputChangeHandler(e)}
                            required />
                        <br />
                        <Button className="btn btn-success" onClick={this.submitHandler}>Post Comment</Button>
                    </form>
                </Card>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(CommentForm); 