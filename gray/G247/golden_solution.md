# Golden Solution - G247

## Reference answer

- $S_o$: an almost perfect sinusoid of amplitude ≈ 14.995 V (gain ≈ 10); no clipping, because the input peak 1.5 V is just below the clipping input level 1.50054 V. The slope change at $|S_o| = 7$ V (at $|S_i| = 0.70014$ V) is invisible (closed-loop slopes 9.998 and 9.995).
- $S_\epsilon$: a distorted, sine-like waveform with peak ≈ 0.54 mV. For $|S_i| < 0.70014$ V it is $S_i/5001$ (reaching 0.14 mV when $|S_o| = 7$ V); beyond that it follows $S_\epsilon = (|S_i| - 0.42\text{ V})/2001$, i.e., the slope versus $S_i$ is 2.5 times steeper, so the tops of the waveform are "peaked": it rises from 0.14 mV to 0.54 mV over the top part of each half cycle. The error is in phase with the input.

Derivation: $S_\epsilon = S_o/a$ in each region; in region 2, $S_o = 7 + a_2(S_\epsilon - 0.14\text{ mV})$ and $S_i = S_\epsilon + fS_o$ give $S_\epsilon = (S_i - 0.42)/2001$; at $S_i = 1.5$ V, $S_\epsilon = 0.5397$ mV and $S_o = 7 + 20{,}000(0.5397 - 0.14)\times10^{-3} = 14.995$ V.

## Grading notes

+2: output an essentially undistorted sinusoid with peak ≈ 15 V (14.99–15.0 V) and no clipping; error waveform with a kink at ±0.14 mV (when $|S_o| = 7$ V) and peak ≈ 0.54 mV, steeper near the peaks. +1: both waveforms right in shape with one value slightly off, or the error peak right but the kink not described. 0: output right but the error waveform missing or described only as "small". −2 (asserted as fact): output clipped at ±15 V for this amplitude, error waveform of the order of volts, or error shown as a pure scaled sinusoid with a wrong peak value by orders of magnitude.
