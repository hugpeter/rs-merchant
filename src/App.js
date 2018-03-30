import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import Autosuggest from 'react-autosuggest';
// import logo from './logo.svg';
import './App.css';
import itemNamesAndStorePrices from './itemNamesAndStorePrices.js';
import itemMembershipStatus from './itemMembershipStatus.js';
import items from './items.js';

const reducer = combineReducers({
  isFetching: fetchStateReducer,
  Item: ItemReducer
});

function fetchStateReducer(state = {
  isFetching : false
}, action) {
  switch(action.type){
    case 'FETCH_STATE_ON':{
      return true;
    }
    case 'FETCH_STATE_OFF':{
      return false;
    }
    default:{
      return state;
    }
  }
  
}

function ItemReducer(state = {
  Item : {
    id: 0,
    name: '',
    membersOnly: false,
    storePrice: 0,
    storeMargin: 0,
    storeROI: 0,
    overall : 0,
    buying : 0,
    selling : 0,
    geMargin: 0,
    geROI: 0,
    buyingQuantity : 0,
    sellingQuantity : 0,
    demand : 0
  }
}, action){
  switch(action.type){
    case 'GET_ITEM_DATA' : {
      return action.Item;
    }
    default:{
      return state;
    }
  }
}

function osrsItemReducer(state = {
  osrsItem : {
    icon: '',
    icon_large: '',
    id: 0,
    type: '',
    typeIcon: '',
    name: '',
    description: '',
    Current: {
      trend: '',
      price: 0
    },
    today: {
      trend: '',
      price: 0
    },
    members: false,
    day30: {
      trend: '',
      change: ''
    },
    day90: {
      trend: '',
      change: ''
    },
    day180: {
      trend: '',
      change: ''
    }
  }
}, action){
  switch(action.type){
    case 'GET_OSRS_ITEM_DATA' : {
      return action.osrsItem;
    }
    default:{
      return state;
    }
  }
}

const store = createStore(
  reducer,
  // applyMiddleware(thunk)
);

//action list
const fetchStateOnAction = 'FETCH_STATE_ON';
const fetchStateOffAction = 'FETCH_STATE_OFF';
const itemClickedOnAction = 'ITEM_CLICKED_ON';
const itemClickedOffAction = 'ITEM_CLICKED_OFF';
const getItemDataAction = 'GET_ITEM_DATA';
const getOSRSItemDataAction = 'GET_OSRS_ITEM_DATA';


//action functions
function fetchStateOn(){
  return {
    type: fetchStateOnAction
  };
}

function fetchStateOff(){
  return {
    type: fetchStateOffAction
  };
}

function setItem(Item){
  return {
    type: getItemDataAction,
    Item: Item
  };
}

function setOSRSItem(osrsItem){
  return {
    type: getOSRSItemDataAction,
    osrsItem: osrsItem
  };
}

//fetch list
function fetchItemData(itemId){
  store.dispatch(fetchStateOn());

  fetch(`https://api.rsbuddy.com/grandExchange?a=guidePrice&i=${itemId}`)
  .then((res) => (res.json()))
  .then(function(data){
    let additionalData = items.find(i => i.id === itemId);

    data.name = additionalData.name;
    data.storePrice = additionalData.storePrice;
    data.membersOnly = additionalData.membersOnly;
    data.id = itemId;
    data.geMargin = data.buying - data.selling;
    data.geROI = (data.geMargin / data.selling) * 100;
    data.storeMargin = data.buying - data.storePrice;
    data.storeROI = (data.storeMargin / data.storePrice) * 100;
    data.demand = data.buyingQuantity / data.sellingQuantity;

    store.dispatch(fetchStateOff());
    store.dispatch(setItem(data));
  });
}

function fetchOSRSItemData(itemId){
  store.dispatch(fetchStateOn());

  fetch(`http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemId}`, {
    headers: { 'Access-Control-Allow-Origin': 'rsMerchant/1.0'}
  })
  .then((res) => (res.json()))
  .then(function(data){
    store.dispatch(fetchStateOff());
    store.dispatch(setOSRSItem(data));
  });
}

function updateItems(){
  let itemBank = [];

  for(var item in itemNamesAndStorePrices){
    let newItem = {
      name: itemNamesAndStorePrices[item].name,
      id: item,
      storePrice: itemNamesAndStorePrices[item].store
    }

    itemBank.push(newItem);
  }

  let count = 0;
  for(item in itemMembershipStatus){
    itemBank[count].membersOnly = itemMembershipStatus[item].members;
    count++;
  }

  let items = "[ ";

  for(var i=0; i < itemBank.length; i++){
    items += '{ ';
    items += 'id: ';
    items += itemBank[i].id + ', ';
    items += 'name: "';
    items += itemBank[i].name + '", ';
    items += 'membersOnly: ';
    items += itemBank[i].membersOnly + ', ';
    items += 'storePrice: ';
    items += itemBank[i].storePrice + '}, ';
  }

  items += ' ]';

  console.log(items);
}

//APP
const App = () => (
  <div className="ui segment">
    <ItemSearch />
    <div className="ui divider"></div>
    <ItemCard />
  </div>
);

class UpdateItemsBtn extends React.Component {
  handleClick = () => {
    updateItems();
  }

  render(){
    return(
      <button
        onClick={this.handleClick}
        className='ui negative button floated right'
      >
        Update Item Data
      </button>
    )
  }
}

