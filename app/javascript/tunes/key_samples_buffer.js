import * as Tone from 'tone'

const samples = [
'samples/fastKey.mp3',
'samples/shortKey.mp3',
'samples/middleKey.mp3',
'samples/longKey.mp3',
'samples/slowKey.mp3',
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
