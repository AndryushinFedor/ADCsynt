import * as Tone from 'tone'

const samples = [
'samples/fastHeavy.mp3',
'samples/shortHeavy.mp3',
'samples/middleHeavy.mp3',
'samples/longHeavy.mp3',
'samples/slowHeavy.mp3',
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
