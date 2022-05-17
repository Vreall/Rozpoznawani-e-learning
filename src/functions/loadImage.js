export const loadImage = (image) => {
    return new Promise((resolve, reject) => {
      const loadImg = new Image();
      loadImg.src = image;
      loadImg.onload = () => resolve(image);
      console.log(loadImg);
      loadImg.onerror = (err) => reject(err);
    });
  };