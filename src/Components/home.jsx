import React, { Component } from 'react';
import cover1 from "./../images/nature.jpg";
import cover2 from "./../images/train.jpg";
import cover3 from "./../images/waters.jpg";
import cover4 from "./../images/frogs.jpg";
import heroImgHeader from './header';
import Slider from 'react-slick';
import Footer from './footer.jsx';

const Cards = () => (
	 <div className="row blog-cards">
    	<div className="bg-card">
    		<h2>Title</h2>
    		<p>This is a dummy text like john doe and lorem ipsum, This is a dummy text like john doe and lorem ipsum</p>
    	</div>
    	<div className="bg-card">
    		<h2>Title</h2>
    		<p>This is a dummy text like john doe and lorem ipsum, This is a dummy text like john doe and lorem ipsum</p>
    	</div>
    	<div className="bg-card">
    		<h2>Title</h2>
    		<p>This is a dummy text like john doe and lorem ipsum, This is a dummy text like john doe and lorem ipsum</p>
    	</div>
    </div>
);


const RandomBoard = () =>(
<div>
	<div className="row blog-grids">
   		<div className="blog-parts">
   			<img src={cover2} alt="" />
   		</div>
   		<div className="blog-parts">
   			<h2>Randomly picked topics</h2>
   			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
   		</div>
   		<div className="blog-parts">
   			<img src={cover3} alt="" />
   		</div>
   	</div>
   	<div className="row blog-grids">
   		<div className="blog-parts">
   			<h2>Randomly picked topics</h2>
   			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
   		</div>
   		<div className="blog-parts">
   			<img src={cover3} alt="" />
   		</div>
   		<div className="blog-parts">
   			<h2>Randomly picked topics</h2>
   			<p>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
   		</div>
   	</div>
   	<div className="row blog-grids">
   		<div className="blog-parts">
   			<img src={cover2} alt="" />
   		</div>
   		<div className="blog-parts">
   			<h2>Randomly picked topics</h2>
   			<p>Lorem the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
   		</div>
   		<div className="blog-parts">
   			<img src={cover3} alt="" />
   		</div>
   	</div>
</div>
);

class Home extends Component{
	render(){
		const settings = {
			dots: true,
  			infinite: true,
  			speed: 500,
  			fade: true,
  			cssEase: 'linear',
  			slidesToShow: 4,
      		slidesToScroll: 4,
      		autoplay: true,
        	responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: true,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		};
		return(
			<div className="container-fluid">
		        <div className="bg-container">  	
		        	<Slider {...settings}>
			        	<div className="bg-heroSection">
			        		<img src={cover1} alt=""/>
						</div>
						<div className="bg-heroSection">
			        		<img src={cover2} alt=""/>
						</div>
						<div className="bg-heroSection">
			        		<img src={cover3} alt=""/>
						</div>
						<div className="bg-heroSection">
			        		<img src={cover4} alt=""/>
						</div>
					</Slider>
					<div className="blog-title">
						<h1>Kiran's Blog</h1>
					</div>
		        </div>
		       	<Cards />
		       	<RandomBoard />
		       	<br />
		        <Footer />
		    </div>
		);
	}
}


export default Home;