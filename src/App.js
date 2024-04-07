import './App.css';

const App = () => {
  const handleClick = event => {
    // 👇️ Refers to the image element
    console.log(event.target);

    console.log('Image clicked');
  };

  return (
    <div>
      <img
        src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
        alt="car"
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
