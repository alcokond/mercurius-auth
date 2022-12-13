import React, { Component } from 'react';

class CodeBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set the initial active tab to "code"
      activeTab: "component"
    };
  }

  render() {
    // Destructure the props to make them easier to use
    const { component, htmlCode } = this.props;

    // Destructure the state to make it easier to use
    const { activeTab } = this.state;

    return (
      <div>
        {/* Render the tabs for switching between the code and the component */}
        <div>
          <button onClick={() => this.setState({ activeTab: "code" })}>Code</button>
          <button onClick={() => this.setState({ activeTab: "component" })}>Component</button>
        </div>

        {/* Render the code or the component, depending on the active tab */}
        {activeTab === "code" ? (
          <div>
            {/* Render the HTML code */}
            <pre>{htmlCode}</pre>

            {/* Render a "Copy" button that uses the clipboard API to copy the code to the clipboard when clicked */}
            <button onClick={() => navigator.clipboard.writeText(htmlCode)}>Copy</button>
          </div>
        ) : (
          <div>
            {/* Render the given component */}
            {component}
          </div>
        )}
      </div>
    );
  }
}
export default CodeBox;
