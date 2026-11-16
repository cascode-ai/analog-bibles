# Golden Solution - A073

## Reference answer

$v_{out}/v_{in} = 1/(1 + j f/f_{-3dB})$ with $f_{-3dB} \approx 8.44$ MHz ($r_{ON} \approx 9.43$ kΩ).

- $V_{GS} = 4.5 - 3 = 1.5$ V and $V_T(V_{SB} = 3\ \mathrm{V}) = 1.135$ V, so $V_{GS} - V_T = 0.365$ V (versus 0.865 V with 5 V on the gate).
- $r_{ON} = 1/(110\ \mu \times 2.64 \times 0.365) = 9.43\ \mathrm{k\Omega}$; $f_{-3dB} = 1/(2\pi r_{ON} \times 2\ \mathrm{pF}) = 8.44$ MHz (equivalently $20\ \mathrm{MHz} \times 0.365/0.865$).
- Bode diagram: magnitude 0 dB up to 8.44 MHz, then −20 dB/decade (−20 dB at 84 MHz, −26 dB at 168 MHz); the asymptotic curve is the original one moved left by a factor 2.37. Phase from 0° to −90°, −45° at 8.44 MHz.

## Grading notes

+2: single-pole response with corner 8.0–8.9 MHz from the reduced overdrive (body effect included), and a Bode sketch with 0 dB flat region and −20 dB/decade roll-off (phase optional). +1: correct corner with the Bode plot only described loosely, or a small arithmetic slip. 0: body effect ignored (corner ≈ 12.3 MHz from 0.8/1.3 scaling), or correct $r_{ON}$ but no frequency response given. −2 (asserted as fact): a higher corner frequency than 20 MHz, a change in the low-frequency gain, a second-order roll-off, or the bandwidth scaled by the gate-voltage ratio 4.5/5.
