# Golden Solution - A201

## Reference answer

$R_{in} = r_{ds1}\,\Big\|\,\dfrac{r_{ds2}+r_{ds3}}{1+g_{m2}r_{ds2}} = \dfrac{r_{ds1}(r_{ds2}+r_{ds3})}{r_{ds1}+r_{ds2}+r_{ds3}+g_{m2}r_{ds2}r_{ds1}}$.

- The input node sees M1's $r_{ds1}$ to ground in parallel with the resistance looking into the source of the common-gate M2.
- Looking into a source with resistance $R_D$ at the drain: $(r_{ds2}+R_D)/(1+g_{m2}r_{ds2})$; with the output open, $R_D = r_{ds3}$.
- Since $r_{ds3} \sim r_{ds2}$, this is ≈ $2/g_{m2}$, so $R_{in} \approx 2/g_{m2}$ (for comparison, with the output shorted it would be $r_{ds1}\|[r_{ds2}/(1+g_{m2}r_{ds2})] \approx 1/g_{m2}$).

## Grading notes

+2: expression equivalent to the reference. +1: correct structure ($r_{ds1}$ in parallel with the source resistance) with a slip, or the shorted-output version derived instead but clearly labelled. 0: approximate result ≈ $2/g_{m2}$ only. −2 (asserted as fact): $R_{in} = 1/g_{m2}$ regardless of termination presented as exact, $R_{in} = r_{ds1}$, or the drain load ignored in a way that makes $R_{in}$ independent of $r_{ds3}$ while claiming exactness.
