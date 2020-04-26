import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
		margin: '0 20px',
		outline: "none"
	},
	textField: {
		outline: "none"
	}
});


const SearchGames = (props) => {
	const classes = useStyles();

	return (
	<div style={{ width: '100%' }}>
		<Autocomplete
			className={classes.root}
			options={Object.keys(props.games)}
			getOptionLabel={(option) => option.toString().toLowerCase()}
			id="auto-complete"
			autoComplete
			includeInputInList
			onChange={(event, value) => props.onChange(event, value)}
			renderInput={(params) => <TextField className={classes.textField} {...params} label="Search Games" margin="normal" />}
		/>
	</div>
	)
}

export default SearchGames;
