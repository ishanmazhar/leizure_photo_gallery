import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Formik } from 'formik'; 
import axios from 'axios';
import { connect } from 'react-redux'; 
import { addComment } from '../redux/actionCreators';
import { Link } from 'react-router-dom'; 
import Comments from './Comments';
import Auth from './Auth'; 

const mapStateToProps = state => {
    return {
        token: state.token, 
    }
}

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
        let commentCard = null;
        if (this.props.token === null) {
            commentCard = (
                <Card body className="display-card" style={{marginBottom: "20px"}}>
                    <CardTitle tag="h4" style={{paddingLeft:"5px"}}>Please Login to add a comment</CardTitle>
                </Card>
            )
        } else {
            commentCard = (
                <Card body className="display-card">
                    <CardTitle tag="h5">Add a comment</CardTitle>
                    <form>
                        <input 
                            type="text"
                            name="author" 
                            id="author"
                            value={this.state.comments.author}
                            placeholder="Your Name Here"
                            className="form-control"
                            onChange={(e) => this.inputChangeHandler(e)}
                            required />
                        <br />
                        <textarea
                            name="comment" 
                            id="comment"
                            value={this.state.comments.comment}
                            placeholder="Your Comment Here"
                            className="form-control"
                            onChange={(e) => this.inputChangeHandler(e)}
                            required />
                        <br />
                        <Button className="btn btn-success" onClick={this.submitHandler}>Post Comment</Button>
                    </form>
                </Card>
            )
        }


        return (
            <div>
                <Card body className="display-card">
                    <CardTitle tag="h4" style={{paddingLeft:"5px"}}>Comments</CardTitle>
                    <Comments dbPath={this.props.dbPath}/>
                </Card>
                <br />
                {commentCard} 
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm); 