# Golden Solution - alsim-07-1-04

## Reference answer

Expected behaviour (hand estimates; exact THD values depend on the chosen input-stage sizes):
- Quiescent point: the loop sets $v_{in}'$ near $V_{SS}$ + 0.93 V, where the crossover inverters leave M5 and M6 just at the edge of conduction (dead band of a few mV to ≈ 0.1 V at $v_{in}'$), so the output stage is essentially class B and the quiescent output current is small.
- Small amplitudes: crossover distortion dominates. The error is a roughly fixed voltage step around zero crossing, suppressed by the loop gain at 1 kHz (open-loop gain several thousand, unity-gain bandwidth of a few hundred kHz, so the loop gain at 1 kHz is ≈ 40–50 dB); as a fraction of the signal it falls as the amplitude grows, so THD decreases with increasing output (≈ $1/V_{out}$ trend).
- Mid range: THD low and fairly flat (of order 0.01–0.1%).
- Large amplitudes: the output into 100 Ω is limited by the triode resistance of M5/M6 and the inverter drive to roughly ±4 V peak (≈ 8 Vpp, ≈ 2.8 V rms); approaching this, THD rises steeply (clipping).
- With only 20 µA in the input stage its slew rate into $C_1$/$C_2$ is a few V/µs, ample at 1 kHz, so slewing does not contribute.

## Grading notes

A correct simulation states the input-stage circuit and sizes, shows a stable unity-gain follower, and gives a THD-versus-$V_{out,rms}$ curve with: THD falling as the output rises from small values (crossover distortion), a low region (well below 1%) at intermediate levels, and a sharp rise near the clipping level of roughly 2.5–3 V rms into 100 Ω. Exact THD numbers are not graded (allow an order of magnitude), but the shape and the clipping level (±30%) are. Wrong: an input stage whose output dc level cannot drive $v_{in}'$ near $V_{SS}$ + 0.9 V (e.g., an n-channel pair with a p-channel mirror load at the same supplies) without comment, an unstable follower, or THD claimed to rise monotonically from the smallest amplitudes.
