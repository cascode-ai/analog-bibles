# Golden Solution - A486

## Reference answer

Ideal: $v_{OUT} = 0.6016$ V ($= 77/128$ V). With 0.55: $v_{OUT} \approx 0.557$ V.

Derivation: after the word has passed through all stages, $v_{OUT} = V_{REF}\sum_{i=0}^{N-1} b_i k^i$ with $k$ the attenuation factor (the factor in front of the first stage multiplies 0).
- Bits 1,0,1,0,0,1,1,0 → $b_i$ = +1, −1, +1, −1, −1, +1, +1, −1.
- $k = 0.5$: $1 - 0.5 + 0.25 - 0.125 - 0.0625 + 0.03125 + 0.015625 - 0.0078125 = 0.6015625$ V.
- $k = 0.55$: $1 - 0.55 + 0.3025 - 0.16638 - 0.09151 + 0.05033 + 0.02768 - 0.01522 = 0.5574$ V (an error of −0.044 V, about −2.8 LSB, since adjacent output levels of this 8-bit converter are 2/128 V = 15.6 mV apart).

## Grading notes

+2: 0.6016 V and ≈ 0.557 V (±0.002 V), with the ±1 bit mapping. +1: correct ideal value and correct method for 0.55 with an arithmetic slip, or one value correct with the other's method right. 0: unipolar (0/1) bits used consistently (giving 1.297 V ideal) with otherwise correct structure. −2 (asserted as fact): 0.3066 V for the 0.55 case (an extra factor of 0.55), bit order reversed (LSB given weight 1), or 0.55 applied only to some stages.
