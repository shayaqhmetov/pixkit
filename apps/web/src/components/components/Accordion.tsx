import { PreviewComponent, Preview, LocalCodeView } from "../PreviewComponent";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "@pixkit/react";

export const AccordionComponent = () => {
    return (<div>
        <h1>Accordion Component</h1>
        <p>This is the content of the Accordion component.</p>
        <PreviewComponent>
            <Preview>
                <Accordion defaultValue="item-1">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Item 1</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                This is the content for Item 1. You can put any React nodes here, including text, images, or other components.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Item 2</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                This is the content for Item 2. You can put any React nodes here, including text, images, or other components.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Preview>
            <LocalCodeView>
                {
`import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "@pixkit/react";
 
<Accordion defaultValue="item-1">
    <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
            <p>
                This is the content for Item 1. You can put any React nodes here, including text, images, or other components.
            </p>
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
            <p>
                This is the content for Item 2. You can put any React nodes here, including text, images, or other components.
            </p>
        </AccordionContent>
    </AccordionItem>
</Accordion>
`
                }
            </LocalCodeView>
        </PreviewComponent>
    </div>);
}