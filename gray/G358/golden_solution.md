# Golden Solution - G358

## Reference answer

≈ 58 µV rms in 1 kHz (spot density ≈ $3.32\times10^{-12}$ V²/Hz), essentially only the thermal noise of the two 100-MΩ source resistors.

- Stage generators: $\overline{v^2} = 2\cdot4kT\frac{2}{3g_m} = 4.4\times10^{-17}$ V²/Hz; $\overline{i^2} = 2qI_G = 3.2\times10^{-35}$ A²/Hz per gate.
- Total: $2\times4kTR_S = 3.32\times10^{-12}$; $2\times\overline{i^2}R_S^2 = 6.4\times10^{-19}$; $\overline{v^2} = 4.4\times10^{-17}$; sum ≈ $3.32\times10^{-12}$ V²/Hz.
- In 1 kHz: $3.32\times10^{-9}$ V² → 57.6 µV rms (compared with ≈ 63 µV for a super-β bipolar pair, whose base-current noise adds ≈ 16%).

## Grading notes

+2: 56–60 µV rms with both source resistors included and the device noise shown to be negligible. +1: correct method with a slip of <10%. 0: one source resistor omitted (≈ 41 µV) or the source noise excluded with the stage noise alone correctly computed (≈ 0.2 µV) and stated as such. −2 (asserted as fact): gate current noise claimed to dominate, the 100-MΩ resistors treated as noiseless without comment while asserting a total, or a result off by more than a factor of 3.
