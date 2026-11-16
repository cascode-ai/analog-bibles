# Golden Solution - R666

## Reference answer

All capacitors must be scaled up by a factor of 4.
- $kT/C$ noise: $\overline{v_n^2} = kT/C$, so $v_{n,rms} = \sqrt{kT/C}$.
- Halving $v_{n,rms}$ requires reducing $\overline{v_n^2}$ by 4, hence C × 4 (sampling, feedback and load capacitors alike). Their ratios, and hence the closed-loop gain, are kept.

## Grading notes

- +2: × 4, from $\overline{v_n^2} = kT/C$ and the noise voltage being halved.
- +1: × 4 with thin reasoning.
- 0: correct $kT/C$ relation with an arithmetic slip in the factor.
- -2 (asserted as fact): × 2, √2, ÷ 2 or ÷ 4.
