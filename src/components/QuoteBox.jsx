import React from 'react';
import ButtonBox from './ButtonBox';

const QuoteBox = ({quoteRandom, colorRandom, handleClick}) => {


	//const [colorRandom, setColorRandom]
	return(
		<article style = {{color:colorRandom}} className = 'box'>
			<p className = 'box__quote'>  {quoteRandom.quote} </p>
			<h1 className = 'box__author'> {quoteRandom.author} </h1>
			<ButtonBox 
				colorRandom = {colorRandom}
				handleClick = {handleClick}
			/>
		</article>
	)
}

export default QuoteBox;