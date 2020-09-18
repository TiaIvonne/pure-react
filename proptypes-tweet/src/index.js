import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tweet from './Tweet'


//En este ejercicio agrego un nivel superior que es donde muestro la lista de tweets
//Despliego la lista usando map
const TweetList = ({tweet}) => (
    <div>
        <body>
            {tweet.map(t =>
                <Tweet key={t.id} tweet={t}/>
            )}
        </body>
    </div>
)

const testTweet = [
    {
    id     : 1,
    message: 'Meow, meow, meow',
    gravatar: 'https://www.gravatar.com/avatar/0c2d18355cc0a49ffb2697a45c1512b2',
    author: {
        handle: 'Luis',
        name: 'Cucho', 
        },
    likes: 2,
    retweets:0,
    timestamps: '2016-07-30 21:24:37'
    },
    {
        id      :2,
        message: 'crac, meow, meow',
        gravatar: 'https://www.gravatar.com/avatar/0c2d18355cc0a49ffb2697a45c1512b2',
        author: {
            handle: 'Lucia',
            name: 'No me muero',
        },
        likes: 5,
        retweets: 0,
        timestamps: '2020-07-30 21:24:37'
    },
]

// al componente tweet le entrego el objeto que contiene la info
ReactDOM.render(
    <TweetList tweet={testTweet}/>,
    document.querySelector('#root')

)
