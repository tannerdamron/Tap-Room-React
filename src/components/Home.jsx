import React from 'react';
import Header from './Header';
import NewKegControl from './NewKegControl';
import FilterKegsControl from './FilterKegsControl';

let allKegs = [
  {
    brewer: "Ninkasi",
    price: "$6",
    abv: "7.0%",
    pintsRemaining: 124,
    style: "Stout",
    id: 1
  },
  {
    brewer: "Tan",
    price: "$7",
    abv: "9.0%",
    pintsRemaining: 123,
    style: "Stout",
    id: 2
  },
  {
    brewer: "Space Dust IPA",
    price: "$5",
    abv: "8.20%",
    pintsRemaining: 122,
    style: "IPA",
    id: 3
  },
  {
    brewer: "Blue Dabadeedabadie",
    price: "$4",
    abv: "5.50%",
    pintsRemaining: 124,
    style: "Lager",
    id: 4
  },
  {
    brewer: "The Jam",
    price: "$25",
    abv: "21.0%",
    pintsRemaining: 124,
    style: "Stout",
    id: 5
  },
  {
    brewer: "Froth God",
    price: "$5",
    abv: "5.50%",
    pintsRemaining: 124,
    style: "IPA",
    id: 6
  },
  {
    brewer: "Logger",
    price: "$6",
    abv: "6.10%",
    pintsRemaining: 124,
    style: "Lager",
    id: 7
  }
];

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allKegsList: allKegs
    };
  }

  handleAddingNewKegToList(newKeg) {
    let newAllKegsList = this.state.allKegsList.slice();
    newAllKegsList.push(newKeg);
    this.setState({allKegsList: newAllKegsList});
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <style jsx>{`

        `}</style>
        <div>
          <Header />
          <NewKegControl onNewKegCreation={this.handleAddingNewKegToList.bind(this)}/>
          <FilterKegsControl allKegsList={this.state.allKegsList} />
        </div>
      </div>
    );
  }
}

export default Home;