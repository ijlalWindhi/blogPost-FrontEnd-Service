import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Container, Text } from "@chakra-ui/react";

const config = {
    buttons: ["bold", "italic", "underline"],
};

const RichTextEditor = ({ initialValue }) => {
    const editor = useRef(null);
    const [value, setValue] = useState(initialValue);

    const getValue = (value) => {
        setValue(value);
    };

    return (
        <Container py={28} maxW={"80%"}>
            <JoditEditor
                ref={editor}
                value={initialValue}
                config={config}
                tabIndex={1}
                onChange={(newContent) => getValue(newContent)}
            />
        </Container>
    );
};

export default RichTextEditor;

// import React, { useState } from "react";
// import { EditorState, Editor } from "draft-js";

// const RichTextEditor = () => {
//     const [editorState, setEditorState] = useState(EditorState.createEmpty());

//     const onChange = (editorState) => {
//         setEditorState(editorState);
//     };
//     return <Editor editorState={editorState} onChange={onChange} />;
// };

// export default RichTextEditor;
