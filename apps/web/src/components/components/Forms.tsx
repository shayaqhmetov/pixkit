import { PreviewComponent, Preview, LocalCodeView } from "../PreviewComponent";
import { Input, Textarea, Checkbox, Switch } from "@pixkit/react";

export const FormsComponent = () => {
    return (
        <div>
            <h1>Forms</h1>
            <p>Basic inputs consistent with PixKit styling.</p>
            <h2>Input</h2>
            <PreviewComponent>
                <Preview>
                    <div style={{ display: 'grid', gap: 12 }}>
                        <Input placeholder="Default input" />
                        <Input size="sm" placeholder="Small input" />
                        <Input size="lg" placeholder="Large input" />
                    </div>
                </Preview>
                <LocalCodeView>
{`
import { Input } from "@pixkit/react";
<Input placeholder="Default input" />
<Input size="sm" placeholder="Small input" />
<Input size="lg" placeholder="Large input" />
`}
                </LocalCodeView>
            </PreviewComponent>

            <h2>Textarea</h2>
            <PreviewComponent>
                <Preview>
                    <div style={{ display: 'grid', gap: 12 }}>
                        <Textarea placeholder="Write something..." />
                        <Textarea size="lg" placeholder="Large textarea" />
                    </div>
                </Preview>
                <LocalCodeView>
{`
import { Textarea } from "@pixkit/react";
<Textarea placeholder="Write something..." />
<Textarea size="lg" placeholder="Large textarea" />
`}
                </LocalCodeView>
            </PreviewComponent>

            <h2>Checkbox & Switch</h2>
            <PreviewComponent>
                <Preview>
                    <div style={{ display: 'grid', gap: 12 }}>
                        <Checkbox label="Accept terms" defaultChecked />
                        <Switch label="Enable notifications" />
                    </div>
                </Preview>
                <LocalCodeView>
{`
import { Checkbox, Switch } from "@pixkit/react";
<Checkbox label="Accept terms" defaultChecked />
<Switch label="Enable notifications" />
`}
                </LocalCodeView>
            </PreviewComponent>
        </div>
    );
}
