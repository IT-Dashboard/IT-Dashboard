import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import Head from "next/head";

export default function Example1() {
  return (
    <div className="container">
      <Head>
        <title>Example Page | IT Dashboard</title>
      </Head>
      <h1>Example Page</h1>
      <div className="row align-items-start">
        <div className="col">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Example Tool Item One</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </CardText>
              <Button className="float-end">Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Example Tool Item Two</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </CardText>
              <Button className="float-end">Button</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
