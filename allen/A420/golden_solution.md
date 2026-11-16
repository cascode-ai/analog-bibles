# Golden Solution - A420

## Reference answer

SNR ≈ 48.0 dB.

- LSB = 5 V/2^10 = 4.883 mV; rms quantization noise = LSB/√12 = 1.410 mV.
- Signal rms = (1 V/2)/√2 = 0.354 V.
- SNR = 0.354/1.410×10⁻³ = 251 → 20 log₁₀(251) = 48.0 dB.
- Equivalently: a full-scale (5 V p-p) sine would give 6.02N + 1.76 = 61.96 dB; the 1 V p-p signal is 20 log₁₀(5) = 13.98 dB smaller, giving 47.98 dB.

## Grading notes

+2: 48.0 dB (±0.3 dB) with quantization noise LSB/√12 and the signal rms of a 1 V p-p sine. +1: correct value with an unclear or partly inconsistent explanation. 0: right method with an arithmetic slip. −2 (asserted as fact): 54 dB (1 V treated as the amplitude), 62 dB (full-scale formula without the amplitude reduction), or noise rms taken as 1 LSB or LSB/2.
