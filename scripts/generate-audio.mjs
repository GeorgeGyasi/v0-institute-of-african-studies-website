// Generates 10-second percussion WAV files (pure Node, no dependencies).
// Evokes Ghanaian drum-ensemble textures for the Nketia Archives demo player.
import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const SR = 44100
const DUR = 10
const N = SR * DUR

function env(t, attack, decay) {
  if (t < attack) return t / attack
  return Math.max(0, Math.exp(-(t - attack) / decay))
}

// A single drum hit written additively into the buffer at sample offset.
function hit(buf, offset, { freq, decay = 0.18, amp = 0.5, noise = 0 }) {
  const len = Math.floor(SR * (decay * 4 + 0.02))
  for (let i = 0; i < len && offset + i < buf.length; i++) {
    const t = i / SR
    const e = env(t, 0.002, decay)
    // pitch drops slightly over the hit for a natural membrane feel
    const f = freq * (1 - 0.15 * Math.min(1, t / decay))
    let s = Math.sin(2 * Math.PI * f * t) * (1 - noise)
    if (noise > 0) s += (Math.random() * 2 - 1) * noise
    buf[offset + i] += s * e * amp
  }
}

function render({ bpm, pattern, seedFreqs, swing = 0 }) {
  const buf = new Float32Array(N)
  const beat = 60 / bpm
  const step = beat / 2 // eighth notes
  const steps = Math.floor(DUR / step)
  for (let s = 0; s < steps; s++) {
    const swingOffset = s % 2 === 1 ? swing * step : 0
    const t = s * step + swingOffset
    const offset = Math.floor(t * SR)
    const cell = pattern[s % pattern.length]
    for (const voice of cell) {
      hit(buf, offset, { ...seedFreqs[voice.v], amp: voice.a ?? seedFreqs[voice.v].amp })
    }
  }
  // gentle master shaping: normalize + soft clip
  let peak = 0
  for (let i = 0; i < N; i++) peak = Math.max(peak, Math.abs(buf[i]))
  const g = peak > 0 ? 0.85 / peak : 1
  for (let i = 0; i < N; i++) {
    const x = buf[i] * g
    buf[i] = Math.tanh(x * 1.2)
  }
  return buf
}

function toWav(float32) {
  const bytesPerSample = 2
  const dataSize = float32.length * bytesPerSample
  const buffer = Buffer.alloc(44 + dataSize)
  buffer.write("RIFF", 0)
  buffer.writeUInt32LE(36 + dataSize, 4)
  buffer.write("WAVE", 8)
  buffer.write("fmt ", 12)
  buffer.writeUInt32LE(16, 16)
  buffer.writeUInt16LE(1, 20) // PCM
  buffer.writeUInt16LE(1, 22) // mono
  buffer.writeUInt32LE(SR, 24)
  buffer.writeUInt32LE(SR * bytesPerSample, 28)
  buffer.writeUInt16LE(bytesPerSample, 32)
  buffer.writeUInt16LE(16, 34)
  buffer.write("data", 36)
  buffer.writeUInt32LE(dataSize, 40)
  for (let i = 0; i < float32.length; i++) {
    const s = Math.max(-1, Math.min(1, float32[i]))
    buffer.writeInt16LE(Math.round(s * 32767), 44 + i * bytesPerSample)
  }
  return buffer
}

// Voice palette
const voices = {
  boom: { freq: 92, decay: 0.28, amp: 0.9 }, // low master drum
  mid: { freq: 190, decay: 0.16, amp: 0.6 }, // supporting drum
  high: { freq: 320, decay: 0.09, amp: 0.5 }, // response drum
  slap: { freq: 480, decay: 0.05, amp: 0.45, noise: 0.5 }, // hand slap
  bell: { freq: 720, decay: 0.12, amp: 0.35 }, // gankogui bell
}

// Each track: distinct tempo + bell timeline + drum conversation
const B = [{ v: "bell", a: 0.3 }]
const tracks = {
  "adowa": {
    bpm: 104,
    swing: 0.12,
    seedFreqs: voices,
    pattern: [
      [{ v: "boom" }, ...B],
      [{ v: "high" }],
      [{ v: "mid" }, ...B],
      [{ v: "slap" }],
      [{ v: "boom" }],
      [...B],
      [{ v: "mid" }, { v: "high" }],
      [{ v: "slap" }],
    ],
  },
  "fontomfrom": {
    bpm: 88,
    seedFreqs: voices,
    pattern: [
      [{ v: "boom", a: 1.0 }, ...B],
      [],
      [{ v: "mid" }],
      [...B],
      [{ v: "boom" }],
      [{ v: "high" }],
      [{ v: "mid" }, ...B],
      [],
    ],
  },
  "anansesem": {
    bpm: 120,
    swing: 0.15,
    seedFreqs: voices,
    pattern: [
      [{ v: "slap" }, ...B],
      [{ v: "high" }],
      [{ v: "slap" }],
      [{ v: "mid" }, ...B],
      [{ v: "high" }],
      [{ v: "slap" }],
      [{ v: "boom" }, ...B],
      [{ v: "high" }],
    ],
  },
  "konkomba": {
    bpm: 132,
    seedFreqs: voices,
    pattern: [
      [{ v: "boom" }, ...B],
      [{ v: "high" }],
      [{ v: "high" }],
      [{ v: "mid" }, ...B],
      [{ v: "slap" }],
      [{ v: "high" }],
      [{ v: "boom" }, ...B],
      [{ v: "slap" }],
    ],
  },
  "highlife": {
    bpm: 112,
    swing: 0.1,
    seedFreqs: voices,
    pattern: [
      [{ v: "boom" }, ...B],
      [{ v: "high" }],
      [{ v: "mid" }],
      [{ v: "slap" }, ...B],
      [{ v: "boom" }],
      [{ v: "high" }],
      [{ v: "mid" }, ...B],
      [{ v: "slap" }],
    ],
  },
}

const outDir = join(process.cwd(), "public", "audio")
mkdirSync(outDir, { recursive: true })
for (const [name, cfg] of Object.entries(tracks)) {
  const wav = toWav(render(cfg))
  const path = join(outDir, `nketia-${name}.wav`)
  writeFileSync(path, wav)
  console.log("wrote", path, (wav.length / 1024).toFixed(0) + "KB")
}
console.log("done")
