import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Formik } from 'formik'; 
import axios from 'axios';

class CommentForm extends Component {

    state = {
        comments: [
            {
                id: 0,
                comment: "Beautiful!",
                author: "Mazhar",
                date: "May 20, 2021"
            },
            // {
            //     id: 1,
            //     comment: "hello",
            //     author: "nimmi",
            // },
            // {
            //     id: 2,
            //     comment: "hello",
            //     author: "kussi",
            // },
        ]
    }

    inputChangeHandler = (e) => {

    }

    submitHandler = () => {
        const comments = [...this.state.comments]; 
        const commentsObj = {};
        let counter = 0;
        for (let i = 0; i < comments.length; i++) {
            counter += 1;
        }
        commentsObj["id"] = counter; 
        commentsObj["comment"] = document.getElementById('comment').value;
        commentsObj["author"] = document.getElementById('author').value;
        commentsObj["date"] = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date());
        comments.push(commentsObj);
        console.log('COMMENTS:', comments);
        this.setState({
            comments: comments
        });
        console.log('COMMENTS STATE:', this.state.comments);
        axios.post('https://leizure-gallery-default-rtdb.firebaseio.com/comments.json', this.state.comments)
            .then(response => console.log(response))
            .catch(error => console.log(error))
        console.log(commentsObj); 
    }

    render() {
        const comments = this.state.comments.map((comment) => {
            return (
                <div key={comment.id}>
                <Card body className="display-card">
                    <CardTitle tag="h6">{comment.author + " on " + comment.date}</CardTitle>
                    <CardText>{comment.comment}</CardText>
                </Card>
                </div>
            )
        });
        return (
            <div>
                <Card body className="display-card">
                    <CardTitle tag="h4" style={{paddingLeft:"5px"}}>Comments</CardTitle>
                    {comments}
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
                            onChange={(e) => this.inputChangeHandler(e)} />
                        <br />
                        <textarea
                            name="comment" 
                            id="comment"
                            value={this.state.comments.comment}
                            placeholder="Youre Comment Here"
                            className="form-control"
                            onChange={(e) => this.inputChangeHandler(e)} />
                        <br />
                        <Button className="btn btn-success" onClick={this.submitHandler}>Post Comment</Button>
                    </form>
                </Card>
            </div>
        )
    }
}

const Comments = (props) => {
    return (
        <div>
            <CommentForm />
        </div>
    )

}

export default Comments; 