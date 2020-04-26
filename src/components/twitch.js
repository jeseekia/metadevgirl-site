import React,{Component} from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"


// class Twitch extends Component {

export default class Twitch extends React.Component {
  componentDidMount() {
    // set up and use external package as needed
    new Twitch.Embed("twitch-embed", {
      width: 854,
      height: 480,
      channel: "metadevgirl"
    });
  }
  render(props) {
    return (
      <React.Fragment>
        <Helmet>
          <script src="https://embed.twitch.tv/embed/v1.js"></script>
        </Helmet>
        <div id="twitch-embed"></div>
        {/* etc */}
      </React.Fragment>
    )
  }
};

// }
