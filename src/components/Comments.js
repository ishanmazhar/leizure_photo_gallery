import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchComments } from '../redux/actionCreators';
import Spinner from '../Spinner/Spinner';

const mapStateToProps = state => {
    return {
        comments: state.comments,
        commentsLoading: state.commentsLoading,
        commentsErr: state.commentsErr, 
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchComments: (dbPath) => dispatch(fetchComments(dbPath)), 
    }
}

class Comments extends Component {
    componentDidMount() {
        this.props.fetchComments(this.props.dbPath); 
    } 
    render() {
        console.log(this.props.comments);
        const comments = this.props.comments.reverse().map((comment) => {
            return (
                <div key={comment.id}>
                    <Card body className="display-card">
                        <CardTitle tag="h5">{comment.comments.author + " on " + comment.commentTime}</CardTitle>
                        <CardText>{comment.comments.comment}</CardText>
                    </Card>
                </div>
            )
        })
        return (
            <div className="comments-card">
                {this.props.commentsLoading ? <Spinner /> : comments}
                {/* {comments} */}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments); 