import React, { PureComponent } from 'react';

class Table extends PureComponent {

  render() {
    const { transactionsData } = this.props;
    const transactionView = transactionsData ? transactionsData.map((transaction, i) =>
      <tr key={transaction.timeStamp+i}>
        <td>{transaction.from}</td>
        <td>{transaction.to}</td>
        <td>{transaction.timeStamp}</td>
        <td>{transaction.value}</td>
      </tr>
    ) : <tr><td className="no__data">'No Data'</td></tr>;
    return (
        <div className="transaction__table">
            <div className="tbl__header">
            <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Timestamp</th>
                    <th>Value</th>
                </tr>
                </thead>
            </table>
            </div>
            <div className="tbl__content">
            <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                {transactionView}
                </tbody>
            </table>
            </div>
        </div>
    );
  }
}
export default Table;