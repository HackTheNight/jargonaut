import React from 'react';
import GovukTableComponent from "../govuk-table";

const warnButton = {
  'background-color': '#b10e1e'
};

class DemoPage extends React.Component {
  render() {
    return (
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper govuk-main-wrapper--l" id="main-content" role="main">

          <div className="govuk-grid-row">

            <div className="govuk-grid-column-one-third">
              {/*<div className="govuk-form-group">*/}
              {/*<label className="govuk-label" htmlFor="name">Search</label>*/}
              {/*<input className="govuk-input" id="name" name="name" type="text"/>*/}
              {/*</div>*/}
              {/*<h2>Cat</h2>*/}
              {/*<ul>*/}
              {/*<li>sgfasshdh</li>*/}
              {/*<li>sgfasshdh</li>*/}
              {/*<li>sgfasshdh</li>*/}
              {/*<li>sgfasshdh</li>*/}
              {/*<li>sgfasshdh</li>*/}
              {/*</ul>*/}
              {/*<h2>Realted Tag</h2>*/}
              {/*<ul>*/}
              {/*<li>sgfasshdh</li>*/}
              {/*<li>sgfasshdh</li>*/}
              {/*<li>sgfasshdh</li>*/}
              {/*<li>sgfasshdh</li>*/}
              {/*<li>sgfasshdh</li>*/}
              {/*</ul>*/}
            </div>

            <div className="govuk-grid-column-two-thirds">
              <h1 className="govuk-heading-xl">Keep Your Code DRY</h1>
              {/*<div className="govuk-breadcrumbs">*/}
              {/*<ol className="govuk-breadcrumbs__list">*/}
              {/*<li className="govuk-breadcrumbs__list-item">*/}
              {/*<a className="govuk-breadcrumbs__link" href="#">Home</a>*/}
              {/*</li>*/}
              {/*<li className="govuk-breadcrumbs__list-item">*/}
              {/*<a className="govuk-breadcrumbs__link" href="#">Passports, travel and living abroad</a>*/}
              {/*</li>*/}
              {/*<li className="govuk-breadcrumbs__list-item" aria-current="page">Travel abroad</li>*/}
              {/*</ol>*/}
              {/*</div>*/}

              {/*<p className="govuk-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>*/}
              {/*<div className="govuk-inset-text">*/}
              {/*It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the*/}
              {/*application.*/}
              {/*</div>*/}


              {/*<div className="govuk-tabs" data-module="tabs">*/}
              {/*<h2 className="govuk-tabs__title">*/}
              {/*Contents*/}
              {/*</h2>*/}
              {/*<ul className="govuk-tabs__list">*/}
              {/*<li className="govuk-tabs__list-item">*/}
              {/*<a className="govuk-tabs__tab" href="#past-day">Pros</a>*/}
              {/*</li>*/}
              {/*<li className="govuk-tabs__list-item">*/}
              {/*<a className="govuk-tabs__tab" href="#past-week">Cons</a>*/}
              {/*</li>*/}
              {/*</ul>*/}
              {/*<section className="govuk-tabs__panel" id="past-day">*/}
              {/*<h2 className="govuk-heading-l">Pros</h2>*/}
              {/*</section>*/}
              {/*<section className="govuk-tabs__panel" id="past-week">*/}
              {/*<h2 className="govuk-heading-l">Cons</h2>*/}
              {/*</section>*/}
              {/*</div>*/}

              <GovukTableComponent />

              {/*<div className="govuk-grid-row">*/}
              {/*<div className="govuk-grid-column-one-half">*/}
              {/*<strong className="govuk-tag">alpha</strong>&nbsp;*/}
              {/*<strong className="govuk-tag">alpha</strong>&nbsp;*/}
              {/*<strong className="govuk-tag">alpha</strong>&nbsp;*/}
              {/*<strong className="govuk-tag">alpha</strong>&nbsp;*/}
              {/*</div>*/}
              {/*<div className="govuk-grid-column-one-half">*/}
              {/*<p>How do you rate this?</p>*/}
              {/*<button type="submit" className="govuk-button">+</button>&nbsp;Agree&nbsp;*/}
              {/*<button type="submit" className="govuk-button" style={warnButton}>-</button>&nbsp;Disagree&nbsp;*/}
              {/*<p>99% feedback agree</p>*/}
              {/*</div>*/}
              {/*</div>*/}
              {/*</div>*/}

            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default DemoPage;
