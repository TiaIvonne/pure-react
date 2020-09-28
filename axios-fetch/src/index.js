
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
// no olvidar instalar axios npm install --save axios 
// en la consola del browser se puede revisar el objeto 

class Reddit extends React.Component{
    state = {
        posts: [],
        loading: false
    }
    // utilizo axios para llamar a la pagina de reddit
    componentDidMount = () => {
        this.setState({loading:true});
        axios
            .get(
                `https://www.reddit.com/r/${this.props.subreddit}.json`
            )
            .then(response => {
                if (response.status === false) {
                    console.log('error toi chikito')
                } else {
                const posts = response.data.data.children.map(
                    obj => obj.data
                );
                // cambia el state de los posts
                this.setState({posts})
                console.log('holaaaaa',this.state.posts)
                }
            })
            .finally(() =>
                this.setState({loading: false})
            )
            .catch(error => {
                console.error(error)
            });
    }
    // esta funcion trae los post del subreddit y los despliega
    // si el estado de loading es true entonces despliega el resto
    // en caso contrario despliega un loading en pantalla
    renderPostsFromReddit = () =>{
        const {posts, loading} = this.state
        return (
                loading ? 
                <div>Loading....</div>
                : 
                <ul>
                    {/* mapea los posteos del subreddit y muestra el id y el titulo */}
                {posts.map( post => (
                <li key={post.id}>{post.title}</li>
                 ))}
                </ul>       
        )
    }

    render(){
        return(
            <div>
                <h1> {`/r/${this.props.subreddit}`}</h1>
                {this.renderPostsFromReddit()}
            </div>
        )
    }
}


ReactDOM.render(
    <Reddit subreddit='reactjs'/>,
    document.getElementById('root')
)
// el mismo request de data pero con fetch que es estandar de JS
// no se debe importar nada

// fetch(`http://www.reddit.com/r/reactjs.json`)
//     .then(response => {
//         if (response.ok){
//             return response.json();
//         }
//         throw new Error ('He fallado estoi chikito');
//     })
//     .then( data => {
//             const posts = data.data.children.map(
//                 obj => obj.data
//             );
//             console.log(posts);
//         })
//     .catch(error => {
//         console.log(error);
//     });
