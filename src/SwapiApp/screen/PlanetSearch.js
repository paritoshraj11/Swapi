import React from "react";
import { SearchBar, LoadingIndicator, Card, BigCard } from "../components";
import classNames from "classnames";
import { sortArray } from "../Utility";

const SPECIAL_USER = ["luke skywalker"];

class PlanetSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.isSpecialUser = this._isSpecialUser(props.user); //to check it is special user
    this.timeOut = null;
    this.count = 0;
    this.warningGiven = false;
  }

  componentDidMount() {
    let { getPlanets } = this.props;
    //load initial data to render
    getPlanets && getPlanets();
  }

  _isSpecialUser = (user = {}) => {
    let { name } = user;
    let index = SPECIAL_USER.findIndex(item => {
      return item.toLocaleLowerCase() == name.toLocaleLowerCase();
    });
    return index >= 0;
  };

  _onChange = e => {
    let value = e.target.value;
    //validate time limit of users to search
    if (!this._userSearchValidate()) {
      alert("only special user allow to search more than 15 in a minute");
      if (!this.warningGiven) {
        this.warningGiven = true;
        this._updateState("");
      }
    } else {
      this._updateState(value);
    }
    // incrementing count of user after type ended
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(this._afterSearch, 350);
  };

  _updateState = value => {
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
  _afterSearch = () => {
    //after type ended update the counter by one, and last typed time
    this.count = (this.count || 0) + 1;
    if (!this.initialSearch) {
      this.initialSearch = new Date();
    }
    this.lastSearch = new Date();
  };

  _userSearchValidate = () => {
    //if user is special or initial search time is undefined , then not validate time search in a limit
    if (this.isSpecialUser || !this.initialSearch) {
      return true;
    }
    if (this.lastSearch - this.initialSearch < 1000 * 60) {
      if (this.count < 15) {
        return true;
      } else {
        return false;
      }
    } else {
      this.count = 0;
      this.initialSearch = null;
      this.lastSearch = null;
      this.warningGiven = null;
      return true;
    }
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
