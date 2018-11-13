const { spawn, exec } = require("child-process-promise");
var fs = require("fs");

const videoCambio = {};

const ensurePath = async outputPath => {
  try {
    const folderPath = outputPath.split("/");
    if (folderPath.length !== 1) {
      folderPath.pop();
      const strPath = folderPath.join("/");
      if (!fs.existsSync(strPath)) {
        await exec(`mkdir -p ${strPath}`);
      }
    }
    return;
  } catch (err) {
    throw new Error(err);
  }
};

const streamProcess = promise =>
  new Promise((resolve, reject) => {
    const childProcess = promise.childProcess;

    console.log("childProcess.pid: ", childProcess.pid);
    childProcess.stdout.on("data", function(data) {
      console.log(data.toString());
    });
    childProcess.stderr.on("data", function(data) {
      console.log(data.toString());
    });
    childProcess.on("exit", function(code) {
      console.log("child process exited with code " + code);
    });

    promise
      .then(function() {
        resolve();
      })
      .catch(function(err) {
        reject(err);
      });
  });

videoCambio.glow = (inputVid, outputPath = "output.mp4") => {
  return new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-vf",
        "frei0r=glow:0.5",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.sepia = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-filter_complex",
        "colorchannelmixer=.393:.769:.189:0:.349:.686:.168:0:.272:.534:.131",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.bAndWhite = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-vf",
        "hue=s=0",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.vertigo = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-vf",
        "frei0r=vertigo:0.2",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.sobel = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-vf",
        "frei0r=sobel",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.vignette = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-vf",
        "frei0r=vignette",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.pixeliz0r = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-vf",
        "frei0r=pixeliz0r",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.invert0r = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-vf",
        "frei0r=invert0r",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.rbgNoise = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-vf",
        "frei0r=rgbnoise:0.8",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.distort0r = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-vf",
        "frei0r='distort0r:0.1|0.01'",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.blur = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-vf",
        "frei0r=iirblur",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.nervous = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-vf",
        "frei0r=nervous",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.reverse = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-vf",
        "reverse",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.slowdown = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-filter:v",
        "setpts=2.0*PTS",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

videoCambio.speedup = (inputVid, outputPath = "output.mp4") => {
  new Promise(async (resolve, reject) => {
    try {
      await ensurePath(outputPath);
      const promise = spawn("ffmpeg", [
        "-y",
        "-i",
        inputVid,
        "-filter:v",
        "setpts=0.5*PTS",
        outputPath
      ]);
      await streamProcess(promise);
      resolve();
    } catch (err) {
      reject(Error(err));
    }
  });
};

module.exports = videoCambio;
