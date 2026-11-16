# Golden Solution - G311

## Reference answer

The output is slew-rate limited: a nearly triangular wave with straight ramps of ±2 V/μs joined by short sinusoidal segments near the peaks. Its amplitude is still ≈ 10 V (≈ 9.97 V), the period is 22.2 μs, and the output lags the input by ≈ 0.8 μs at the zero crossings.

- SR = $I_{EE}/C$ = 20 μA/10 pF = 2 V/μs. The input's maximum slope is $2\pi \times 45\text{ kHz} \times 10\text{ V} = 2.83$ V/μs > SR, so the output cannot follow near the zero crossings (full-power frequency for 10 V is only 31.8 kHz).
- Cycle: the output follows the sine from just after each peak until the sine's slope reaches 2 V/μs, which happens 45° past the peak ($\cos\theta = 2/2.83$), at $V_i = \pm 7.07$ V, about 2.8 μs after the peak. It then ramps linearly at ∓2 V/μs; a 17-V excursion takes ≈ 8.5 μs, so it meets the input again just after the opposite peak, near ∓9.9 V, follows the sine briefly, and repeats.
- So each half period (11.1 μs) consists of ≈ 8.5 μs of linear ramp and ≈ 2.6 μs of tracking the sine around the peak.

## Grading notes

+2: identification that slew limiting occurs (2.83 V/μs required vs 2 V/μs available) and a waveform with ±2 V/μs ramps and rounded tops, amplitude essentially 10 V (or slightly less), with the break from the sine at ≈ ±7 V (45° past the peak) or an equivalent description. +1: slew limiting and the ramp slope right, but the waveform drawn as a pure triangle of reduced amplitude or the tracking segments not identified. 0: slew limiting recognized but the slope or period wrong. −2 (asserted as fact): output claimed to be an undistorted 10-V sine, or the distortion attributed to clipping at the supplies.
