import { Tabs, TabsContent, TabsList, TabsTrigger } from "@pixkit/react"
export const PreviewComponent = () => {
    return (<div>
        <Tabs defaultValue="preview">
            <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
                <div>
                    {/* TODO: Need to add posibility of tabs inside another tabs */}
                    <h4>test</h4>
                    {/* <Tabs defaultValue="test">
                        <TabsList>
                            <TabsTrigger value="test">Test</TabsTrigger>
                            <TabsTrigger value="prod">Prod</TabsTrigger>
                        </TabsList>
                        <TabsContent value="test">
                            Password change form goes here.
                        </TabsContent>
                        <TabsContent value="prod">
                            Password change form goes here.
                        </TabsContent>
                    </Tabs> */}
                </div>
            </TabsContent>
            <TabsContent value="code">
                Password change form goes here.
            </TabsContent>
        </Tabs>
    </div>);
};