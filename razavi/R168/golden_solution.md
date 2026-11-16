# Golden Solution - R168

## Reference answer

SNR ≈ 1,480 (≈ 63.4 dB): output signal ≈ 73 mV pp, output noise ≈ 49 µV pp.
- $g_m = \sqrt{2(134\ \mu)(100)(0.5\ \mathrm{mA})} = 3.66$ mS; $R_{SS} = r_O = 1/(0.1 \times 1\ \mathrm{mA}) = 10$ kΩ.
- Differential gain $A_{DM} = g_mR_D = 7.32$: signal at the output 7.32 × 10 mV = 73.2 mV pp.
- CM-to-DM conversion from the load mismatch: $|A_{CM-DM}| = \dfrac{g_m\Delta R_D}{1 + 2g_mR_{SS}} = \dfrac{3.66\ \mathrm{mS}\times 10\ \Omega}{1 + 73.2} = 4.93\times10^{-4}$; noise at the output $100\ \mathrm{mV}\times 4.93\times10^{-4} = 49.3\ \mu$V pp.
- SNR = 73.2 mV / 49.3 µV ≈ 1,485 (= CMRR × 10 mV/100 mV).

## Grading notes

+2: SNR ≈ 1,400–1,600 (≈ 63–64 dB), with $R_{SS}$ = 10 kΩ, $A_{DM} = g_mR_D$ ≈ 7.3 and the conversion factor $g_m\Delta R_D/(1 + 2g_mR_{SS})$. +1: correct method with one slip (result within ±25%), or the result given only in dB/ratio inconsistently. 0: correct differential gain and correct conversion formula but a major numerical error, or only the CMRR computed. -2 (asserted as fact): output noise computed with the CM gain of a symmetric pair ($R_D/(2R_{SS})$, ignoring that it does not appear differentially), $R_{SS}$ from a wrong formula (e.g., $\lambda/I_D$), or SNR = 0.1 (input ratio) claimed unchanged.
