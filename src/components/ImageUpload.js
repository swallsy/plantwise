import React, { Component } from 'react';
import '../App.css';
import AddPlants from './AddPlants.js';

// import * as firebase from 'firebase';
// import { database } from '../App.js';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    }
  };

  handleImageChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    this.props.passThroughImage(file);
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
       $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
       $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
      <div className="plant-upload">
        <div className="upload-area">
          <label>Upload a Picture</label>
          <input
            name="plantPicture"
            type="file"
            onChange={ this.handleImageChange }/>
        </div>
        <div className="image-preview">
          {$imagePreview}
        </div>

      </div>
    )
  };
}

export default ImageUpload;
