const fs = require('fs');
const convert = require('heic-convert');

const convertHeicImageIntoJpeg = async (pathToFile) => {
  const OUTPUT_FORMAT = 'JPEG'
  const heicFileAsBuffer = await  fs.readFileSync(pathToFile);
  const outputBuffer = await convert({
    buffer: heicFileAsBuffer,
    format: OUTPUT_FORMAT,
    quality: 1           // the jpeg compression quality, between 0 and 1
  });

  await fs.writeFileSync(`${__dirname}/result.jpeg`, outputBuffer);
};

it('foo', async () => {
  await convertHeicImageIntoJpeg(`${__dirname}/keyboard.HEIC`)
})