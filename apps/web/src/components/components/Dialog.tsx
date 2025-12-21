import { PreviewComponent, Preview, LocalCodeView } from "../PreviewComponent";
import { Dialog, Button } from "@pixkit/react";

export const DialogComponent = () => {
    return (
        <div>
            <h1>Dialog</h1>
            <p>Modal dialog with overlay and composable sections.</p>
            <PreviewComponent>
                <Preview>
                    <Dialog>
                        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
                        <Dialog.Overlay />
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>PixKit Dialog</Dialog.Title>
                                <Dialog.Description>Use dialogs to confirm actions or display content.</Dialog.Description>
                            </Dialog.Header>
                            <p>Here is the dialog content area.</p>
                            <Dialog.Footer>
                                <Button variant="primary" onClick={() => { /* closed by overlay click */ }}>OK</Button>
                            </Dialog.Footer>
                        </Dialog.Content>
                    </Dialog>
                </Preview>
                <LocalCodeView>
{`
import { Dialog, Button } from "@pixkit/react";

<Dialog>
  <Dialog.Trigger>Open Dialog</Dialog.Trigger>
  <Dialog.Overlay />
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>PixKit Dialog</Dialog.Title>
      <Dialog.Description>Use dialogs to confirm actions.</Dialog.Description>
    </Dialog.Header>
    <Dialog.Footer>
      <Button variant="primary">OK</Button>
    </Dialog.Footer>
  </Dialog.Content>
 </Dialog>
`}
                </LocalCodeView>
            </PreviewComponent>
        </div>
    );
}
