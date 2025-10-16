import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger, CodeView } from "@pixkit/react";
import React from "react";

export const Preview: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => (
    <div className={`pix-preview ${className}`} {...props} >
        {props.children}
    </div>
);

export const LocalCodeView: React.FC<React.HTMLAttributes<HTMLPreElement>> = ({ className = '', ...props }) => (
    <pre className={`pix-code-view ${className}`} {...props} />
);


export const PreviewComponent = ({
    children
}: { children: ReactNode }) => {
    console.log({ children });
    let contents = React.Children.toArray(children).filter((child) => {
        if (React.isValidElement(child) && (child.type === Preview || child.type === LocalCodeView)) {
            return true;
        }
    });
    console.log({ contents });
    const codeViewChild = contents.find((child) => React.isValidElement(child) && child.type === LocalCodeView);
    const preview = contents.find((child) => React.isValidElement(child) && child.type === Preview);
    return (<Tabs defaultValue="preview" >
        <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
            {preview}
        </TabsContent>
        <TabsContent value="code">
            <LocalCodeView>
                {codeViewChild}
            </LocalCodeView>
        </TabsContent>
    </Tabs>);
};
