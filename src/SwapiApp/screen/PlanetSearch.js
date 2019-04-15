import React from "react";
import { SearchBar, LoadingIndicator, Card, BigCard } from "../components";
import classNames from "classnames";
import { sortArray } from "../Utility";

class PlanetSearch extends React.Component {
  state = {
    searchText: ""
  };
  componentDidMount() {
    let { getPlanets } = this.props;
    //load initial data to render
    getPlanets && getPlanets();
  }

  _onChange = e => {
    let value = e.target.value;
    let { serchPlanets, getPlanets } = this.props;
    this.setState(
      {
        searchText: value
      },
      () => {
        if (!value) {
          getPlanets && getPlanets();
          return;
        }
        serchPlanets && serchPlanets({ data: this.state.searchText });
      }
    );
  };
  render() {
    let {
      props: { data = {} },
      _onChange,
      state: { searchText } = {}
    } = this;
    let { data: planets, loading } = data;
    //sort planet according to their population
    planets = sortArray(planets);
    //initial card  header opacity and font size
    let cardHeaderOpacity = 1;
    let cardFontSize = 30;
    let componet = [
      <div className="row">
        {planets.map(item => {
          let headerStyle = {
            backgroundColor: `rgba(220,20,60,${cardHeaderOpacity} )`,
            color: "white",
            fontSize: cardFontSize
          };
          cardHeaderOpacity = cardHeaderOpacity - cardHeaderOpacity * 0.1; //decrease opacity and font size 10% from previous bigger population planet
          cardFontSize = cardFontSize - cardFontSize * 0.1;
          return <Card key={`item.name`} {...item} headerStyle={headerStyle} />;
        })}
      </div>
    ];
    if (loading) {
      componet = <LoadingIndicator />;
    }

    return (
      <div className={classNames("  container py-4 ")}>
        <SearchBar onChange={_onChange} value={searchText} />
        {componet}
      </div>
    );
  }
}

export default PlanetSearch;
