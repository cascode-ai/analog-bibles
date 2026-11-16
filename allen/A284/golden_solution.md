# Golden Solution - A284

## Reference answer

[Fig. 2] has the higher PSRR⁺ (mainly at medium and high frequencies, where the circuit of [Fig. 1] is poor).

- [Fig. 1]: M7 forces a fixed current through M6, so $V_{SG6}$ is constant and the gate of M6 follows the $V_{DD}$ ripple. $C_c$ couples this gate directly to the output. As the frequency rises, $C_c$ ties the gate and drain of M6 together and the output follows $V_{dd}$: the supply-to-output gain approaches 1, so PSRR⁺ falls at −20 dB/decade from about the open-loop dominant pole and is ≈ 0 dB around $GB$.
- [Fig. 2]: the gate of M6 still follows $V_{DD}$, but $C_c$ is no longer connected to it. $C_c$ goes to the source of the common-gate M8, a low-impedance node (≈ $1/g_{m8}$) whose voltage is fixed by the constant gate voltage $V_{Bias}$ and the constant current of M10, so it does not follow $V_{DD}$. Ripple on the M6 gate reaches that node only through M8's output resistance, attenuated by ≈ $1/(g_{m8}r_{ds8})$; the M12 current source adds only $g_{ds12}V_{dd}$ (its $V_{SG}$ is set by the diode M11, which follows $V_{DD}$), and that current flows into the low impedance at M8's source.
- The remaining direct path from the M6 gate (which tracks $V_{DD}$) to the output is the small gate–drain capacitance $C_{gd6}$, so at high frequency the supply-to-output gain is reduced from ≈ 1 to roughly $C_{gd6}/C_c$ (more precisely about $C_{gd6}/(C_c + C_{II})$), i.e. PSRR⁺ improves by about $C_c/C_{gd6}$ there. The low-frequency PSRR⁺ (set by the loop gain and $g_{ds6}$) is about the same in both.
- (Side benefit: compensating through the common-gate device also removes the feedforward path that creates the RHP zero.)

## Grading notes

+2: chooses [Fig. 2] and explains that in [Fig. 1] the M6 gate tracks $V_{DD}$ and $C_c$ couples it to the output (the output follows $V_{dd}$ at high frequency), while in [Fig. 2] $C_c$ is returned to the low-impedance source of the fixed-gate common-gate transistor M8, so this coupling is removed; naming the small residual $C_{gd6}$ path (improvement ≈ $C_c/C_{gd6}$ at high frequency) is welcome but not required. +1: correct choice with a partial reason (e.g., "the cascode M8 isolates $C_c$ from the M6 gate", or a description of the M8/$C_c$ local feedback loop) without saying what tracks $V_{DD}$ in [Fig. 1]. 0: correct choice with no valid reason, or a sound discussion that does not commit to a choice. −2 (asserted as fact): [Fig. 1] better or the two equal, or the claim that $C_c$ still couples the ripple to the output in [Fig. 2] as strongly as in [Fig. 1].
