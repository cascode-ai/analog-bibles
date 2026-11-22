# Detailed solution - A284

Follow the $V_{DD}$ ripple to the gate of M6 and ask how it reaches the output. In both circuits M6's gate tracks $V_{DD}$; the difference is whether the compensation capacitor connects that gate to the output. Low-frequency PSRR⁺ is set by the loop gain and $g_{ds6}$ in both circuits, so the comparison concerns medium and high frequencies.

### Step 1 — Why M6's gate follows $V_{DD}$

In both op amps M7 forces a fixed current through M6. A fixed drain current in saturation means a fixed $V_{SG6}$ (to first order), so the gate of M6 moves with its source, i.e. with the ripple $v_{dd}$. The first-stage mirror, referenced to $V_{DD}$, lets this happen with little opposition.

### Step 2 — Circuit of [Fig. 1]

$C_c$ connects M6's gate directly to the output. As the frequency rises, $C_c$ ties the gate and drain of M6 together, so the output follows the gate and hence $v_{dd}$: the supply-to-output gain approaches 1. PSRR⁺ therefore falls at −20 dB/decade starting near the open-loop dominant pole and reaches about 0 dB around $GB$.

### Step 3 — Circuit of [Fig. 2]

$C_c$ now returns to the source of the common-gate transistor M8. That node is low impedance (about $1/g_{m8}$), and its voltage is fixed by the constant gate voltage $V_{Bias}$ and the constant current of M10, so it does not follow $V_{DD}$. Ripple on the M6 gate (M8's drain) reaches M8's source only through M8's output resistance, attenuated by about $1/(g_{m8}r_{ds8})$. The p-channel source M12 adds only $g_{ds12}v_{dd}$ (its $V_{SG}$ is set by the diode M11, which also follows $V_{DD}$), and that small current flows into the low impedance at M8's source. Thus $C_c$ no longer carries the ripple to the output.

The remaining direct path from the M6 gate to the output is the small gate–drain capacitance $C_{gd6}$. At high frequency the supply-to-output gain falls from about 1 to roughly $C_{gd6}/(C_c+C_{II})$, so PSRR⁺ there improves by about $C_c/C_{gd6}$.

### Step 4 — Conclusion

[Fig. 2] has the higher PSRR⁺, mainly at medium and high frequencies, because its compensation capacitor is returned to a node that does not track $V_{DD}$. As a side benefit, compensating through the common-gate device also removes the feedforward path through $C_c$ that creates the RHP zero.
