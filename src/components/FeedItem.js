import '../css/FeedItem.css';

function FeedItem(props) {
  return (
    <div className='FeedItem'>
      <div className='FeedItem-left'>
        <span className='FeedItem-votes_count'>{props.feedItem.votes_count}<br /> <small>votes</small></span>
      </div>
      <div className='FeedItem-right'>
        <h4 className='FeedItem-name'>{props.feedItem.name}</h4>
        <a className='FeedItem-url' href={props.feedItem.url} target="_blank" rel="noopener noreferrer">{props.feedItem.url}</a>
        {
          props.feedItem.user_voted === 1 &&
          <span className='FeedItem-checkmark'>&#10003;</span>
        }
        <div className='FeedItem-options-vote'>
          <button onClick={(e) => { props.handleDownVote(e, props.feedItem.id) }} className={props.feedItem.user_voted < 1 ? 'button-borderless element-hidden' : 'button-borderless'}>&darr; downvote</button>
          <button onClick={(e) => { props.handleUpVote(e, props.feedItem.id) }} className={props.feedItem.user_voted === 1 ? 'button-borderless element-hidden' : 'button-borderless'}>&uarr; upvote</button>
        </div>
        <div className='FeedItem-extras'>
          <span className='FeedItem-id'>{props.feedItem.id}</span>
          <span className='FeedItem-date_created'>date_created: {new Date(props.feedItem.date_created).toString()}</span>
          <span className='FeedItem-date_last_voted'>date_last_voted: {new Date(props.feedItem.date_last_voted).toString()}</span>
          <span className='FeedItem-user_voted'>user_voted: {props.feedItem.user_voted}</span>          
        </div>
        <div className='FeedItem-options-delete'>
          <button onClick={(e) => { props.handleDeleteRequest(e, props.feedItem.id) }} className={'button-borderless'}>delete</button>
        </div>
      </div>
    </div>
  );
}

export default FeedItem;
