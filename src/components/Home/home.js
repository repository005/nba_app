import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';

const Home = (props) => {
  return (
    <div>
      <NewsSlider 
      
        type="featured"
        start={0}
        amount={3}
        settings={{
          dots: false
        }}
      />
      <NewsList
        tyoe="card"
        loadmore={true}
        start={3}
        amount={3}
      />
    </div>
  );
};

export default Home;