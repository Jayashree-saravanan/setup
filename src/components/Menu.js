import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import ImageDetails from './ImageDetails';
// import Pagination from './Pagination';
import Buttons from './button';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItem, setFilteredItems] = useState([]);
  // const [selectedItem, setSelectedItem] = useState(null);
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [sortBy, setSortBy] = useState('timestamp')
  // const[listItem, setListitem]=useState([])



  const fetchImages = async () => {
    try {
      const response = await fetch('http://contest.elecard.ru/frontend_data/catalog.json');
      const data = await response.json();
      setMenuItems(data);
      setFilteredItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const filterItems = useCallback((category) => {
    if (category === 'all') {
      setFilteredItems(menuItems);
    } else {
      const newItems = menuItems.filter((item) => item.category === category);
      setFilteredItems(newItems);
    }
    // setCurrentPage(1);
  }, [menuItems]);


  const sortItems = useCallback ((sortType) => {
    let sortedItems = [];
    if(sortType === 'filesize') {
        sortedItems = filteredItem.sort((a, b) => {
            return a.filesize - b.filesize
        })
    }else if (sortType === 'image') {
        sortedItems = filteredItem.sort(( a,b ) => {
            const textA = a.image.toUpperCase();
            const textB = b.image.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
    } else {
        sortedItems = filteredItem.sort ((a,b) =>{
            return a.timestamp - b.timestamp
        });
    }
    setFilteredItems([...sortedItems])
    setSortBy(sortType);

 }, [filteredItem])



  // const handleImageClick = (item) => {
  //   setSelectedItems(item);
  // };

  const formatTimestamp = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  };

  // Get current items
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="section">
      {   

     
     
        <div>
          <div>
            <label className='sort-label'>Sort By:</label>
            <select value={sortBy} onChange={(e) => sortItems(e.target.value)} className='sort-select'>
              <option value="timestamp">Timestamp</option>
              <option value="filesize">Filesize</option>
              <option value="image">Image</option>
            </select>
          </div>

           <div className="section-center">
            {filteredItem.map((item) => {
              return (
                <div key={item.image} className="menu-item" >
                  <div>
                    <img src={`http://contest.elecard.ru/frontend_data/${item.image}`} className="photo" />
                    <div className="item-info">
                      <h4 className='item-info-category'><label>Category:</label>{item.category}</h4>
                      <h4 className='item-info-filesize'><label>fileSize:</label>{item.filesize}</h4>
                      <h4 className='item-info-timestamp'>{formatTimestamp(item.timestamp)}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredItems.length}
            paginate={paginate}
            currentPage={currentPage}
          /> */}
     
      </div>
  }
    </div>
  );
}
export default Menu;


