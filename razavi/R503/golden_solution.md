# Golden Solution - R503

## Reference answer

At low frequencies $\overline{I_{n,in}^2} \approx 4kT\gamma g_{m3} \approx 1.8\times10^{-24}\ \mathrm{A^2/Hz}$ (≈ 1.34 pA/√Hz), set by the feedback device $M_3$.
- $M_3$ ($g_{m3} = \sqrt{2(134\ \mu)(10)(10\ \mu\mathrm{A})}$ = 0.164 mS): its drain noise current flows directly into the input node, exactly like an input current, so it contributes $4kT\gamma g_{m3}$ = 1.81×10⁻²⁴ A²/Hz.
- $M_1$: its gate-referred voltage $4kT\gamma/g_{m1}$ ($g_{m1}$ = 5.18 mS) acts in series with the gate. Because the input node's admittance (excluding the feedback) is $Y_A = 1/r_{O3} + j\omega C_A$, it equals an input current $V_n Y_A$: $4kT\gamma|1/r_{O3} + j\omega C_A|^2/g_{m1}$. At low frequency this is $4kT\gamma/(g_{m1}r_{O3}^2)$ ≈ 2×10⁻³⁰ A²/Hz (negligible). It grows as ω² and catches up with the $M_3$ term only above ω ≈ $\sqrt{g_{m1}g_{m3}}/C_A$ (≈ 10⁹–10¹⁰ rad/s for $C_A$ of 0.1–1 pF).
- $M_2$: referred to the input node it is further divided by $(g_{m1}r_{O1})^2$ ≈ 2700, so it is negligible.
- Total: $\overline{I_{n,in}^2} \approx 4kT\gamma\left[g_{m3} + \dfrac{|1/r_{O3} + j\omega C_A|^2}{g_{m1}}\left(1 + \dfrac{g_{m1}}{g_{m2}(g_{m1}r_{O1})^2}\right)\right] \approx \tfrac{16}{3}kT\,g_{m3}$ at low frequency. (The transimpedance is ≈ $1/g_{m3}$ ≈ 6.1 kΩ, so $M_3$ plays the role of a 6.1-kΩ feedback resistor with γ-scaled noise.)

## Grading notes

+2: low-frequency result ≈ $4kT\gamma g_{m3}$ (1.7–1.9×10⁻²⁴ A²/Hz or 1.3–1.4 pA/√Hz), with $M_1$ and $M_2$ shown negligible at low frequency. Describing the ω²-rising $M_1$ term is a plus. +1: correct dominant term with $M_1$'s contribution mishandled only at high frequency, or the value right with a thin justification. 0: correct method with an arithmetic slip. -2 (asserted as fact): input noise dominated by $M_1$ at low frequency (e.g., $4kT\gamma g_{m1}$ ≈ 5.7×10⁻²³ A²/Hz), noise of the ideal current sources included, or $M_3$'s noise divided by a loop gain.
