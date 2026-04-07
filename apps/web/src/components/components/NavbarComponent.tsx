import { PreviewComponent, Preview, LocalCodeView } from "../PreviewComponent";
import { Navbar, Button } from "@pixkit/react";

export const NavbarComponent = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <p>A horizontal navigation bar with brand, links, and actions areas.</p>

            <h2>Default</h2>
            <PreviewComponent>
                <Preview>
                    <Navbar>
                        <Navbar.Brand href="#">⚔️ PixKit</Navbar.Brand>
                        <Navbar.Links>
                            <Navbar.Link href="#" active>Home</Navbar.Link>
                            <Navbar.Link href="#">Components</Navbar.Link>
                            <Navbar.Link href="#">Docs</Navbar.Link>
                        </Navbar.Links>
                        <Navbar.Actions>
                            <Button variant="primary">Get Started</Button>
                        </Navbar.Actions>
                    </Navbar>
                </Preview>
                <LocalCodeView>
{`import { Navbar, Button } from "@pixkit/react";

<Navbar>
  <Navbar.Brand href="#">⚔️ PixKit</Navbar.Brand>
  <Navbar.Links>
    <Navbar.Link href="#" active>Home</Navbar.Link>
    <Navbar.Link href="#">Components</Navbar.Link>
    <Navbar.Link href="#">Docs</Navbar.Link>
  </Navbar.Links>
  <Navbar.Actions>
    <Button variant="primary">Get Started</Button>
  </Navbar.Actions>
</Navbar>`}
                </LocalCodeView>
            </PreviewComponent>

            <h2>Transparent</h2>
            <PreviewComponent>
                <Preview>
                    <div style={{ background: 'linear-gradient(135deg, #1b1e2b, #24283b)', padding: 0 }}>
                        <Navbar transparent>
                            <Navbar.Brand href="#">🎮 PixKit</Navbar.Brand>
                            <Navbar.Links>
                                <Navbar.Link href="#">Home</Navbar.Link>
                                <Navbar.Link href="#" active>Gallery</Navbar.Link>
                                <Navbar.Link href="#">About</Navbar.Link>
                            </Navbar.Links>
                        </Navbar>
                    </div>
                </Preview>
                <LocalCodeView>
{`<Navbar transparent>
  <Navbar.Brand href="#">🎮 PixKit</Navbar.Brand>
  <Navbar.Links>
    <Navbar.Link href="#">Home</Navbar.Link>
    <Navbar.Link href="#" active>Gallery</Navbar.Link>
    <Navbar.Link href="#">About</Navbar.Link>
  </Navbar.Links>
</Navbar>`}
                </LocalCodeView>
            </PreviewComponent>
        </div>
    );
};
