import {
    dataStream,
    processStream
} from "../library/dataStream.js";

const stream = dataStream(10);

processStream(stream)
.catch(error => {

    console.error("Stream error:", error.message);
});