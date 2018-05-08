import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail'
class AlbumList extends Component{
    state ={albums:[]}
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums') 
        .then(response => this.setState({albums:response.data}));
        console.log("Inside the componentWillMount");
    }
    renderAlubum(){
        return this.state.albums.map(album =><AlbumDetail key={album.title} album={album} />)
    }
    render(){
        console.log(this.state.albums);
        return(
            <ScrollView>
                {this.renderAlubum()}
            </ScrollView>
        );
    }
}
export default AlbumList;