# Golden Solution - R418

## Reference answer

With $G_m = g_{m1} + g_{m2}$ (exact; the output resistance $r_{O1}\|r_{O2}$ cancels):
$\overline{V_{n,in}^2} = 4kTR_1 + \dfrac{4kT}{R_2}\left[\dfrac{R_2(1 + G_mR_1)}{G_mR_2 - 1}\right]^2 + 4kT\gamma G_m\left[\dfrac{R_1+R_2}{G_mR_2 - 1}\right]^2$,
and for $G_mR_2 \gg 1$: $\overline{V_{n,in}^2} \approx 4kTR_1 + \dfrac{4kT}{R_2}\left(R_1 + \dfrac{1}{G_m}\right)^2 + \dfrac{4kT\gamma}{G_m}\left(1 + \dfrac{R_1}{R_2}\right)^2$.

- $R_1$'s noise voltage is in series with $V_{in}$: $4kTR_1$ directly.
- $R_2$'s noise current (between the gate node and the output) is referred to the input through the ratio of its transfer to the output to the signal gain: $R_2(1 + G_mR_1)/(G_mR_2 - 1)$ (≈ $R_1 + 1/G_m$).
- The transistors' noise current at the output, $4kT\gamma G_m$, is referred through $(R_1+R_2)/(G_mR_2 - 1)$, i.e. the inverter's own input noise $4kT\gamma/G_m$ multiplied by $(1 + R_1/R_2)^2$, the square of the noise gain $1 + R_2/R_1$ over the signal gain $R_2/R_1$.
- Example: $R_1$ = 1 kΩ, $R_2$ = 10 kΩ, $G_m$ ≈ 10.8 mS, 300 K: $1.66\times10^{-17} + 2.0\times10^{-18} + 1.3\times10^{-18} \approx 2.0\times 10^{-17}\ \mathrm{V^2/Hz}$ (4.5 nV/√Hz), dominated by $R_1$.

## Grading notes

+2: the three contributions with correct weights (exact or large-$G_mR_2$ form; equivalent forms accepted). The circuit's thermal noise includes $R_1$ and $R_2$: an answer that highlights the transistor term but also gives the correct $R_1$ and $R_2$ terms and their total earns +2; one that treats only the channel noise of $M_1$, $M_2$ (the resistors' noise left out) with that term right earns 0. +1: $R_1$ and transistor terms right but the $R_2$ term simplified to $4kTR_1^2/R_2$ (missing the $1/G_m$ part) or another minor slip. 0: one term missing or one weight wrong (e.g. transistor noise without the $(1 + R_1/R_2)^2$ factor). -2 (asserted as fact): $R_1$'s noise omitted while $R_2$'s is included, or $R_1$'s noise divided by the gain, the input-referred noise claimed reduced by the loop gain, or the transistor noise referred with $g_{m1}$ only.
