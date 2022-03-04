function FeedItem(props) {
  return (
    <div>
      <span>{props.feedItem.name}</span>
      _______<span>{props.feedItem.id}</span>
      <br /><span>{props.feedItem.url}</span>
      <br /><span>{props.feedItem.date_created}</span>
      <br /><span><small>{new Date(props.feedItem.date_created).toString()}</small></span>
      <br /><span>{typeof props.feedItem.date_last_voted}</span>
      _______<span>{props.feedItem.votes_count}</span>
      _______<span>{props.feedItem.user_voted}</span>
      <br />
      <button onClick={(e) => { props.handleDownVote(e, props.feedItem.id) }}>downvote</button>
      <button onClick={(e) => { props.handleUpVote(e, props.feedItem.id) }}>upvote</button>
      <button onClick={(e) => { props.handleDeleteRequest(e, props.feedItem.id) }}>delete</button>
    </div>
  );
}

export default FeedItem;
