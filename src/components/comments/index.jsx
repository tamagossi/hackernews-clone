import React, { useCallback, useEffect, useState } from 'react'
import './styles.scss';

import DisabledNavLink from '../disabled-link';
import hackerNewsService from '../../services/hacker-news';
import mapTime from '../../utils/timeMap';
import PropTypes from 'prop-types';
import Spinner from '../spinner';

const Comments = ({ kids }) => {
  const [comments, setComments] = useState(null)

  const fetchItem = useCallback(() => {
    hackerNewsService.getStories(kids)
      .then(res => {
        res.forEach(item => {
          item.toogled = true;
        });
        setComments(res)
      })
      .catch(err => console.log(err))
  }, [kids])

  useEffect(() => {
    fetchItem();
  }, [fetchItem])

  const createMarkUp = (content) => {
    return {__html: content}
  }

  const toogleComment = (index) => {
    const array = [...comments];
    array[index].toogled = !array[index].toogled;
    setComments([...array]);
  }

  return (
    <>
      {
        comments ?
        (
          comments.map((comment, index) => {
            return (
              <div
                className="comment-wrapper flex flex-wrap w-100 mt3"
                key={ comment.id }
              >
                <div className="comment-author w-100">
                  <i className="fa fa-caret-up tooltip ml1 gray pointer">
                    <span className="tooltiptext">Vote functionality is disabled at the moment</span>
                  </i>
                  <span className="comment-info ml3 f6 fw4">
                    <DisabledNavLink otherClass="has-space has-underline gray">
                      { comment.by }
                    </DisabledNavLink>
                    <DisabledNavLink otherClass="has-space has-underline gray">
                      { mapTime(comment.time) } ago
                    </DisabledNavLink>
                    <span
                      className="collapse-button has-space gray pointer"
                      onClick={() => toogleComment(index)}
                    >
                      [{
                        comment.toogled ? ' - ' :
                          comment.kids ?
                            ` +${comment.kids.length} ` :
                            ` 0 `
                      }]
                    </span>
                  </span>
                </div>
                {
                  comment.toogled ? (
                    <>
                      <div className="comment-content flex flex-wrap w-100 f5 fw4 pl4 pv2">
                        <p dangerouslySetInnerHTML={createMarkUp(comment.text)}></p>
                        <div className="reply-button tooltip w-100">
                          <u className="f7 pointer">reply</u>
                          <span className="tooltiptext">reply functionality is disabled at the moment</span>
                        </div>
                      </div>
                      {
                        comment.kids ?
                        (
                          <div className="other-comment-wrapper flex flex-wrap w-100 pl5">
                            <Comments kids={ comment.kids }/>
                          </div>
                        ) :
                        null
                      }
                    </>
                  ) : null
                }
              </div>
            )
          })
        ) :
        <Spinner />
      }
    </>
  )
}

Comments.propTypes = {
  kids: PropTypes.array.isRequired,
}

export default Comments
