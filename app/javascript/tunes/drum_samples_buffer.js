import * as Tone from 'tone'

const samples = [
 'samples/fastDrum.mp3',
 'samples/shortDrum.mp3',
 'samples/middleDrum.mp3',
 'samples/longDrum.mp3',
 'samples/slowDrum.mp3'
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
