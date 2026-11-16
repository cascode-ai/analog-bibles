# Golden Solution - G138

## Reference answer

$Q_{20}$: $|I_E| \approx 10.0$ mA ($|I_C| \approx 9.8$ mA, $|I_B| \approx 0.196$ mA); $Q_{19}$, $Q_{18}$: ≈ 0.20 mA each; $Q_{14}$: $I_C \approx 4\ \mu$A; $Q_{23}$: $|I_E| \approx 0.40$ mA ($|I_C| \approx 0.39$ mA).
- Load current 10 mA flows from ground through $R_L$ into the output; $Q_{14}$ is almost off, so $Q_{20}$ carries it: $|I_{E20}| \approx 10$ mA, $|I_{C20}| = 10 \times 50/51 = 9.81$ mA, $|I_{B20}| = 0.196$ mA. $|V_{BE20}| = 26\ \mathrm{mV}\ln(9.81\times10^{-3}/10^{-14}) = 0.718$ V.
- Nearly all of $Q_{13A}$'s 0.2 mA flows through the diodes: $V_{D18} = V_{D19} = 26\ \mathrm{mV}\ln(2\times10^{10}) = 0.617$ V.
- Loop: $V_{BE14} = V_{D19} + V_{D18} - |V_{BE20}| = 1.233 - 0.718 = 0.516$ V → $I_{C14} = 10^{-14}e^{0.516/0.026} \approx 4.1\ \mu$A (base current ≈ 20 nA, so the diode current is 0.19998 mA).
- Node $V_2$: $Q_{23}$'s emitter receives the diode current plus $Q_{20}$'s base current: $|I_{E23}| = 0.200 + 0.196 = 0.396$ mA, $|I_{C23}| = 0.388$ mA (base current ≈ 7.8 µA into $Q_{17}$).
- The figure does not say whether the diode-connected $Q_{18}$/$Q_{19}$ are npn or pnp; their terminal current is 0.19998 mA either way and their collector currents are 0.196–0.199 mA, giving $I_{C14} \approx 3.9$–4.04 µA. Taking $I_C \approx I_E$ for the small devices is an acceptable approximation.

## Grading notes

+2: $Q_{20}$ ≈ 9.8–10 mA, diodes ≈ 0.2 mA, $Q_{14}$ within 3–6 µA, $Q_{23}$ ≈ 0.39–0.40 mA including $Q_{20}$'s base current. The question does not say which terminal current is meant, so the $V_2$ node sum 0.396 mA (the emitter current of $Q_{23}$) is a full-credit $Q_{23}$ value even when labelled its collector current; any npn/pnp choice for the diodes is fine. +1: all right except $Q_{23}$ drawn as an npn pull-down (a polarity misread) while its current is still the correct 0.396 mA node sum; or all right except $Q_{23}$ given as 0.2 mA (base current of $Q_{20}$ forgotten) or $Q_{14}$ off by a factor up to 2 from rounding the junction voltages. 0: $Q_{20}$, diode and $Q_{14}$ currents right but $Q_{23}$ wrong because $Q_{20}$'s base current is taken with the wrong sign at node $V_2$ ($|I_{C23}| \approx 0.2 - 0.196$ mA ≈ 4 µA), or only $Q_{20}$ and the diode currents right. −2 (asserted as fact): $Q_{14}$ carrying a large current or the quiescent value (~0.17 mA), the load current assigned to $Q_{14}$, or most of the five currents wrong.
