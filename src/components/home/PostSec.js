import React, { Component } from 'react';
import StorySlider from './StorySlider';
import { Stories } from '../../helpers/Stories';
import SinglePost from './SinglePost';

class PostSec extends Component {
  state = {
    allPosts: null,
  };

  componentDidMount() {
    this.setState({ allPosts: Stories });
  }

  actionLikeSave = (post, type, action) => {
    // console.log(post);
    // console.log(type);
    // console.log(action);

    if (type === 'save') {
      const newAllPosts = this.state.allPosts.map((p) => {
        if (p.id === post.id) {
          p.user_has_saved = action;
        }
        return p;
      });
      this.setState({ allPosts: newAllPosts });
    } else if (type === 'like') {
      const newAllPosts = this.state.allPosts.map((p) => {
        if (p.id === post.id) {
          p.user_has_liked = action;
        }
        return p;
      });
      this.setState({ allPosts: newAllPosts });
    }
  };

  actionDblClick = (post, type, action) => {
    this.actionLikeSave(post, type, action);
    const mainSvg = document.querySelector('.effect-svg');
    mainSvg.classList.add('active');
    setTimeout(() => {
      mainSvg.classList.remove('active');
    }, 2000);
  };

  postComment = (post, postData, callback) => {
    const newAllPosts = this.state.allPosts.map((p) => {
      if (p.id === post.id) {
        p.comments.push(postData);
      }
      return p;
    });
    this.setState({ allPosts: newAllPosts });
    callback();
  };

  render() {
    const { allPosts } = this.state;

    return (
      <>
        <div className='stories'>
          <StorySlider />
        </div>
        <div className='posts'>
          {allPosts &&
            allPosts.map((post, i) => (
              <SinglePost
                story={i % 2 ? false : true}
                key={i}
                post={post}
                actionLikeSave={this.actionLikeSave}
                actionDblClick={this.actionDblClick}
                postComment={this.postComment}
              />
            ))}
        </div>
      </>
    );
  }
}

export default PostSec;
