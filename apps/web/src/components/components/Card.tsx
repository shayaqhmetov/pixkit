import { PreviewComponent, Preview, LocalCodeView } from "../PreviewComponent";
import { Card, Button } from "@pixkit/react";

export const CardComponent = () => {
    return (<div>
        <h1>Card Component</h1>
        <p>A flexible card component with composable sub-components.</p>
        
        <h2>Basic Card</h2>
        <PreviewComponent>
            <Preview>
                <Card>
                    <Card.Header>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Description>Card description goes here</Card.Description>
                    </Card.Header>
                    <Card.Content>
                        <p>This is the main content of the card. You can put any content here.</p>
                    </Card.Content>
                    <Card.Footer>
                        <Button variant="primary">Action</Button>
                        <Button variant="default">Cancel</Button>
                    </Card.Footer>
                </Card>
            </Preview>
            <LocalCodeView>
                {
`import { Card, Button } from "@pixkit/react";

<Card>
    <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card description goes here</Card.Description>
    </Card.Header>
    <Card.Content>
        <p>This is the main content of the card.</p>
    </Card.Content>
    <Card.Footer>
        <Button variant="primary">Action</Button>
        <Button variant="default">Cancel</Button>
    </Card.Footer>
</Card>
`
                }
            </LocalCodeView>
        </PreviewComponent>

        <h2>Simple Card</h2>
        <PreviewComponent>
            <Preview>
                <Card>
                    <Card.Content>
                        <h4>Simple Card</h4>
                        <p>A card with just content, no header or footer.</p>
                    </Card.Content>
                </Card>
            </Preview>
            <LocalCodeView>
                {
`import { Card } from "@pixkit/react";

<Card>
    <Card.Content>
        <h4>Simple Card</h4>
        <p>A card with just content, no header or footer.</p>
    </Card.Content>
</Card>
`
                }
            </LocalCodeView>
        </PreviewComponent>

        <h2>Card Grid</h2>
        <PreviewComponent>
            <Preview>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '16px' 
                }}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Feature 1</Card.Title>
                            <Card.Description>Description for feature 1</Card.Description>
                        </Card.Header>
                        <Card.Content>
                            <p>Content for the first feature card.</p>
                        </Card.Content>
                    </Card>
                    
                    <Card>
                        <Card.Header>
                            <Card.Title>Feature 2</Card.Title>
                            <Card.Description>Description for feature 2</Card.Description>
                        </Card.Header>
                        <Card.Content>
                            <p>Content for the second feature card.</p>
                        </Card.Content>
                    </Card>
                    
                    <Card>
                        <Card.Header>
                            <Card.Title>Feature 3</Card.Title>
                            <Card.Description>Description for feature 3</Card.Description>
                        </Card.Header>
                        <Card.Content>
                            <p>Content for the third feature card.</p>
                        </Card.Content>
                    </Card>
                </div>
            </Preview>
            <LocalCodeView>
                {
`import { Card } from "@pixkit/react";

<div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '16px' 
}}>
    <Card>
        <Card.Header>
            <Card.Title>Feature 1</Card.Title>
            <Card.Description>Description</Card.Description>
        </Card.Header>
        <Card.Content>
            <p>Content here</p>
        </Card.Content>
    </Card>
    
    <Card>
        <Card.Header>
            <Card.Title>Feature 2</Card.Title>
            <Card.Description>Description</Card.Description>
        </Card.Header>
        <Card.Content>
            <p>Content here</p>
        </Card.Content>
    </Card>
</div>
`
                }
            </LocalCodeView>
        </PreviewComponent>
    </div>);
}