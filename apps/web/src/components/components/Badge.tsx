import { PreviewComponent, Preview, LocalCodeView } from "../PreviewComponent";
import { Badge } from "@pixkit/react";

export const BadgeComponent = () => {
    return (
        <div>
            <h1>Badge</h1>
            <p>Small status label in various variants.</p>
            <PreviewComponent>
                <Preview>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                    </div>
                </Preview>
                <LocalCodeView>
{`
import { Badge } from "@pixkit/react";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
`}
                </LocalCodeView>
            </PreviewComponent>
        </div>
    );
}
