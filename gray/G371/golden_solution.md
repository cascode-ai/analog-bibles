# Golden Solution - G371

## Reference answer

$f \approx 100$ MHz.

- Low-frequency: $F_0 \approx 4.0$ (6.0 dB) from the uncorrelated generators $\overline{i_i^2} = 2q(I_B + I_C/\beta_0^2) + \overline{v_{ia}^2}/R_F^2 + 4kT/R_F$ with the source noise $4kT/R_S$ (3.99; 4.02 if $\overline{v_{ia}^2}$ is referred through $(1/R_S + 1/R_F)^2$). A full nodal analysis keeping $r_b$, the noise of $R_F$ and $R_L$ and the correlation of the collector shot noise gives $F_0 \approx 4.2$ (6.2 dB) and $f \approx 101$ MHz, equally acceptable. Treating $R_F$ as noiseless instead gives $F_0 \approx 3.0$–3.1 and $f \approx 87$–89 MHz.
- At high frequency the collector shot noise referred to the input grows: $2qI_C/|\beta(jf)|^2 = 2qI_C\left(\frac{1}{\beta_0^2} + \frac{f^2}{f_T^2}\right)$ (the usual single-pole model $\beta(jf) = \beta_0/(1 + j\beta_0 f/f_T)$, i.e. $C_\mu$ neglected and $C_\pi \approx g_m/(2\pi f_T)$; the nodal 101-MHz value uses the same model).
- NF 3 dB higher means $F = 2F_0$: $2qI_C\frac{f^2}{f_T^2} = F_0\cdot\frac{4kT}{R_S}$ → $\frac{f}{f_T} = \sqrt{\frac{3.99\times1.66\times10^{-24}}{1.6\times10^{-22}}} = 0.203$ → $f \approx 102$ MHz.

## Grading notes

+2: 95–110 MHz from the $f^2/f_T^2$ rise of the referred collector noise and the condition $F = 2F_0$ (any $F_0$ between about 3.9 and 4.3 is fine: the simple uncorrelated-generator value ≈ 4.0 and the full nodal value ≈ 4.2 are both correct). +1: correct method with a slip of <20%, the feedback-resistor noise omitted (≈ 87–89 MHz), or the condition taken as $F - 1$ doubling (gives ≈ 89 MHz) with otherwise correct work. 0: right mechanism identified but the frequency wrong by a factor of 2–3 through an algebra slip. −2 (asserted as fact): the noise figure claimed to rise because of $r_b$ or $R_F$ alone, the answer placed at $f_T/\sqrt{\beta}$ or $f_\beta$ without justification, or values off by more than 3×.
