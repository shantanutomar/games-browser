import React, { useEffect, useState } from 'react';
import Game from "../Game/Game";
import { makeStyles } from '@material-ui/core/styles';
import SearchGames from "../SearchGames/SearchGames";
import Loader from "../Loader/Loader";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
		padding: '20px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
	},
	header: {
		padding: '20px 0',
    position: 'fixed',
		top: 0,
		width: '100%',	
		backgroundColor: '#424242',
		display: "flex",
		flexDirection: "column"
	},
	allGames: {
		height: '100%',
		marginTop: '150px',
		overflow: "scroll"
	},
	loadingCont: {
		height: '100px',
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
	loadingContent: {
		fontSize: '20px',
		marginTop: '150px',
		marginBottom: '60px'
	}
});

const Games = () => {
	const [loading = true, setLoading] = useState();
	const [games, setGames] = useState();
	const [searchText = "", setSearchText] = useState();
	const classes = useStyles();

	let arrayToObjectKeyByID = (array, keyField) =>
		array.reduce((obj, item) => {
			obj[item[keyField]] = item;
			return obj;
		}, {});
	
	const fetchGames = () => {
		fetch("http://starlord.hackerearth.com/gamesext").then(res => {
			return res.json();
		}).then(response => {
			let gamesList = arrayToObjectKeyByID(response, "title");
			setGames(gamesList);
			setLoading(false);
		});
	}

	useEffect(() => {
		fetchGames();
	}, []);

	const onChange = (event, value) => {
		value !== null ? setSearchText(value) : setSearchText("");
	}

	const renderGames = () => {
		if(searchText === "") {
			return games && Object.values(games).map((game, index) => {
				return <Game key={index} title={game.title} platform={game.platform} score={game.score}
				genre={game.genre} editors_choice={game.editors_choice} release_year={game.release_year}/>
			})
		} else {
				return <Game key={Math.random()} title={games[searchText].title} platform={games[searchText].platform} />
		}
	}
	
	return (
		loading ? (
			<div className={classes.loadingCont}>
				<div className={classes.loadingContent}>Loading games !!</div>
				<Loader />
			</div> 
		): 
		(
			<>
				<div className={classes.header}>
					<span>Games</span>
					<SearchGames games={games} onChange={onChange}/>
				</div>
				<div className={classes.allGames}>
					{renderGames()}
				</div>
			</>
		)
  );
}

export default Games;
