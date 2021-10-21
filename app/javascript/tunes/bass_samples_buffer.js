import * as Tone from 'tone'

const samples = [
 'samples/fastBass.mp3',
 'samples/shortBass.mp3',
 'samples/middleBass.mp3',
 'samples/longBass.mp3',
 'samples/slowBass.mp3',

]

function createBuffer(path) {
  const sample = new Tone.Buffer(path, () => {
    const buff = sample.get()
  })

  return sample
}

function loadSamples() {
  const loadedSamples = []

  samples.forEach((path, i) => {
    const loadedSample = createBuffer(path)
    loadedSamples.push(loadedSample)
  })

  return loadedSamples
}

export { loadSamples }
