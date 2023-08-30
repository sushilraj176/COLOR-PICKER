import "./App.css";
import { useEffect, useState } from "react";
import { fetchData } from "./Getcolor";
import SearchBar from "./Components/SearchBar";
import DisplayColor from "./Components/DisplayColor";
import { closestColor } from "./Components/closestColour";
import { rgbToHex } from "./Components/convertHextorgb";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(false);
    fetchData().then((items) => {
      if (mounted) {
        setLoading(true);
        setData(items.colors);
      }
    });
    return () => (mounted = false);
  }, []);

  const updateSearch = (e) => {
    setSearch(e);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setSearch("");
  };

  const handleSearchClick = async () => {
    let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    var matchColors =
      /^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/;

    if (search === "") {
      alert("Please provide a color value.");
      return;
    }

    if (regex.test(search)) {
      const sortedColor = await closestColor(search, data);
      setData(sortedColor);
    } else if (matchColors.test(search)) {
      const rgbValues = search.match(/\d+/g); // Extract all numeric values
      const [r, g, b] = rgbValues;
      const hexvalue = rgbToHex(r, g, b);
      const sortedColor = await closestColor(hexvalue, data);
      setData(sortedColor);
    } else {
      alert("Please provide a valid hex or RGB color value.");
    }
  };

  return (
    <div className="App">
      <h1 className="text-primary">Open Ocean</h1>

      <SearchBar
        getSearch={getSearch}
        updateSearch={updateSearch}
        search={search}
        handleSearchClick={handleSearchClick}
        datalist={data}
        //setSearch={setSearch}
      />
      {loading ? <DisplayColor data={data} /> : "Loading...."}
    </div>
  );
}

export default App;
