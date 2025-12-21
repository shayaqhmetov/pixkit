import { PreviewComponent, Preview, LocalCodeView } from "../PreviewComponent";
import { Avatar } from "@pixkit/react";

export const AvatarComponent = () => {
    return (
        <div>
            <h1>Avatar</h1>
            <p>User avatar with image and fallback.</p>
            <PreviewComponent>
                <Preview>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <Avatar>
                            <Avatar.Image src="https://picsum.photos/seed/pixkit/64" alt="avatar" />
                            <Avatar.Fallback>PK</Avatar.Fallback>
                        </Avatar>
                        <Avatar>
                            <Avatar.Fallback>AB</Avatar.Fallback>
                        </Avatar>
                    </div>
                </Preview>
                <LocalCodeView>
{`
import { Avatar } from "@pixkit/react";

<Avatar>
  <Avatar.Image src="https://picsum.photos/seed/pixkit/64" />
  <Avatar.Fallback>PK</Avatar.Fallback>
</Avatar>
`}
                </LocalCodeView>
            </PreviewComponent>
        </div>
    );
}
