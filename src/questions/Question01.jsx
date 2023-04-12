/*Build a React component which takes an image, image height and image width as props and sets the height and width of the image and displays the image on DOM. Image link - https://picsum.photos/200 */

export function ImageCard({ image, height, width }) {
  return (
    <div>
      <h1>Image</h1>
      <img src={image} height={height} width={width} />
    </div>
  );
}
