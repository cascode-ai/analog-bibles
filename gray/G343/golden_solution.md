# Golden Solution - G343

## Reference answer

$\overline{v_o^2}/\Delta f \approx 4.65\times10^{-19}$ V²/Hz (≈ 0.68 nV/√Hz); total in 100 kHz ≈ $4.65\times10^{-14}$ V², i.e. ≈ 0.22 µV rms.

- Bias: $I_D = (10-0.7)/20\text{ k} = 0.465$ mA, $r_d = kT/qI_D = 55.9\ \Omega$; the node impedance is $r_d \parallel 20\text{ k} = 55.8\ \Omega$.
- Noise currents into that node: diode shot noise $2qI_D = 1.49\times10^{-22}$ A²/Hz and resistor thermal noise $4kT/20\text{ k} = 8.3\times10^{-25}$ A²/Hz (only 0.6% of the total).
- $\overline{v_o^2}/\Delta f = (2qI_D + 4kT/R)(r_d\parallel R)^2 = 1.496\times10^{-22}\times(55.8)^2 = 4.65\times10^{-19}$ V²/Hz. (Note $2qI_D r_d^2 = 2kT\,r_d$: the diode behaves like half the thermal noise of a resistor $r_d$.)
- The spectrum is white, so in 100 kHz: $4.65\times10^{-19}\times10^5 = 4.65\times10^{-14}$ V², $v_o \approx 0.216\ \mu$V rms.

## Grading notes

+2: spectral density within ±10% of $4.65\times10^{-19}$ V²/Hz and total ≈ 0.20–0.23 µV rms (any reasonable diode drop 0.6–0.8 V is fine). +1: shot noise of the diode right but the 20-kΩ resistor noise or its shunting of $r_d$ ignored (changes the result by <1%, so effectively +2 if the numbers are right), or a small arithmetic slip that does not change the order of magnitude. 0: correct method with a numerical slip in the final value, or only the spectral density given without the 100-kHz total. −2 (asserted as fact): treating $r_d$ as a physical resistor with thermal noise $4kTr_d$ (gives about twice the correct density), using the 20-kΩ resistor's thermal voltage noise $4kT\cdot20$ kΩ unattenuated at the output, or totals off by orders of magnitude.
