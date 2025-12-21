import { PreviewComponent, Preview, LocalCodeView } from "../PreviewComponent";
import { Separator } from "@pixkit/react";

export const SeparatorComponent = () => {
    return (
        <div>
            <h1>Separator</h1>
            <p>Visual divider to group content.</p>
            <PreviewComponent>
                <Preview>
                    <div style={{ display: 'grid', gap: 12 }}>
                        <Separator />
                        <div style={{ display: 'flex', gap: 12 }}>
                            <div>Left</div>
                            <Separator orientation="vertical" />
                            <div>Right</div>
                        </div>
                    </div>
                </Preview>
                <LocalCodeView>
{`
import { Separator } from "@pixkit/react";
<Separator />
<Separator orientation="vertical" />
`}
                </LocalCodeView>
            </PreviewComponent>
        </div>
    );
}
