import React from 'react';
import Navbar from '../components/Navbar';

function Dashboard() {
  // Sample card data with images
  const cards = [
    { 
      title: 'Card 1', 
      content: 'Content for Card 1', 
      image: 'https://cdn.pixabay.com/photo/2013/07/18/10/59/graph-163712_640.jpg' 
    },
    { 
      title: 'Card 2', 
      content: 'Content for Card 2', 
      image: 'https://cdn.pixabay.com/photo/2013/07/12/12/04/chart-145231_640.png' 
    },
    { 
      title: 'Card 3', 
      content: 'Content for Card 3', 
      image: 'https://cdn.pixabay.com/photo/2016/10/04/13/05/graphic-1714230_640.png' 
    },
    { 
      title: 'Card 4', 
      content: 'Content for Card 4', 
      image: 'https://cdn.pixabay.com/photo/2015/11/03/09/24/graphic-1020366_640.jpg' 
    },
    { 
      title: 'Card 5', 
      content: 'Content for Card 5', 
      image: 'https://cdn.pixabay.com/photo/2022/05/01/21/04/analytics-7168479_640.png' 
    },
    { 
      title: 'Card 6', 
      content: 'Content for Card 6', 
      image: 'https://cdn.pixabay.com/photo/2018/01/07/20/56/graph-3068300_640.jpg' 
    },
    { 
      title: 'Card 7', 
      content: 'Content for Card 7', 
      image: 'https://cdn.pixabay.com/photo/2013/07/18/10/59/pulse-trace-163708_1280.jpg' 
    },
    { 
      title: 'Card 8', 
      content: 'Content for Card 8', 
      image: 'https://cdn.pixabay.com/photo/2018/06/18/18/10/website-3483020_640.png' 
    },
  ];

  return (
    <div className='ml-0 md:ml-64 w-full transition-all duration-300'>
      <Navbar />

      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {cards.map((card, index) => (
          <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'>
            {/* Display the image */}
            <img src={card.image} alt={card.title} className='w-full h-32 object-cover' />
            <div className='p-4'>
              <h2 className='text-xl font-bold'>{card.title}</h2>
              <p className='text-gray-700'>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