//AUTOSUGGEST logic
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength < 2 ? [] : items.filter(item => 
    item.name.toLowerCase().indexOf(inputValue) !== -1
  );
};

const getSuggestionValue = suggestion => suggestion.name;



const renderSuggestion = suggestion => (
  <span>{suggestion.name}</span>
);

class ItemSearch extends React.Component{
  state = {
    value: '', 
    suggestions: [],
    itemNotFound: false
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    })
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleSubmit = () => {
    let item = items.find(i => i.name === this.state.value);

    if(typeof item !== 'undefined'){
      fetchItemData(item.id);
      this.setState({
        value: '',
        suggestions: [],
        itemNotFound: false
      });
    } else {
      this.setState({
        suggestions: [],
        itemNotFound: true
      });
    }
  };

  render(){
    const { value, suggestions, itemNotFound } = this.state;

    const inputProps = {
      placeholder: 'Search for an item!',
      value,
      onChange: this.onChange,
    };

    let itemNotFoundMessage;
    if(itemNotFound){
      itemNotFoundMessage = (
        <span>The item typed does not exist in our database, please choose from the suggested items in the drop down.</span>
      )
    }

    return(
      <div className='ui centered input'>
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        <button
          onClick={this.handleSubmit}
        >
          Search
        </button>
        {itemNotFoundMessage}
      </div>
    )
  }
}

class ItemCard extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render(){
    const state = store.getState();
    const isFetching = state.isFetching;
    const Item = state.Item;
    const imageBaseUrl = 'http://services.runescape.com/m=itemdb_oldschool/obj_big.gif?id=';
    //http://www.runescape.com/img/rsp777/grand_exchange/members.png --members symbol for members only items
    //http://www.runescape.com/img/rsp777/grand_exchange/coin.png - single coin 
    
    let memberStatus;

    if(Item.membersOnly){
      memberStatus = (
        <span className="ui label right floated">
          <img src='http://www.runescape.com/img/rsp777/grand_exchange/members.png' alt=""/>
        </span>
      )
    } else {
      memberStatus = (
        <span className="ui label right floated">
          F2P
        </span>
      )
    }

    let results;
    if(isFetching){
      results = (
         <div>
           Getting Data...
         </div>
       )
    } else {
      results = 
      (
        <div className="ui divided items">
          <div className="item">
            <div className="image">
              <img src={imageBaseUrl + Item.id} alt=""/>
            </div>
            <div className="content">
              <div className="right floated meta">
                <span className="cinema">#{Item.id}</span>
              </div>
              <a className="header">{Item.name}</a>
              <div className="description">
                <h4 className="ui horizontal divider header">
                  <i className="balance scale icon"></i>
                  GE Merching
                </h4>
                <table className="ui definition table">
                  <tbody>
                    <tr>
                      <td className="four wide column">Buy for</td>
                      <td>{ new Intl.NumberFormat().format(Item.selling) } gp </td>
                    </tr>
                    <tr>
                      <td>Sell for</td>
                      <td>{ new Intl.NumberFormat().format(Item.buying) } gp</td>
                    </tr>
                    <tr>
                      <td>Profit Margin</td>
                      <td>{ new Intl.NumberFormat().format(Item.geMargin)} gp</td>
                    </tr>
                    <tr>
                      <td>ROI</td>
                      <td>{ new Intl.NumberFormat().format(Item.geROI)} % </td>
                    </tr>
                  </tbody>
                </table>
                <h4 className="ui horizontal divider header">
                  <i className="fire icon"></i>
                  GE Demand (last hr)
                </h4>
                <table className="ui definition table">
                  <tbody>
                    <tr>
                      <td className="four wide column">Bought</td>
                      <td>{ new Intl.NumberFormat().format(Item.buyingQuantity) }</td>
                    </tr>
                    <tr>
                      <td>Sold</td>
                      <td>{ new Intl.NumberFormat().format(Item.sellingQuantity) }</td>
                    </tr>
                    <tr>
                      <td>Demand</td>
                      <td>{ new Intl.NumberFormat().format(Item.demand)}</td>
                    </tr>
                  </tbody>
                </table>
                <h4 className="ui horizontal divider header">
                  <i className="shopping basket icon"></i>
                  Store Merching
                </h4>
                <table className="ui definition table">
                  <tbody>
                    <tr>
                      <td className="four wide column">Buy from store at</td>
                      <td>{ new Intl.NumberFormat().format(Item.storePrice)} gp</td>
                    </tr>
                    <tr>
                      <td>Sell to GE at</td>
                      <td>{ new Intl.NumberFormat().format(Item.buying) } gp</td>
                    </tr>
                    <tr>
                      <td>Profit Margin</td>
                      <td>{ new Intl.NumberFormat().format(Item.storeMargin)} gp</td>
                    </tr>
                    <tr>
                      <td>ROI</td>
                      <td>{ new Intl.NumberFormat().format(Item.storeROI)} %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="extra">
                {memberStatus}
                <div className="ui label">Avg Price: { new Intl.NumberFormat().format(Item.overall) } gp</div>
              </div>
            </div>
          </div>
          <div className="ui divider"></div>
        </div>
      )
    } 
    
    if(typeof Item.id === 'undefined' ){
      results = (<div>
      </div>);
    }

    return(
      <div>
        {results}
      </div>
    )
  }
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default WrappedApp;