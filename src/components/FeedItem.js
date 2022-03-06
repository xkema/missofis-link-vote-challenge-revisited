function FeedItem(props) {
  return (
    <div className='FeedItem'>
      <div>
        <span className='FeedItem-votes_count'>{props.feedItem.votes_count}</span>
      </div>
      <div>
        <h4 className='FeedItem-name'>{props.feedItem.name}</h4>
        <a className='FeedItem-url' href={props.feedItem.url} target="_blank" rel="noopener noreferrer">{props.feedItem.url}</a>
        <div className='FeedItem-options vote'>
          <button onClick={(e) => { props.handleDownVote(e, props.feedItem.id) }}>downvote</button>
          <button onClick={(e) => { props.handleUpVote(e, props.feedItem.id) }}>upvote</button>
        </div>
        <div className='FeedItem-extras'>
          <span className='FeedItem-id'>{props.feedItem.id}</span>
          <span className='FeedItem-date_created'>date_created: {new Date(props.feedItem.date_created).toString()}</span>
          <span className='FeedItem-date_last_voted'>date_last_voted: {new Date(props.feedItem.date_last_voted).toString()}</span>
          <span className='FeedItem-user_voted'>user_voted: {props.feedItem.user_voted}</span>          
        </div>
        <div className='FeedItem-options vote'>
          <button onClick={(e) => { props.handleDeleteRequest(e, props.feedItem.id) }}>delete</button>
        </div>
      </div>
    </div>
  );
}

export default FeedItem;
