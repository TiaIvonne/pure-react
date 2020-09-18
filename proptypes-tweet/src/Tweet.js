import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'


function Tweet({ tweet }) {
    return (
        <div className='tweet'>
            {/*avatar ahora va a recibir lo que exista en la prop tweet */}
            <Avatar hash={tweet.gravatar} />
            <div className='content'>
                <Author author={tweet.author} />
                <Time time={tweet.timestamp} />
                <Message message={tweet.message} />
                <div className='buttons'>
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}


Tweet.propTypes = {
    tweet: PropTypes.shape({
        hash: PropTypes.string,
        author: PropTypes.object,
        time: PropTypes.number,
        message: PropTypes.string,
        count: PropTypes.number
    })
}




//avatar ahora es estatico, pero lo convertiremos a un componente que accepta props.
function Avatar({ hash }) {
    const url = `${hash}`
    return (
        <img
            src={url}
            className='avatar'
            alt='avatar' />
    );
}

Avatar.propTypes = {
    hash: PropTypes.string
}

function Message({ message }) {
    return (
        <div className='message'>
            {message}
        </div>
    )
}

Message.propTypes = {
    message: PropTypes.string.isRequired

}

// author pasa a aceptar props, en este caso recibe las keys del objeto autor que viene de test tweet
function Author({ author }) {
    const { name, handle } = author;
    return (
        <span className='author'>
            <span className='name'>
                {name}
            </span>
            <span className='handle'>
                @{handle}
            </span>
        </span>
    )
}

// Author.propTypes = {
//     author:
//     PropTypes.object.isRequired
// }

// valida que el objeto author cumpla con los parametros requeridos
Author.propTypes = {
    author: PropTypes.shape({
        name:
            PropTypes.string.isRequired,
        handle:
            PropTypes.string.isRequired
    }).isRequired
};


// esta es una funcion normal de JS, puedo pasarla a componente y utilizarla como tal
/* De esto
function getRetweetCount(count){
    if (count > 0){
        return(
        <span className ="retweet-count">
        {count}
        </span>
        );
    } else {
        return null;
    }
}
pasa a esto */

function Count({ count }) {
    if (count > 0) {
        return (
            <span className="retweet-count" >
                { count}
            </span>
        );
    } else {
        return null;
    }
}

//uso el modulo time 
const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time"> {timeString}</span>
    )
};

Time.propTypes = {
    time: PropTypes.number
}


const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);
const RetweetButton = ({ count }) => (
    <span className='retweet-button'>
        <i className="fa fa-retweet" />
        <Count count={count} />
        {/* getRetweetCount es si usara una funcion normal de JS */}
        {/* {getRetweetCount(count)} */}
    </span>
);
const LikeButton = ({ count }) => (
    <span className='like-button'>
        <i className="fa fa-heart" />
        {/* boolean operator the && */}
        {/* {count > 0 &&
            <span className='like-count'>
            {count}
            </span> */}
        {/* en vez de boolean se usa un ternary operator */}
        <span className='like-count'>
            {count ? count : null}
        </span>
    </span>
);

LikeButton.propTypes = {
    count: PropTypes.number
};

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

export default Tweet