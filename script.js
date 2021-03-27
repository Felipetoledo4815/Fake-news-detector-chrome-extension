// require('onnxjs');
const onnx = require('onnxjs-node');

const myOnnxSession = new onnx.InferenceSession();
myOnnxSession.loadModel("./model/pipeline.onnx").then(() => {
    // generate model input
    const input = new onnx.Tensor(["asdasd"], 'string');
    console.log(input)
    // execute the model
    myOnnxSession.run(input).then((output) => {
      // consume the output
      const outputTensor = output.values().next().value;
      console.log(`model output tensor: ${outputTensor.data}.`);
    });
});
