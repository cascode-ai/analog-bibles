# Golden Solution - A080

## Reference answer

$v_{CL}$ rises by ≈ 0.12 mV (≈ +115 µV): the p-channel injection (+1.83 mV) slightly exceeds the n-channel injection (−1.72 mV).

- Common quantities: $W\cdot CGDO = 0.176$ fF, $C_{channel} = 1.58$ fF, $(0.176 + 0.790)\ \mathrm{fF}/1\ \mathrm{pF} = 9.66\times10^{-4}$; overlap terms $0.176\ \mathrm{fF}/1\ \mathrm{pF}\times3.2\ \mathrm{V} = 0.563$ mV for each device.
- n-channel: $V_{HT} = 5 - 2.5 - 0.7 = 1.8$ V, $\beta = 110\ \mu\mathrm{A/V^2}$, $\beta V_{HT}^2/(2C_L) = 1.78\times10^8 > U$: slow. Channel term $9.66\times10^{-4}\times\sqrt{\pi\times10^8\times10^{-12}/(2\times110\ \mu)} = 9.66\times10^{-4}\times1.195 = 1.155$ mV; total 1.718 mV, lowering $v_{CL}$ (electrons).
- p-channel: $V_{HT} = 2.5 - 0.7 - 0 = 1.8$ V, $\beta = 50\ \mu\mathrm{A/V^2}$, $\beta V_{HT}^2/(2C_L) = 8.1\times10^7 < U$: fast. $\beta V_{HT}^3/(6UC_L) = 0.486$ V, channel term $9.66\times10^{-4}\times(1.8 - 0.486) = 1.270$ mV; total 1.833 mV, raising $v_{CL}$ (holes).
- Net: the overlap terms cancel exactly; $\Delta v_{CL} = +1.833 - 1.718 = +0.115$ mV, so $v_{CL} \approx 2.50012$ V.

## Grading notes

+2: net change of +0.10 to +0.13 mV with the n-channel device treated as slow and the p-channel device as fast (per the stated rule), opposite signs for the two devices, and cancelling overlap terms. +1: correct regimes and magnitudes with the direction of the net change not stated, or a small numerical slip in an intermediate value that leaves the net change essentially right. 0: correct regimes and magnitudes but the device polarities reversed (the n-channel injection said to raise $v_{CL}$), giving a net change of −0.115 mV; a slip that moves the net change out of range; or both devices put in the same regime (net ≈ +0.56 mV) contrary to the stated rule, with otherwise correct work. −2 (asserted as fact): the two injections added instead of subtracted (≈ 3.5 mV), the p-channel parameters used for the n-channel device or vice versa, or a millivolt-level net error from treating the CMOS switch as a single device.
