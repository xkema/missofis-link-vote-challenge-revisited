import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import FeedItem from './FeedItem';
import { sortFeed } from "../utils/sortFeed";

function Feed(props) {
  
  const [orderBy, setOrderBy] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [pageLength] = useState(5);
  const [promptStatus, setPromptStatus] = useState(true);
  const [feedItemIdOnPrompt, setFeedItemIdOnPrompt] = useState(null);

  const [feedItems, setFeedItems] = useOutletContext();

  useEffect(() => {
    setNumPages(Math.ceil(feedItems.length / pageLength));
  }, [feedItems.length, pageLength]);

  useEffect(() => {
    if (feedItems.length < 1) {
      setCurrentPage(0);
    } else if(currentPage > numPages) {
      setCurrentPage(numPages);
    } else if(currentPage === 0 && feedItems.length > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, feedItems.length, numPages]);

  const clipFeed = (pageLength, currentPage, feedItemsSorted) => {
    const start = (currentPage - 1) * pageLength;
    const end = start + pageLength;
    return feedItemsSorted.slice(start, end);
  };

  const handleFeedSort = (e) => {
    setOrderBy(e.target.value);
  };

  const handleDownVote = (e, feedItemId) => {
    const feedItemsUpdated = feedItems.map((feedItem) => {
      if (feedItem.id === feedItemId && feedItem.user_voted !== -1) {
        return {
          ...feedItem,
          date_last_voted: Date.now(),
          votes_count: feedItem.votes_count - 1,
          user_voted: -1
        };
      }
      return feedItem;
    });
    setFeedItems(feedItemsUpdated);
  };

  const handleUpVote = (e, feedItemId) => {
    const feedItemsUpdated = feedItems.map((feedItem) => {
      if (feedItem.id === feedItemId && feedItem.user_voted !== 1) {
        return {
          ...feedItem,
          date_last_voted: Date.now(),
          votes_count: feedItem.votes_count + 1,
          user_voted: 1
        };
      }
      return feedItem;
    });
    setFeedItems(feedItemsUpdated);
  };

  const handleDeleteRequest = (e, feedItemId) => {
    setFeedItemIdOnPrompt(feedItemId);
    setPromptStatus(false);
  };

  const handleDelete = () => {
    const feedItemsUpdated = feedItems.filter(feedItem => feedItem.id !== feedItemIdOnPrompt);
    setFeedItems(feedItemsUpdated);
    setPromptStatus(true);
  };
  
  const handleCancel = () => {
    setPromptStatus(true);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div>
        <select value={orderBy} onChange={handleFeedSort}>
          <option value="">order by</option>
          <option value="most">most voted / z &rarr; a</option>
          <option value="less">less voted / a &rarr; z</option>
        </select>
      </div>
      <div hidden={promptStatus}>
        sure?
        <button onClick={handleCancel}>nope</button>
        <button onClick={handleDelete}>yep</button>
      </div>
      <div>
        <ul>
          {
            clipFeed(pageLength, currentPage, sortFeed(orderBy, feedItems)).map((feedItem) => {
              return (
                <li key={feedItem.id}>
                  <FeedItem 
                    feedItem={feedItem}
                    handleDownVote={handleDownVote}
                    handleUpVote={handleUpVote}
                    handleDeleteRequest={handleDeleteRequest} />
                </li>
              )
            })
          }
        </ul>
      </div>
      <div>
        <button onClick={handlePrevPage}>prev</button>
        <span>{currentPage} of {numPages}</span>
        <button onClick={handleNextPage}>next</button>
      </div>
    </div>
  );
}

export default Feed;