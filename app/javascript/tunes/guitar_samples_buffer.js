import * as Tone from 'tone'

const samples = [
'samples/fastGuitar.mp3',
'samples/shortGuitar.mp3',
'samples/middleGuitar.mp3',
'samples/longGuitar.mp3',
'samples/slowGuitar.mp3',
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
