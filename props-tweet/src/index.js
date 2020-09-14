import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';


//accept tweet prop
function Tweet({tweet}){
    return(
    <div className = 'tweet'>
       {/*avatar ahora va a recibir lo que exista en la prop tweet */}
        <Avatar hash={tweet.gravatar}/>
        <div className = 'content'>
            <Author author ={tweet.author}/>
            <Time time={tweet.timestamp}/>
            <Message message = {tweet.message}/>
            <div className = 'buttons'>
                <ReplyButton />
                <RetweetButton count={tweet.retweets}/>
                <LikeButton count={tweet.likes}/>
                <MoreOptionsButton/>
            </div>
        </div>
    </div>
);
}


//avatar ahora es estatico, pero lo convertiremos a un componente que accepta props.
function Avatar({ hash }){
    const url = `${hash}`
    return (
    <img
        src={url}
        className = 'avatar'
        alt = 'avatar'/>
    );
}

function Message({message}){
    return(
        <div className = 'message'>
        {message}
        </div>
    )

}

// author pasa a aceptar props, en este caso recibe las keys del objeto autor que viene de test tweet
function Author({ author }){
    const {name, handle} = author;
    return (
    <span className='author'>
        <span className= 'name'>
        {name}
        </span>
        <span className = 'handle'>
            @{handle}
        </span>
        </span>
    )
}

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

function Count({count}){
    if (count > 0) {
        return(
            <span className = "retweet-count" >
            { count }
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
)};
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
        <i className="fa fa-heart"/>
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
const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

const testTweet = {
    message: 'Meow, meow, meow',
    gravatar: 'https://www.gravatar.com/avatar/0c2d18355cc0a49ffb2697a45c1512b2',
    author: {
        handle: 'Luis',
        name: 'IAMA Cat Person'
    },
    likes: 2,
    retweets:0,
    timestamps: '2016-07-30 21:24:37'
}


ReactDOM.render(
    <Tweet tweet={testTweet}/>,
    document.querySelector('#root')

)
