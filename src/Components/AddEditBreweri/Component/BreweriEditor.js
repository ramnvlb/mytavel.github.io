import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import './BreweriEditor.css';




class BreweriEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    const contentState = editorState.getCurrentContent();
    console.log(convertToRaw(contentState));
    return (
      <div>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            className="custome-editior"
            placeholder="Type here (max 2000 characters)"
            onEditorStateChange={this.onEditorStateChange}
          />
          {/*   <div>
                <textarea
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                className="raw-data"
              />
            </div>
          */}

      </div>
    )
  }
}
export default BreweriEditor;
