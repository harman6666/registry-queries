import React, { PureComponent } from 'react';
import Api from '@parity/api';
import etherscan from '@parity/etherscan';
import { Abi } from './nameRegistryAbi';
import Table from './Table';

class Lookup extends PureComponent {
  constructor(props) {
    super(props);
    this.loader = React.createRef();
    this.inputVal = React.createRef();
    this.state = {
      addressData: null,
      transactionsData: null,
      balanceData: null
    };
  }
  componentDidMount() {
    const apiKey = '347390aebd9e41e9adb258fc036629f2';
    const provider = new Api.Provider.Http('https://kovan.infura.io/'+apiKey);
    this.api = new Api(provider);
  };

  getData = (evt) => {
    const regex = /^0x([A-Fa-f0-9]{40})$/g;
    const node = this.loader.current;
    const value = this.inputVal.current.value;
    if(regex.test(value) && (evt.keyCode === 13 || evt.type === 'click')) {
      this.setState({addressData: value});
      node.classList.add('active');
      this.getTransaction(node, value);
      return;
    } 
    if(evt.type === 'click' || (evt.type === 'keydown' && evt.keyCode === 13)) {
      const address = '0xfAb104398BBefbd47752E7702D9fE23047E1Bca3';
      const contract = this.api.newContract(Abi, address);
      node.classList.add('active');
      contract.instance.getAddress.call({}, [this.api.util.sha3(value), 'A']).then((result) => {
        this.setState({addressData: result});
        if(!(/^0x([0]{40})$/g.test(result))) {
          this.getTransaction(node, result);
        } else {
          node.classList.remove('active');
          this.setState({transactionsData: null, balanceData: null});
        }
      }).catch((err) => {
        node.classList.remove('active');
        console.error(err);
      });
    }
  }

  getTransaction = (node, address) => {
    Promise
      .all([
      etherscan.account.transactions(address),
      etherscan.account.balance(address)
    ])
    .then(([transactions, balanceRes]) => {
      node.classList.remove('active');
      const balance = balanceRes.balance; 
      const unitOrder = Math.floor(Math.log(balance) / Math.log(1000));
		  const balanceNum = (balance / 1000 ** unitOrder)
      this.setState({transactionsData: transactions, balanceData: balanceNum});
    }).catch((err) => {
      node.classList.remove('active');
      console.error(err);
    });
  }

  render() {
    const { transactionsData, addressData, balanceData } = this.state;
    return (
      <section className="search__container">
        <div className="loader" ref={this.loader}></div>
        <div className="header__text header">
          Name or (Ethereum)Address search application.
        </div>
        <div className="search">
          <input type="text" className="search__input" placeholder="Enter value" 
          ref={this.inputVal} onKeyDown={this.getData} />
          <img src="https://png.icons8.com/material-outlined/50/969090/search.png" 
          className="search__icon" alt="search" />
          <button className="submit__btn" onClick={this.getData}>Submit</button>
        </div>
        <div className="search__result--header">Your Result is:</div>
        <div className="search__result">
          <div className="address"> Address: {addressData ? addressData : 'Null'}</div>
          <div className="balance"> Total Balance: {balanceData ? balanceData : 'No'} Ether</div>
          <div className="tbl-header">
            <div className="transaction__table">
                <Table transactionsData={transactionsData} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Lookup;