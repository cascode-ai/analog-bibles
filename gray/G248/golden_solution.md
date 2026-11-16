# Golden Solution - G248

## Reference answer

- $S_o$: follows $\approx 10\,S_i$ until $|S_i| = 1.50054$ V, then is clipped flat at ±15 V. Clipping starts at $\omega t = \arcsin(1.50054/2) = 48.6°$ and ends at 131.4° in each half cycle (flat tops for about 83° of every 180°).
- $S_\epsilon$: while the amplifier is not saturated it is the same small waveform as for a smaller input (≤ 0.54 mV, with a kink at 0.14 mV). During clipping the loop is broken ($a_3 = 0$), so $S_\epsilon = S_i - fS_o = S_i - 1.5$ V: it jumps to large pulses that follow the top of the input sinusoid, reaching $2 - 1.5 = 0.5$ V at the input peak (about 1000 times the unsaturated error). The waveform is a train of positive and negative "cap" pulses of 0.5 V peak centred on the input peaks, with sub-millivolt values in between.

## Grading notes

+2: output clipped at ±15 V starting at $|S_i| \approx 1.5$ V (angles ≈ 49° to 131° or an equivalent statement), error ≤ 0.54 mV in the linear part and rising to ≈ 0.5 V peaks during clipping. +1: correct waveforms with the clipping interval not quantified or a small numerical slip. 0: output right but the error waveform during clipping missing. −2 (asserted as fact): output not clipped, clipping at the wrong level, or the error claimed to stay in the millivolt range during clipping.
