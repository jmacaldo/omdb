import React, { PropTypes, Component } from 'react'
import Media from 'react-bootstrap/lib/Media';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import $ from "jquery";

const mediaStyle = {
	maxWidth: 600,
	margin: 'auto'
};
const marginTop = {
	marginTop: 30,
};

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.onSearch = this.onSearch.bind(this);
		this.bacon = this.bacon.bind(this);

	}

	onSearch(e) {
		var searchParam = e.target.value;
		console.log(searchParam);
		this.props.loadMovies(searchParam.replace(/ /g,'+'))
	}

	componentDidMount() {
		// ...
	}

	bacon(){
		$(document).ready(function()
{
	$("#baconButton").click(function()
	{
		$.getJSON('https://baconipsum.com/api/?callback=?',
			{ 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'3' },
			function(baconGoodness)
		{
			if (baconGoodness && baconGoodness.length > 0)
			{
				$("#baconIpsumOutput").html('');
				for (var i = 0; i < baconGoodness.length; i++)
					$("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
				$("#baconIpsumOutput").show();
			}
		});
	});
});
	}
	createListItems(){

		if (!this.props.movies) {
			return (<p>No search results</p>)
		} else {
			return this.props.movies.map((movie,index) => {
				if (movie.Poster == 'N/A') {movie.Poster = 'https://s3.amazonaws.com/nycdapixr/generalWeb/Nicolas_Cage.png'}
				$.getJSON('https://baconipsum.com/api/?callback=?',
					{ 'type':'all-meat', 'start-with-lorem':'0', 'paras':'1' },
					function(baconGoodness)
				{
					if (baconGoodness && baconGoodness.length > 0)
					{
						$("#"+movie.imdbID).html('');
						for (var i = 0; i < baconGoodness.length; i++)
							$("#"+movie.imdbID).append('<p>' + baconGoodness[i] + '<hr/></p>');
						$("#"+movie.imdbID).show();
					}
				});
				console.log(movie);
					return (
						<Media style={mediaStyle} key={movie.imdbID}>
								<Media.Left align="top">
									<img width={64} src={movie.Poster} alt="thumbnail" />
								</Media.Left>
								<Media.Body>
									<Media.Heading>{movie.Title}, {movie.Year}</Media.Heading>
									<p id={movie.imdbID}>
									</p>
								</Media.Body>
							</Media>
					)
				})
    };
  }
	render() {
		return (
			<div style={mediaStyle}>

				<ControlLabel style={marginTop}>OMDB Search by Joven Macaldo</ControlLabel>
					<FormControl
						type="text"
						placeholder="Search for a movie"
						onChange={this.onSearch}
					/>

				{this.props.isLoading &&
					<h3> Request Pending </h3>

			 	}

				{!this.props.isLoading &&
					<div style={marginTop}>
							{this.createListItems()}
					</div>
			 	}

			</div>
		)
	}
}

MovieList.propTypes = {
	//onSearchChange: PropTypes.func.isRequired,
	//movies: PropTypes.array.isRequired,
	onDidMount: PropTypes.func
};

export default MovieList;
