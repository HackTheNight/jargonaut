import React, { Component } from 'react';

class GovukTableComponent extends Component {

  state = {
    classes: '',
    caption: 'Dates and amounts',
    firstCellIsHeader: true,
    head: [
      { text: 'Date' },
      { text: 'Amount' }
    ],
    rows: [
      [
        { text: 'First 6 weeks' },
        { text: '£109.80 per week' }
      ],
      [
        { text: 'Next 33 weeks' },
        { text: '£109.80 per week' }
      ],
      [
        { text: 'Total estimated pay'
        },
        { text: '£4,282.20' }
      ]
    ]
  };

  render() {
    let tableClasses = 'govuk-table';
    if (this.state.classes) {
      tableClasses += this.state.classes;
    }

    let tableHeader = this.state.head.map(h => <th class="govuk-table__header" scope="col">{h.text}</th>);

    let tableBody = this.state.rows.map(r =>
      <tr data-selector="table-row" class="govuk-table__row">
        {r.map(col =>
          (this.state.firstCellIsHeader) ? <th data-selector="table-header" className="govuk-table__header" scope="row">{col.text}</th> :
        <td data-selector="table-cell" className="govuk-table__cell">{col.text}</td>
        )}
      </tr>
    );

    return (
      <table className={tableClasses}>
        <caption className="govuk-table__caption">{this.state.caption}</caption>
        <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          {tableHeader}
        </tr>
        </thead>
        <tbody className="govuk-table__body">
        {tableBody}
        </tbody>
      </table>
    );
  }
}

export default GovukTableComponent;
