import React, { Component } from 'react';
const data = { "is_claimed": true, "rating": 5, "mobile_url": "http:\/\/m.yelp.com\/biz\/mendocino-farms-santa-monica?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ", "rating_img_url": "http:\/\/s3-media1.fl.yelpcdn.com\/assets\/2\/www\/img\/f1def11e4e79\/ico\/stars\/v1\/stars_5.png", "review_count": 58, "name": "Mendocino Farms", "rating_img_url_small": "http:\/\/s3-media1.fl.yelpcdn.com\/assets\/2\/www\/img\/c7623205d5cd\/ico\/stars\/v1\/stars_small_5.png", "url": "http:\/\/www.yelp.com\/biz\/mendocino-farms-santa-monica?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ", "categories": [ [ "Salad", "salad" ], [ "Sandwiches", "sandwiches" ] ], "phone": "3103955273", "snippet_text": "I know this is the new hip \"healthy\" place to be in Santa Monica. The line was out the door when I came by last time. Since it was the holidays, I didn't...", "image_url": "http:\/\/s3-media1.fl.yelpcdn.com\/bphoto\/f9GsF14gVgsnwsdKQxfAIQ\/ms.jpg", "snippet_image_url": "http:\/\/s3-media1.fl.yelpcdn.com\/photo\/mOhPddIDmquu0YbGcmDFLg\/ms.jpg", "display_phone": "+1-310-395-5273", "rating_img_url_large": "http:\/\/s3-media3.fl.yelpcdn.com\/assets\/2\/www\/img\/22affc4e6c38\/ico\/stars\/v1\/stars_large_5.png", "id": "mendocino-farms-santa-monica", "is_closed": false, "location": { "city": "Santa Monica", "display_address": [ "631 Wilshire Blvd", "Ste E", "Santa Monica", "Santa Monica, CA 90401" ], "geo_accuracy": 8, "neighborhoods": [ "Santa Monica" ], "postal_code": "90401", "country_code": "US", "address": [ "631 Wilshire Blvd", "Ste E" ], "coordinate": { "latitude": 34.02144, "longitude": -118.49591 }, "state_code": "CA" } };
import Map from './Map';
import {Button} from 'react-bootstrap';

class Restaurant extends Component {
  render(){
  	console.log('data: ', data);
  	console.log('helo from rest', this.props)
  	return (

	 	<div>
	 		<h2>This is the best restaurant for you!</h2>
	 		<h3>{data.name}</h3>
	 		<p>{data.location.display_address[0]}</p>
	 		<p>{data.location.display_address[1]}</p>
	 		<p>{data.location.display_address[2]}</p>
	 		<p>{data.display_phone}</p>
			<div style={{width:300, height:300}}>
          		<Map lat={data.location.coordinate.latitude} lng={data.location.coordinate.longitude}/>
        	</div>
        	<Button>Peas get directions!</Button>
	 	</div>
 	)
  }
}

export default Restaurant;