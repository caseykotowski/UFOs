# UFOs
A webpage for data on UFOs made using JavaScript

## Overview
I wanted an easy to filter site to hold information on UFO sightings across the world. I did a lot of research to compile a list of credible sightings, and want that data to be easy to find. I decided to use javascript to create this table, as well as add in multiple filter fields, so any user can find the exact sighting they're looking for. 

## Results
This is the filter bar:

![Default Filter Bar](https://github.com/caseykotowski/UFOs/blob/main/static/images/filter_bar.png)

The filter comes with some defaults, but those are not applied. They're just an example of what you can type, and how to format. You'll notice that there are no capital letters in the city, state, country, or shape fields' defaults, so that signals to the users not to type with capitals in those fields.

Below are some examples of filter results. There are even results from outside the US, and you can layer the filter as well!


![Filter by Date](https://github.com/caseykotowski/UFOs/blob/main/static/images/filter_date.png)


![Filter by State](https://github.com/caseykotowski/UFOs/blob/main/static/images/filter_state.png)


![Layered Filter](https://github.com/caseykotowski/UFOs/blob/main/static/images/layered_filter.png)


![Filter by Country](https://github.com/caseykotowski/UFOs/blob/main/static/images/filter_country.png)

## Summary
Overall, this webpage gives an easy way to find UFO sightings by a number of relevent search terms. However, there is at least one major drawback. 

### Drawback
The only way to update the website data is to update the data file held in original code. To add new sightings, I would have to download new data and add it to my locally stored file. Users can't add their own sightings, and it wouldn't be live to date data.

### Recommendations
I do have two potential next steps to really elevate this website. The first is to use data scrapping to find the latest news stories about UFOs, and then add the data to the table. The second would be to allow user imput, use code to format it, and then add the sightings to the table. 

I really like the idea of user input, because many news sources might be biased against reporting UFOs. Although, it would be difficult to decipher what is a credible sighting, or not a hoax. 
